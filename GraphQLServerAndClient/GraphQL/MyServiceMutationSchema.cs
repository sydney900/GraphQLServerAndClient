using BussinessCore.Infrastructure;
using BussinessCore.Model;
using GenericUnitOfWork;
using GraphQL.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GenericGraphQLService.GraphQL
{
  public class MyServiceMutationSchema : ObjectGraphType<object>
  {
    public MyServiceMutationSchema(IUnitOfWork unitOfWork)
    {
      Name = "Mutation";

      Field<ClientType>(
          "addClient",
          arguments: new QueryArguments(new QueryArgument<NonNullGraphType<ClientInputType>> { Name = "clientInput" }),
          resolve: context =>
          {
            var client = context.GetArgument<Client>("clientInput");
            unitOfWork.Repository<Client>().Insert(client);
            unitOfWork.SaveChanges();
            return client;
          }
      );

      Field<ClientType>(
        "deleteClient",
          arguments: new QueryArguments(new QueryArgument<NonNullGraphType<IntGraphType>> { Name = "id" }),
          resolve: context =>
          {
            var id = context.GetArgument<long>("id");
            unitOfWork.Repository<Client>().Delete(id);
            unitOfWork.SaveChanges();
            return null;
          }
        );

      Field<ProductType>(
          "addProduct",
          arguments: new QueryArguments(new QueryArgument<NonNullGraphType<ProductInputType>> { Name = "product" }),
          resolve: context =>
          {
            var product = context.GetArgument<Product>("id");
            unitOfWork.Repository<Product>().Insert(product);
            return unitOfWork.SaveChanges();
          }
      );

      Field<ProductType>(
        "deleteProduct",
          arguments: new QueryArguments(new QueryArgument<NonNullGraphType<IntGraphType>> { Name = "id" }),
          resolve: context =>
          {
            var id = context.GetArgument<long>("id");
            unitOfWork.Repository<Product>().Delete(id);
            return unitOfWork.SaveChanges();
          }
        );

    }
  }
}
