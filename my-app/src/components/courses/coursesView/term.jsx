export default function Term({stateIndicator, stateEditor }){
    var content = []
    for(let i = 0; i < 2; i++)
        {
            content.push(<div id= {i +1} onClick={(event)=> {
            stateEditor({...stateIndicator,term:  event.target.id } )
            }}>Term {i +1 }</div>)
        }   
    return(
        <div className="container">
            {
                content
            }
        </div>
    )
}