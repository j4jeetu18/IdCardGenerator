import React, { useState } from "react";
import TentativeIdCard from "./TentativeIdCard";



function InputContainer() {

    const [entity,setEntity]=React.useState({
        rollNo:0,
        name:"",
        class:"",
        fathersName:"",
        uploadedPhoto:undefined,
        uploadedHeader:undefined
    });


    function handleChange(e) {
        setEntity((prevEntity) =>{
            if (e.target.name === "uploadedPhoto" ||e.target.name === "uploadedHeader")
            return{...prevEntity,
                    [e.target.name]:URL.createObjectURL(e.target.files[0])

            }
            return {
                ...prevEntity,
                [e.target.name]: e.target.value
                    }
        })
    }


    return (
        <>
            <div id="input-Container">
                <div id="uploadImageDiv">
                    <label htmlFor="uploadPhoto">Upload Photo:&emsp;&emsp;&emsp;</label>
                    <input  type="file" accept="image/*" 
                            id="uploadImageInput" 
                            name="uploadedPhoto" 
                            onChange={handleChange}
                            />
                </div>
                <br></br>
                <div id="uploadIdCardHeaderDiv">
                    <label htmlFor="uploadIdCardHeader">Upload Header:&emsp;&emsp;&emsp;</label>
                    <input  type="file" accept="image/*" 
                            id="uploadHeader" 
                            name="uploadedHeader"
                            onChange={handleChange} />
                </div>
                <form>
                    <label htmlFor="name">Roll NO:&emsp;&emsp;&emsp;</label>
                    <input
                        className="input-elements"
                        value={entity.rollNo}
                        type="text"
                        placeholder="e.g 48"
                        name="rollNo" 
                        onChange={handleChange}/>
                    
                    <br></br>
                    <label htmlFor="name">Name:&emsp;&emsp;&emsp;&emsp;</label>
                    <input
                        className="input-elements"
                        type="text"
                        value={entity.name}
                        placeholder="Full Name"
                        name="name" 
                        onChange={handleChange}/>
                    
                    <br></br>
                    <label htmlFor="name">Class:&emsp;&emsp;&emsp;&nbsp;&emsp;</label>
                    <input
                        className="input-elements"
                        type="text"
                        value={entity.class}
                        placeholder="e.g VI"
                        name="class" 
                        onChange={handleChange}/>
                    
                    <br></br>
                    <label htmlFor="name">Father's Name:&nbsp;&nbsp;</label>
                    <input
                        className="input-elements"
                        type="text"
                        value={entity.fathersName}
                        placeholder="Father's Name"
                        name="fathersName" 
                        onChange={handleChange}/>
                    <br></br>
                    <button type="submit" id="generateIdCardButton">Generate ID Card</button>
                </form>
            </div>

            <TentativeIdCard entity={entity}/>
        </>
    )
}
export default InputContainer;

