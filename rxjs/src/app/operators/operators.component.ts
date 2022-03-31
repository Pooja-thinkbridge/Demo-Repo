import { UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { Observable , from , of, map, take } from 'rxjs';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css']
})
export class OperatorsComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {

    //of Operator
const emp = {
  name : "Pooja"
};
const obsemp : Observable<any> = of(emp);
obsemp.subscribe((data) => {console.log(data);});

const array=[1,2,3,4,5,6,7]
const obsarr = of(array);
obsarr.subscribe (val => console.log(val),
() => console.log("Complete"))  


//from operator
//observable from promise

const p1 = new Promise(resolve => console.log("Promise Resolved"));
const obspromise = from(p1);
obspromise.subscribe(val => console.log(val),
() => console.log("complete")
)

//map
    const srcName$ = from(['John', 'Tom', 'Jerry']);
    srcName$
    .pipe(map(x => x.toUpperCase()))
    .subscribe(val => console.log(val));


      //take
const obs = of(1,2,3,4,5,6).pipe(take(3));
obs.subscribe(val => console.log(val));

//

  }


}
