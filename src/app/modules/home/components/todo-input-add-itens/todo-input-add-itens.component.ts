import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.scss']
})
export class TodoInputAddItensComponent {

  @Output() public emitItemTaskList = new EventEmitter();

  public addItemTaksList: string = "";

  public submitItemTaskList() {
    this.addItemTaksList = this.addItemTaksList.trim();

    if (this.addItemTaksList) {
      this.emitItemTaskList.emit(this.addItemTaksList);
      this.addItemTaksList = "";
    }
  }
}
