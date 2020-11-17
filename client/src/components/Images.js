import React, { useEffect,useState } from "react";
import {useHistory} from "react-router-dom";

function Images(){
    let history=useHistory();
    let [images,setImages]=useState([]);
    useEffect(()=>{
        fetch("/Images")
        .then((response)=>{
            if(response){
                images=response.data.image
                console.log(response);
            }else if(response.status===400){
             history.push("/login");   
            }
        },[])
    });
    function renderImages(){
        if(images.length>0){
            images.map(image=>{
                return <image src={image} alt="avatar-image" />
            })
        }
        else{
            return <div></div>
        }
    };
    return(
        <div class="gallery">
        {renderImages()}
		</div>
    );
}

export default Images;