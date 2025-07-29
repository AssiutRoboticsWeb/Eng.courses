import Years from "./yearsBar";
import Body from "./body";
import Term from "./term";
import { useState } from "react";
import { departmentContext } from "../contexts/departmentContext";

export default function CoursesView(){
    const departmentData = {
        "years": {
        "0": {
            "name": "الفرقة الأولى",
            "terms": {
            "1": ["MTH121", "PHU121", "GS121", "HUM121", "ES121", "CE121"],
            "2": ["MTH122", "PHU122", "HUM122", "GS122", "CE122", "CE123"]
            }
        },
        "1": {
            "name": "الفرقة الأولى",
            "terms": {
            "1": ["MTH121", "PHU121", "GS121", "HUM121", "ES121", "CE121"],
            "2": ["MTH122", "PHU122", "HUM122", "GS122", "CE122", "CE123"]
            }
        },
        "2": {
            "name": "الفرقة الثانية",
            "terms": {
            "1": ["MTH221", "HUM221", "CE221", "CE222", "CE223", "SUR221"],
            "2": ["MTH222", "HUM222", "CE224", "CE225", "CE226", "SUR222"]
            }
        },
        "3": {
            "name": "الفرقة الثالثة",
            "terms": {
            "1": ["CE321", "CE322", "CE323", "CE324", "CE325", "GS321"],
            "2": ["CE326", "CE327", "CE328", "CE329", "CE330", "CE331"]
            }
        },
        "4": {
            "name": "الفرقة الرابعة",
            "terms": {
            "1": ["CE421", "CE422", "CE423", "CE424", "CE425", "CE426"],
            "2": ["CE427", "CE428", "CE429", "CE430", "CE431", "CE432"]
            }
        }
        }
    }



    const [state, editState] = useState({"year": 2, "term" : 2});
    
    const bodyData = departmentData.years[state.year];
    console.log(bodyData);
    
    return(
        <>
        <departmentContext.Provider  value={{term : state.term , content: bodyData}}>
            <Years stateIndicator = {state}  stateEditor={editState} />
            <Term  stateIndicator = {state}  stateEditor={editState} />
            <Body data= {bodyData} term = {state.term} /> {/* there will be a state changes from years and send data to body depending on it */}
        </departmentContext.Provider>
            
        </>
    )
}
