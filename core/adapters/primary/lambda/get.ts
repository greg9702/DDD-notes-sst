import { APIGatewayProxyEvent } from "aws-lambda";
import { handler } from "./handler";

export const main = handler(
  async (event: APIGatewayProxyEvent): Promise<any> => {
    // unmarshal request
    // validate request
    // call use case
    return { hello: "world" };
  }
);
