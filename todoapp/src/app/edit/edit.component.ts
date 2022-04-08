import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id = this.actRoute.snapshot.params['id'];

  todo:any=[];

  constructor(private crud : HttpService , public actRoute : ActivatedRoute , public route : Router)  { }

  ngOnInit(): void {
    this.crud.getTask(this.id).subscribe((res) => this.todo = res)
  }
edit(id:any , data:any)
{
  if (window.confirm('Yes, please...')) {
    this.crud.edit(this.id, data).subscribe((res) => {
      this.route.navigate(['/list']);
    });
  }
}
}
