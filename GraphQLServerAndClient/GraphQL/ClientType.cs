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
    public class ClientType: ObjectGraphType<Client>
    {

        public ClientType(ClientRepository repositoryClient)
        {
            Name = "Client";

            Field(d => d.Id).Description("The id of the client");
            Field(d => d.Created).Description("The created time of the client");
            Field(d => d.LastModified).Description("The last modified time of the client");

            Field(d=>d.ClientName).Description("The name of the client");
            Field(d => d.ClientPassWord).Description("The password of the client");
            Field(d => d.Email).Description("The email of the client");

            Field<ListGraphType<ProductType>>(
                name: "Products", 
                resolve: context =>
                {
                    return repositoryClient.GetClientProducts(context.Source.Id);
                });
        }
    }
}
