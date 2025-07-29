import { createContext } from "react";
export let departmentContext = createContext({
    "termIdicator" : 1,
    "content" :{
        "name": "الفرقة الأولى",
            "terms": {
                "1": ["MTH121", "PHU121", "GS121", "HUM121", "ES121", "CE121"],
                "2": ["MTH122", "PHU122", "HUM122", "GS122", "CE122", "CE123"]
            }
    }
    
})