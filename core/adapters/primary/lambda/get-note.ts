import { APIGatewayProxyEvent } from "aws-lambda";
import { handler } from "./handler";
import { getNoteUseCase } from "../../../use-cases/get-note/index";

export const main = handler(
  async (event: APIGatewayProxyEvent): Promise<any> => {
    let note = await getNoteUseCase.execute(event);

    return note;
  }
);
