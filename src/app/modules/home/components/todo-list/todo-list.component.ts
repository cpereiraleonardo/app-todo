import { Component, DoCheck } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements DoCheck {
  public taskList: Array<TaskList> = JSON.parse(localStorage.getItem("list") || '[]');

  ngDoCheck(): void {
    this.steLocalStorate();
  }

  public steLocalStorate() {
    if (this.taskList) {
      this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked));
      localStorage.setItem("list", JSON.stringify(this.taskList));
    }
  }

  public deleteItemTaskList(index: number) {
    this.taskList.splice(index, 1);
  }

  public deleteAllTaskList() {
    const confirm = window.confirm("Você deseja realmente excluir todas as Tasks?")

    if (confirm) {
      this.taskList = [];
    }
  }

  public setEmitTaskList(event: string) {
    this.taskList.push({ task: event, checked: false });
  }

  public validationInput(task: string, index: number) {

    if (!task.length) {
      const confirm = window.confirm("A Task está vazia, deseja excluí-la?");
      if (confirm) {
        this.deleteItemTaskList(index);
      }
    }


  }
}
