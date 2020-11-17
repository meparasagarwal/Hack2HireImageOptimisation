import React, {Fragment,useState} from "react";
import {Link} from "react-router-dom";
import {useEffect} from "react";
import {useHistory} from "react-router-dom";
import axios from "axios";

function Message() {
	let [images,setImages]=useState([]);
	let [uploadedImage,setUploadedImage]=useState([]);
	//const [imageURL,setImageURL]=useState();
	let history = useHistory();
	useEffect(()=>{
		fetch("/message")
		.then((response)=>{
			if (response.status === 400){
				history.push("/Login")
			}else if(response.status === 201){
				axios.get("/Images")
				.then((response)=>{
					setImages(response.data.image);
				})}
			})},[]);
	const onClick=async e=>{
		e.preventDefault();
		await axios.get("/Login")
		.then(response=>{history.push("/Login");
		})};
	
  const [file,setFile]=useState();
  const [fileName,setFileName]=useState();
	function onChange1(event){
		setFile(event.target.files[0]);
	}
	function onChange2(event){
		setFileName(event.target.value);
	}
	const onSubmit=async e =>{
		e.preventDefault();
		let data=new FormData();
		data.append('file',file);
		data.append('file',fileName);
		const config = {     
			headers: { 'content-type': 'multipart/form-data' }
		}
		await axios.post("/Upload",data,config)
		.then(response=>{
			setUploadedImage(response.data);
		}).catch(err=>{
				console.log(err);
			})
		}

        function renderUploadedImages(){
			let temp;
			if(uploadedImage.length>0){
				temp=<div class="gallery3"><img src={uploadedImage} /></div>
			}else{
				temp=<div />
			}
			return temp;
		}
		function renderImages(){
			let temp=[];
			let i=0;
			if(images.length > 0){
				images.map(image=>{
					temp[i]=<div class="gallery2"><a href={image}><img src={image} /></a></div>
					i=i+1
				})
			}
			else{
				temp[0]=<div />
			}
			return temp;
		};

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
			<div className="upload">
				<header className="page-header">
					<h4> </h4>
					<h1>Upload Image</h1>
				</header>

				<form  autoComplete="off" onSubmit={e=>onSubmit(e)}>
					<div className="row">
						<div className="col-sm-7 col-md-6 col-lg-5">
							<div className="form-group">
								<div className="input-group">
									<label style={{fontSize: "large"}}></label><br/>
									<span className="input-group-btn">
										<div className="btn btn-default  custom-file-uploader">
											<p></p>
											<input type="text" name="fileName" onChange={e=>onChange2(e)} />
											<br />
											<input style = {{font: "inherit"}}
												type="file"
												onChange={e=>onChange1(e)}
												name="file"
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
			<br /> <br /> <br /> 
			<center>
			<h1 style={{fontSize:"35px"}}>Preview of Uploaded Image</h1>
			<div class="gallery">
			<center>
			{renderUploadedImages()}
			</center>
			</div>
			</center>
			<br /> <br />
			<center>
			<h1 style={{fontSize:"35px"}}>IMAGE GALLERY</h1>
			<p>Click on the image to download</p>
			<div class="gallery">
			{renderImages()}
			</div>
			</center>
		</Fragment>
	);
}

export default Message;
