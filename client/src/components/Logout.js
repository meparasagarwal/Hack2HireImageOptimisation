import React from "react";
import {useHistory} from "react-router-dom";
import {useEffect} from "react";

function Logout() {
	let history = useHistory();
	useEffect(() => {
		fetch("/logout")
<<<<<<< HEAD
		.then((response)=>{
			if (response.status === 201){
				history.push("/login")
			}else{
                console.log(response);
            }
		})
    });
=======
			.then((response) => {
				if (response.status === 201) {
					history.push("/login")
				} else {
					console.log(response);
				}
			})
	});
>>>>>>> 690de645e541beedc8e161ea4553401b5850157b
}

export default Logout;