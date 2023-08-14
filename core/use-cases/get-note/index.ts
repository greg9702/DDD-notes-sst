import { noteRepository } from "../../repository";
import { GetNoteUseCase } from "./get-note";

const getNoteUseCase = new GetNoteUseCase(noteRepository);

export { getNoteUseCase };
