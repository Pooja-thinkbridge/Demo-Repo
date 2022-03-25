class shape {
    static pi: number = 3.14;
    protected side : number = 10;
public x:string="BaseClass";
}
class circle{

 area= (r:number) => 
    console.log("Circle Area : "+shape.pi * r * r);
}
class square extends shape
{
    area= () =>
    console.log("Sqare area : "+ this.side * this.side);
}

const c = new circle();
c.area(5);

const s = new square();
s.area();
