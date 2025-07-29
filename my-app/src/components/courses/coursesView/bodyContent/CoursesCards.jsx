import { useContext } from "react"
import { departmentContext } from "../../contexts/departmentContext"

export default function CoursesCards(){
    const departmentData = useContext(departmentContext).content
    const term =   useContext(departmentContext).term
    
    return(
        <div className="container">
            <div>
                <h1>Name</h1>
                <h2>Details</h2>
            </div>
            {/* {departmentData.terms[term].map((term) => {
                return <p>{term}</p>
            })} */}
            
        </div >
    )
}