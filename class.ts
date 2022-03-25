class Employee {
    empCode: number;
    empName: string;

    constructor(code: number, name: string) {
            this.empName = name;
            this.empCode = code;
    }

    get()  {
        console.log("Emp Code : "+this.empCode);
        console.log("Name : "+this.empName);
    }
}

const b1 = new Employee(101, "Raj");
b1.get();


//abstract

abstract class Person
{
    name1 : string;
    constructor(name:string)
    {
        this.name1 = name;
    }

    abstract display() : emp1;
}


class emp1 extends Person{
    id : number;
    constructor(id:number,name:string)
    {
        super(name);
        this.id = id;
    }

 display():emp1 {
    return new emp1(101,"Pooja");
    
 }   

 get()
 {
     console.log(this.id);
     console.log(this.name1);
 }
}

const e = new emp1(102 , "Diya");
e.get();