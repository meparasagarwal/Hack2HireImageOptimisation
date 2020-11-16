import React, { useEffect } from "react";

function Images(){
    let images=[];
    useEffect(()=>{
        fetch("/images")
        .then((response)=>{
            if(response){
                //images=response.data.image
                console.log(response.data);
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