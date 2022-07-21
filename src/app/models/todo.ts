export class Todo {
  id: number;
  title: string;
  itsDone: boolean;

  constructor(id: number, title: string, status: boolean){
    this.id = id;
    this.title = title;
    this.itsDone = status;
    }
}