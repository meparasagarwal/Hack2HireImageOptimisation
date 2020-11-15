import React from "react";
import {useHistory} from "react-router-dom";
import {useEffect} from "react";

function Logout(){
    let history = useHistory();
	useEffect(()=>{
		fetch("/home")
		.then((response)=>{
			if (response.status === 201){
				history.push("/login")
			}else{
                console.log(respose);
            }
		})
    });
}

export default Logout;