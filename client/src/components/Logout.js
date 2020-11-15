import React from "react";
import {useHistory} from "react-router-dom";
import {useEffect} from "react";

function Logout() {
	let history = useHistory();
	useEffect(() => {
		fetch("/logout")
			.then((response) => {
				if (response.status === 201) {
					history.push("/login")
				} else {
					console.log(response);
				}
			})
	});
}

export default Logout;