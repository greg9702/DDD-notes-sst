export class Note {
  private _id: string;

  constructor() {
    this._id = "123";
  }

  public get id(): string {
    return this._id;
  }
}
