import altImage from "./resources/altImage.png"
import altHeader from "./resources/altHeader.jpg"

export default function TentativeIdCard(props) {
    console.log(props.entity.uploadedPhoto);
    return (
        <>
                <img id="tentative-header" src={`${props.entity.uploadedHeader===undefined?altHeader:props.entity.uploadedHeader}`}/>
                <div id="tentative-details-container">
                    <img id="tentative-uploaded-photo" src={`${props.entity.uploadedPhoto===undefined?altImage:props.entity.uploadedPhoto}`}/>
                    <div id="tentative-details">
                        <h3>{props.entity.name===""?<i>"Name here"</i>:props.entity.name}</h3>
                        Roll NO:&emsp;{props.entity.rollNo}<br></br>
                        Class:&emsp;{props.entity.class}<br></br>
                        Father:&nbsp;{(props.entity.fathersName)}<br></br>
                    </div>
                </div>
        </>
    )
}