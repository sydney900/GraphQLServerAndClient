using BussinessCore.Model;
using GraphQL.Types;

namespace GenericGraphQLService.GraphQL
{
    public class ProductType : ObjectGraphType<Product>
    {
        public ProductType()
        {
            Field(d => d.Id).Description("The id of the product");
            Field(d => d.Created).Description("The created time of the product");
            Field(d => d.LastModified).Description("The last modified time of the product");

            Field(d => d.Name).Description("The name of the product");
        }
    }
}