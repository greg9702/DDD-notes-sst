import { Note } from "../../domain/note";
import { NotesRepositoryInterface } from "../../repository/note";

export class DynamoNotesRepository implements NotesRepositoryInterface {
  constructor() {}

  getNote(id: string): Promise<Note> {
    return new Promise((resolve, reject) => {
      resolve(new Note());
    });
  }

  save(note: Note): Promise<any> {}
}
