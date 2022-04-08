import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  constructor(public crud:HttpService) {}
  todolist : any =[];
  todo : any =[];
  ngOnInit(): void {
   this.listTodos();
 }
 
 listTodos()
 {
   this.crud.list().subscribe((resp:any) => {this.todolist = resp;}
   )
 }
 
 createtodo()
 {
   const task:any= prompt("Enter Task u want to add");
   
 
 
   let data=
   {
     title : task,
     date : new Date().toString().slice(0,10)
   }
   this.crud.create(data).subscribe((resp:any) => {this.listTodos();})
 }
 
 
 deleteTodo(id:any)
 {
   this.crud.delete(id).subscribe((resp:any) => {this.listTodos();})
 }



}
