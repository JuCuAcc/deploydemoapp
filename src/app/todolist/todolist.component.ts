import { Component } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {

  //tasks: { content: string; done: boolean }[] = [];

  tasks: { content: string; done: boolean }[] = [
    { content: '7 minutes exercise', done: false },
    { content: 'Buy some chocolates', done: false },
    { content: 'Make a Project', done: true },
    { content: 'Buy a Jacket', done: false },
    { content: 'Math Homework', done: true },
    { content: 'Start React Native', done: false }
  ];

  addItem(taskInput: HTMLInputElement): void {
    const input = taskInput.value;

    if (this.validateInput(input)) {
      this.tasks.unshift({ content: input, done: false });
      taskInput.value = '';
    }
  }

  toggleDone(index: number): void {
    if (this.tasks[index]) {
      this.tasks[index].done = !this.tasks[index].done;
    }
  }

  removeItem(index: number): void {
    if (this.tasks[index]) {
      this.tasks.splice(index, 1);
    }
  }

  validateInput(input: string): boolean {
    return !!input.trim();
  }
}
