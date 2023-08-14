import { Api, StackContext } from "sst/constructs";

export function ApiStack({ stack }: StackContext) {
  const api = new Api(stack, "Api", {
    defaults: {
      function: {
        environment: {},
      },
    },
    routes: {
      "GET /hello": "packages/core/adapters/primary/lambda/get.main",
    },
  });

  // Show the API endpoint in the output
  stack.addOutputs({
    ApiEndpoint: api.url,
  });

  // Return the API resource
  return {
    api,
  };
}