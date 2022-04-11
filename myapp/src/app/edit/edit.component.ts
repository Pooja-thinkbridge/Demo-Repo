import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  regForm: FormGroup;

  constructor(private frm : FormBuilder) {
    this.regForm = frm.group({
      fname : new FormControl(),
      email : new FormControl(),
      mob : new FormControl(),
      addr: new FormControl(),
      passwd: new FormControl()

    })
   }

  ngOnInit(): void {
    this.regForm = this.frm.group(
      {
       fname : [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20),
            Validators.pattern('^[a-zA-Z]+$')
          ]
        ],

        email : ['',[Validators.required , Validators.email]],
        
        addr : [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(50)
          ]
        ],

        passwd : [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(30)
          ]
        ],
        mob: [
          '',
          [
            Validators.required,
            Validators.pattern('^[0-9]+$'),
            Validators.minLength(10),
            Validators.maxLength(10)
          ]
        ],

      }
    )

  }

  getData()
  {
    if (this.regForm.invalid) {
      return;
    }
    console.log(this.regForm.value);
    this.onReset()
    
  }

  get f(): { [key: string]: AbstractControl } {
    return this.regForm.controls;
  }
  onReset(): void {

    this.regForm.reset();
  }

}
