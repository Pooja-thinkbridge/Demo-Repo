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