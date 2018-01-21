using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BussinessCore.Infrastructure;
using GenericGraphQLService.GraphQL;
using GenericUnitOfWork;
using GenericUnitOfWork.Base;
using GraphQL;
using GraphQL.Http;
using GraphQL.Types;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace GenericGraphQLService
{
  public class Startup
  {
    public Startup(IConfiguration configuration)
    {
      Configuration = configuration;
      DataAccessSqlServer.DatabaseHelper.StartUp();
    }

    public IConfiguration Configuration { get; }

    // This method gets called by the runtime. Use this method to add services to the container.
    public void ConfigureServices(IServiceCollection services)
    {
      services.AddTransient<IAppContext>(_ => DataAccessSqlServer.DatabaseHelper.CreateMyAppContext());
      services.AddTransient<ClientRepository>();
      services.AddTransient<ProductRepository>();
      services.AddScoped<IUnitOfWork>(sp =>
      {
        IAppContext appContext = sp.GetService<IAppContext>();
        return new UnitOfWork(appContext, new ClientRepository(appContext), new ProductRepository(appContext));
      });

      services.AddSingleton<IDocumentExecuter, DocumentExecuter>();
      services.AddSingleton<IDocumentWriter, DocumentWriter>();
      services.AddTransient<ClientType>();
      services.AddTransient<ProductType>();
      services.AddScoped<MyServiceQuerySchema>();
      services.AddScoped<MyServiceMutationSchema>();
      services.AddScoped<ISchema, GenericRepositorySchema>();

      services.AddCors();

      services.AddMvc();
    }

    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    public void Configure(IApplicationBuilder app, IHostingEnvironment env)
    {
      if (env.IsDevelopment())
      {
        app.UseDeveloperExceptionPage();
      }

      //Configure Cors
      app.UseCors(builder => builder
          .AllowAnyOrigin()
          .AllowAnyHeader()
          .AllowAnyMethod());

      app.UseGraphiQl();

      app.UseDefaultFiles();
      app.UseStaticFiles();

      app.UseMvc(routes =>
      {
        routes.MapRoute(
                  name: "default",
                  template: "{controller=GraphQL}/{action=Index}"
                  );
      });
    }
  }
}
