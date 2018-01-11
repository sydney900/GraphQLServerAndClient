using GraphQL.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GenericGraphQLService.GraphQL
{
    public class ClientInputType: InputObjectGraphType
    {
        public ClientInputType()
        {
            Name = "ClientInput";
            Field<NonNullGraphType<StringGraphType>>("clientName");
            Field<NonNullGraphType<StringGraphType>>("clientPassword");
            Field<StringGraphType>("email");
        }
    }
}
