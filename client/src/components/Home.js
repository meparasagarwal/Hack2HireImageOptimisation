import React, { Fragment} from "react";
import {Link} from "react-router-dom";
import {useEffect} from "react";
import {useHistory} from "react-router-dom";
import axios from "axios";
import Images from "./Images";

function Home() {
	let history = useHistory();
	useEffect(()=>{
		fetch("/home")
		.then((response)=>{
			if (response.status === 400){
				history.push("/Login")
			}/*else if(response.status === 201){
				axios.get("/images")
				.then((response)=>{
					//images=response.data.images;
					console.log(response);
				}*/
			})});
	const onClick=async e=>{
		e.preventDefault();
		await axios.get("/Login")
		.then(response=>{history.push("/Login");
		})
	}
	return (
		<Fragment>
		<nav className= "navbar bg-dark">
        <h1 className="text-primary" style={{fontSize:"40px"}}> Image Compressor
        </h1>
        <ul>
		<li >
		<Link onClick={e=>onClick(e)} style={{fontSize:"25px"}}>Logout</Link>
        </li>
        </ul>
        </nav>
		<center>
			<div class="upload">
				<header class="page-header">
					<h4> </h4>
					<h1>Upload Image</h1>
				</header>

				<form  autoComplete="off">
					<div class="row">
						<div class="col-sm-7 col-md-6 col-lg-5">
							<div class="form-group">
								<label for="file" class="sr-only">
									File
								</label>
								<div class="input-group">
									<label style={{fontSize: "large"}}></label><br/>
									<span class="input-group-btn">
										<div class="btn btn-default  custom-file-uploader">
											<p></p>
											<input style = {{font: "inherit"}}
												type="file"
											/>
										</div><br/>
										<input className = "btn btn-primary"
										type = "submit"
										value = "Submit" />
									</span>
								</div>
							</div>
						</div>
					</div>
				</form>
			</div>
		</center>
			<br /> <br /> <br /> <br /> <br />
			<center>
				<h1>IMAGE GALLERY</h1>
			</center>
			<Images />
		</Fragment>
	);
}

export default Home;
