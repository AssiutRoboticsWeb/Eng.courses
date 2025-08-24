import './style.css';
import { Link } from "react-router";

export default function DepartmentSelection(){
    var departments =[ 
        {
            id: 1,
            name: "electrical"

        },
        {
            id: 2,
            name: "Mechanical"
        },
        {
            id: 3,
            name: "Civil"
        },
        {
            id: 4,
            name: "Archtict"
        }
    ] // fetch it 
    var mapped = departments.map((department) => {
                 return(<Link  to ={`/courses/department/:${department.id}`}  key={department.id}><div>{department.name}</div> </Link>
        )
                })
    console.log(mapped)
    return(
        <div className="container">
            {mapped}
        </div>
    )
}