import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup,ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-todo',
  imports:[CommonModule,ReactiveFormsModule],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
onSubmit() {
throw new Error('Method not implemented.');
}
  todoForm: FormGroup;
  todos: { text: string }[] = []; 

  constructor(private fb: FormBuilder) {
    this.todoForm = this.fb.group({
      task: ['']  
    });
  }

  addTask() {
    if (this.todoForm.valid && this.todoForm.value.task.trim()) {
      this.todos.push({ text: this.todoForm.value.task });
      this.todoForm.reset(); 
    }
  }

  removeTask(index: number) {
    this.todos.splice(index, 1);  
  }
}

