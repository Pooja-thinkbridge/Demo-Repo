class base
{

    public name:string="poja";

    constructor(name:string)
    {
        this.name=name
    }
   
   display(name:string){
      console.log (this.name);
   }
  show(){
      console.log("Welcome!! "+this.name);
  }
  
}

class child extends base{
    name:string = "child";
     
  display(name:string) {
  super.display(this.name);
      console.log(this.name);
     
  }
  Print = () => super.show();
}

const name1 :string="abc";
const cobj = new child("abc");
cobj.display(name1);
cobj.Print();

const bobj = new base(name1);
bobj.show();





