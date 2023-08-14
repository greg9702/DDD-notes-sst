import handler from "@notes-ddd/core/handler";
import { APIGatewayProxyEvent } from "aws-lambda";

export const main = handler(
  async (event: APIGatewayProxyEvent): Promise<any> => {
    // unmarshal request
    // validate request
    // call use case
    return { hello: "world" };
  }
);
