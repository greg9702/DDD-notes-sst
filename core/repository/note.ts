import { Note } from "../domain/note";

export interface NotesRepositoryInterface {
  getNote(id: string): Promise<Note>;
}
