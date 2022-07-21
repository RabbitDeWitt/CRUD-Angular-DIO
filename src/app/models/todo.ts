export class Todo {
  id: number = 0;
  title: string = '';
  itsDone: boolean = false;

  constructor(id: number, title: string, status: boolean){
    this.id = id;
    this.title = title;
    this.itsDone = status;
    }
}