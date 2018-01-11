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
  public class MyServiceMutationSchema : ObjectGraphType
  {
    public MyServiceMutationSchema(IUnitOfWork unitOfWork)
    {
      Name = "Mutation";

      Field<ClientType>(
          "addClient",
          arguments: new QueryArguments(new QueryArgument<NonNullGraphType<ClientInputType>> { Name = "client" }),
          resolve: context =>
          {
            var client = context.GetArgument<Client>("client");
            unitOfWork.Repository<Client>().Insert(client);
            return true;
          }
      );

      Field<ProductType>(
          "addProduct",
          arguments: new QueryArguments(new QueryArgument<NonNullGraphType<ProductInputType>> { Name = "product"}),
          resolve: context =>
          {
            var product = context.GetArgument<Product>("id");
            unitOfWork.Repository<Product>().Insert(product);
            return true;
          }
      );

    }
  }
}
