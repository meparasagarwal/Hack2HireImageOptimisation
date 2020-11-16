import React, { useEffect } from "react";
import {useHistory} from "react-router-dom";

function Images(){
    let history=useHistory();
    let images=[];
    useEffect(()=>{
        fetch("/images")
        .then((response)=>{
            if(response.data){
                images=response.data.image
                console.log(response.data);
            }else if(response.status===400){
             history.push("/login");   
            }
        })
    });
    function renderImages(){
        if(images.length()>0){
            images.map(image=>{
                return <image src={image} />
            })
        }
        else{
            return <div></div>
        }
    };
    return(
        <div class="gallery">
        {renderImages}
		</div>
    );
}

export default Images;