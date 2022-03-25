interface Project{
    id : number;
    name : string;
}

interface emp {
    id : number
    name : string
    isActive : boolean
    designation ?: string
  project ?: Array<Project>
}



class EmpArrr{
    public emparr : Array<emp> =[
        {
            id : 1,
            name:"pooja",
            isActive:true,
            designation :"manager",
            
            project : [
                {
                    id:101,
                    name:"angular"
                },
                {
                    id:102,
                    name:"delta"
                }
            ]
    
        },
    
    
        {
            id : 2,
            name:"Shreyas",
            isActive:true,
            designation :"developer",
    
            project : [
                {
                    id:303,
                    name:"hp"
                }
            ]
    
        },
    
        {
            id : 3,
            name:"Shubham",
            isActive:true,
            designation :"QA",
            
            project : [
                {
                    id:201,
                    name:"TSG"
                },
                {
                    id:202,
                    name:"DBA"
                }
            ]
    
        },
    
    ];
    
    
    }
    
    

    class Disp extends EmpArrr{
        display(){
            console.log("***************************************************");
        this.emparr.forEach(_element => {
                    console.log();
                    console.log("Data for employee : "+_element.id);
                    console.log ("Name : "+ _element.name);
                    console.log("Designation : "+_element.designation);
                    console.log("Active Status : "+_element.isActive);
                    console.log("----------------------Projects----------------------")
                    _element.project.forEach(pro => {
                        console.log("Project ID : "+pro.id);
                        console.log("Project Name : "+pro.name);
                    });
            
                    console.log("***************************************************");
                });
        
        }
        }
        
        
        