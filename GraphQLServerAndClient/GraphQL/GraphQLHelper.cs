using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using GraphQL.Types;

namespace GenericGraphQLService
{
    public class GraphQLHelper
    {
        public static Schema CreateSchemaFromAssembly()
        {
            Assembly[] assemblies = new Assembly[] { typeof(BussinessCore.Model.Client).Assembly };

            return CreateSchemaFromAssembly(assemblies);
        }

        private static Schema CreateSchemaFromAssembly(Assembly[] assemblies)
        {
            var mutation = new ObjectGraphType
            {
                Name = "RootMutations"
            };
            var query = new ObjectGraphType
            {
                Name = "RootQueries"
            };

            var schema = new Schema()
            {
                Mutation = mutation.Fields.Any() ? mutation : null,
                Query = query.Fields.Any() ? query : null
            };

            return schema;

        }
    }
}
