import { DynamoNotesRepository } from "../adapters/secondary/dynamo";

const noteRepository = new DynamoNotesRepository();

export { noteRepository };
