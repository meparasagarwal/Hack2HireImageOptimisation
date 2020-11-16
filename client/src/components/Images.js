import React, { useEffect } from "react";

function Images(){
    let images=[];
    useEffect(()=>{
        fetch("/images")
        .then((response)=>{
            if(response){
                images=response.data.image
                console.log(response.data);
            }
        })
    })
    return(
        <div class="gallery">
        {images.map=(image=>{
            <img src={img} alt="avatar_photo"/>
        })}
			</div>
    );
}

export default Images;