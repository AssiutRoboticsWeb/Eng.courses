export default function Years({stateIndicator,stateEditor}){
    var content = []
    for(let i = 0; i < 4; i++)
        {
            content.push(<div id= {i +1} onClick={(event)=> {
                console.log(event);
                console.log(event.target);
                
                stateEditor({...stateIndicator, year : event.target.id})
            }}>Year {i +1 }</div>)
        }   
    return(
        <div className="container">
            {
                content
            }
        </div>
    )
}