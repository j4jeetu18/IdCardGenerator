import React from "react";
import html2canvas from "html2canvas";
import TentativeIdCard from "./TentativeIdCard";


function InputContainer() {

    const [entity, setEntity] = React.useState({
        rollNo: undefined,
        name: "",
        class: "",
        fathersName: "",
        uploadedPhoto: undefined,
        uploadedHeader: undefined
    });


    function handleChange(e) {
        setEntity((prevEntity) => {
            if (e.target.name === "uploadedPhoto" || e.target.name === "uploadedHeader")
                return {
                    ...prevEntity,
                    [e.target.name]: URL.createObjectURL(e.target.files[0])

                }
            return {
                ...prevEntity,
                [e.target.name]: e.target.value
            }
        })
    }
    const convertToImage = () => {
        html2canvas(document.querySelector("#tentative-id-card"), { scale: 2 })
            .then(canvas => {
                var newResultDiv = document.createElement("div");
                newResultDiv.setAttribute("class", "generatedIdCards");
                newResultDiv.appendChild(canvas);
                document.querySelector("#resultSection").appendChild(newResultDiv);
                console.log(document.querySelector("#resultSection"));
            });
    };


    let fieldsFilled = (entity.name === "" || entity.fathersName === "" || entity.class === "" || entity.rollNo === "") ? false : true;
    let toggleBtn = fieldsFilled ? "" : "disabled";

    const setBtnStyle =
    {
        paddingTop: '3%',
        color: '#eef2f2',
        fontWeight: '700',
        paddingBottom: '3%',
        width: '80%',
        borderRadius: '30px',
        fontSize: '1.3em',
        backgroundColor: fieldsFilled === false ? '#cc3e2e' : '#87b788',
        opacity: fieldsFilled === false ? '0.7' : '1.9'

    }



    return (
        <>
        <section className="container">
            <div id="tentative-id-card">
                <TentativeIdCard entity={entity} />
            </div>

            <div id="input-Container">
                <div id="uploadImageDiv">
                    <label htmlFor="uploadPhoto">Upload Photo:&emsp;&emsp;&emsp;</label>
                    <input type="file" accept="image/*"
                        id="uploadImageInput"
                        name="uploadedPhoto"
                        onChange={handleChange}
                    />
                </div>
                <br></br>
                <div id="uploadIdCardHeaderDiv">
                    <label htmlFor="uploadIdCardHeader">Upload Header:&nbsp;&emsp;&emsp;</label>
                    <input type="file" accept="image/*"
                        id="uploadHeader"
                        name="uploadedHeader"
                        onChange={handleChange} />
                </div>
                <br /><br />
                <label htmlFor="name">Roll NO:&emsp;&emsp;&emsp;</label>
                <input
                    className="input-elements"
                    value={entity.rollNo}
                    type="text"
                    placeholder="e.g 48"
                    name="rollNo"
                    onChange={handleChange} />

                <br></br>
                <label htmlFor="name">Name:&emsp;&emsp;&emsp;&emsp;</label>
                <input
                    className="input-elements"
                    type="text"
                    value={entity.name}
                    placeholder="Full Name"
                    name="name"
                    onChange={handleChange} />

                <br></br>
                <label htmlFor="name">Class:&emsp;&emsp;&emsp;&nbsp;&emsp;</label>
                <input
                    className="input-elements"
                    type="text"
                    value={entity.class}
                    placeholder="e.g VI"
                    name="class"
                    onChange={handleChange} />

                <br></br>
                <label htmlFor="name">Father's Name:&nbsp;&nbsp;</label>
                <input
                    className="input-elements"
                    type="text"
                    value={entity.fathersName}
                    placeholder="Father's Name"
                    name="fathersName"
                    onChange={handleChange} />
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <button id="generateIdCardButton" style={setBtnStyle} onClick={convertToImage} disabled={toggleBtn}>Generate ID Card</button>
            </div>
            </section>
        </>
    )
}
export default InputContainer;

