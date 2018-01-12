using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BussinessCore.Model;
using DataAccessSqlServer;
using GenericGraphQLService.GraphQL;
using GenericUnitOfWork;
using GraphQL;
using GraphQL.Execution;
using GraphQL.Instrumentation;
using GraphQL.Types;
using GraphQL.Validation;
using GraphQL.Validation.Complexity;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;

namespace GenericGraphQLService.Controllers
{
  [Route("graphql")]
  public class GraphQlController : Controller
  {
    private readonly IDocumentExecuter documentExecuter;
    private readonly ISchema schema;
    private readonly ILogger<GraphQlController> logger;

    public GraphQlController(IDocumentExecuter documentExecuter, ISchema schema, ILogger<GraphQlController> logger)
    {
      this.documentExecuter = documentExecuter;
      this.schema = schema;
      this.logger = logger;
    }

    [HttpPost]
    public async Task<IActionResult> Post([FromBody] GraphQlQuery query)
    {
      if (query == null) { throw new ArgumentNullException(nameof(query)); }

      var executionOptions = new ExecutionOptions
      {
        Schema = schema,
        Query = query.Query,
        Inputs = JsonConvert.SerializeObject(query.Variables).ToInputs(),
        OperationName = query.OperationName,
        ComplexityConfiguration = new ComplexityConfiguration { MaxDepth = 15 }
      };
      executionOptions.FieldMiddleware.Use<InstrumentFieldsMiddleware>();


      try
      {
        var result = await documentExecuter.ExecuteAsync(executionOptions).ConfigureAwait(false);

        if (result.Errors?.Count > 0)
        {
          logger.LogError("GraphQL errors: {0}", result.Errors);
          return BadRequest(result);
        }

        logger.LogDebug("GraphQL execution result: {result}", JsonConvert.SerializeObject(result.Data));
        return Ok(result);
      }
      catch (Exception ex)
      {
        logger.LogError("Document exexuter exception", ex);
        return BadRequest(ex);
      }
    }
  }
}
