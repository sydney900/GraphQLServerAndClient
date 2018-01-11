using BussinessCore.Infrastructure;
using GraphQL.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GenericGraphQLService.GraphQL
{
    public class BaseEntityInterface: InterfaceGraphType<BaseEntity>
    {
        public BaseEntityInterface()
        {
            Name = "BaseEntity";

            Field(d => d.Id).Description("The id of the base entity");
            Field(d => d.Created).Description("The created time of the base entity");
            Field(d => d.LastModified).Description("The last modified time of the base entity");
        }
    }
}
