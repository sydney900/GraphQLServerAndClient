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
    public class MyServiceQuerySchema: ObjectGraphType
    {
        public MyServiceQuerySchema(IUnitOfWork unitOfWork)
        {
            Name = "RootQuery";            

            Field<ClientType>(
                "client",
                arguments: new QueryArguments(new QueryArgument<NonNullGraphType<StringGraphType>> { Name = "id", Description = "id of the client"}),
                resolve: context =>
                {
                    var id = context.GetArgument<long>("id");
                    return unitOfWork.Repository<Client>().Get(id);
                }
            );

            Field<ProductType>(
                "product",
                arguments: new QueryArguments(new QueryArgument<NonNullGraphType<StringGraphType>> { Name = "id", Description = "id of the product" }),
                resolve: context =>
                {
                    var id = context.GetArgument<long>("id");
                    return unitOfWork.Repository<Product>().Get(id);
                }
            );
            
        }
    }
}
