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
