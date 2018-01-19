using BussinessCore.Infrastructure;
using BussinessCore.Model;
using GenericUnitOfWork;
using GenericUnitOfWork.Base;
using GraphQL.Types;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Threading.Tasks;

namespace GenericGraphQLService.GraphQL
{
    public class GenericRepositorySchema: Schema
    {
        public GenericRepositorySchema(IServiceProvider serviceProvider, IUnitOfWork unitOfWork, MyServiceQuerySchema querySchema, MyServiceMutationSchema mutationSchema)
        {
            this.ResolveType = type => (GraphType)serviceProvider.GetService(type);
            Query = querySchema;
            Mutation = mutationSchema;
        }
    }
}
