class base
{

    public name:string;

    constructor(name:string)
    {
        this.name=name
    }
   
   display(){
      console.log ("Hello This is base class");
   }
  show(){
      console.log("Welcome!! "+this.name);
  }
  
}

class child extends base{
     
  display() {
  super.display();
      console.log("Hello This is derived class");
     
  }
  Print = () => super.show();
}


const cobj = new child("abc");
cobj.display();
cobj.Print();

const bobj = new base("Pooja");
bobj.show();





