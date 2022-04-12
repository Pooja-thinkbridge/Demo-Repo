import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private crud:HttpService) { }
  story : any =[];
  
  arr : any=[];
  
  ngOnInit(): void {
   
    for(let i=1 ; i<=40 ; i++)
    {
   this.list(i);
    }
   
 }
 
 list(id : number) : any
 {
  
   this.crud.list(id).subscribe((resp) => {
   
   if(resp.type == "story")
     {
      this.story.push(resp);      
     }


  }
   )}
 


 }
