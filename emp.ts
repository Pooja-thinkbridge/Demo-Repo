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
    
    