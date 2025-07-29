import { useContext } from "react"
import { departmentContext } from "../../contexts/departmentContext"
export default function DepartmentInfo(){
    let departmentData = useContext(departmentContext).content 
    console.log(departmentData);
    
    return(
        <>
        <div className="container">
            <p>name : {departmentData.name}</p>
        </div>
        </>
    )
}