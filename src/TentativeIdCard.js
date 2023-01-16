export default function TentativeIdCard(props){
    console.log(props.entity)
    return(
    <>
        <div id="tentative-id-card">
            <img id="tentative-header" src={`${props.entity.uploadedHeader}`}></img>
            <div id="tentative-details-container">
                <img id="tentative-uploaded-photo" src={`${props.entity.uploadedPhoto}`}></img>
                <div id="tentative details">
                    Name:{props.entity.name}<br></br>
                    Roll NO:{props.entity.rollNo}<br></br>
                    Class:{props.entity.class}<br></br>
                    Father's Name:{props.entity.fathersName}<br></br>
                </div>
            </div>
        </div>
    </>
    )
}