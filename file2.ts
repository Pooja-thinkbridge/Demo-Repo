import { ex } from "./file1";

const ob = new ex();
ob.display();

namespace upper {

    export function ToCapital(str: string): string {
        return str.toUpperCase();
    }
}
class namespc {
    
    t1 = upper.ToCapital("welcome");
    disp()
    {
        console.log(this.t1);
    }
}

const n = new namespc();
n.disp();