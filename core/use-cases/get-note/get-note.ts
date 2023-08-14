import { Note } from "../../domain/note";
import { NotesRepositoryInterface } from "../../repository/note";
import { UseCase } from "./../interface";
import { GetNoteDTO } from "./get-note-dto";

type Response = Note;

export class GetNoteUseCase implements UseCase<GetNoteDTO, Promise<Response>> {
  private noteRepository: NotesRepositoryInterface;

  constructor(noteRepository: NotesRepositoryInterface) {
    this.noteRepository = noteRepository;
  }

  async execute(request: GetNoteDTO): Promise<Response> {
    let note = await this.noteRepository.getNote("123");
    return note;
  }
}
