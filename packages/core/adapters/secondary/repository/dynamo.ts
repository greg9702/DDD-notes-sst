import { RepositoryInterface } from "./interface";

export class DynamoRepository implements RepositoryInterface {
  getNote(id: string): void {
    console.log(`get note id: ${id}`);
  }
  getNotes(): void {
    console.log(`get notes id`);
  }
}
