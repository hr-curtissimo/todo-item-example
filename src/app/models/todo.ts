export class ToDoItem {
  id: number;
  constructor(
    public text: string,
    public completed = false,
    public due?: Date,
  ) {}


}
