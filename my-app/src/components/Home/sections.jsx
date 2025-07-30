import { Link } from "react-router";


export default function Hero(){
    return(
        <>
        <h1>
            مشروع لتجميع شروحات كلية الهندسة في مكان واحد 
        </h1>
        <h3>
            نحاول نجمع أكبر عدد ممكن من الكورسات والشروحات اللي اتسجلت من المعيدين والدكاترة،  
            وننظمها في مكان واحد علشان تسهّل على الطلبة الوصول للمحتوى والمذاكرة.
        </h3>
        <Link  to ={`/courses/`} ><div> تصفج الكورسات المتاحة</div> </Link>
           
        
        </>
        
    )

}

export function Departments(){
    const tracks = [
        {
            name: "Electrical computer Engineering",
            type : "general"
        },
        {
            name: "Electrical communication Engineering",
            type : "general"
        },
        {
            name: "Electrical power Engineering",
            type : "general"
        }
    ]
    return(
        <>
            <h1>
                التراكات المتاحة
            </h1>
            <div>
                {tracks.map((track) =>{
                    return(
                        <div>
                            <h4>{track.name}</h4>
                            <h5>{track.type}</h5>
                        </div>
                    )

                })}
            </div>
        </>

    )

}

export function Advantages(){


    return(
        <>
        
            <h1>المزايا</h1>

        </>

    )
}