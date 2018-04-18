export class ToDoItem {
  constructor(
    public text: string,
    public completed = false,
    public due?: Date,
  ) {}


}
