import React, { Fragment,useState} from "react";
import {Link} from "react-router-dom";
import {useEffect} from "react";
import {useHistory} from "react-router-dom";
import axios from "axios";
import {useCallback} from 'react';
import {useDropzone} from 'react-dropzone';
 
function Home() {
  let [images,setImages]=useState([]);
	let [uploadedImage,setUploadedImage]=useState([]);
	let history = useHistory();
	useEffect(()=>{
		fetch("/home")
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


  let file;
  const onDrop =useCallback((acceptedFile) => {
    console.log(acceptedFile);
    acceptedFile.map(file1=>{
		file=file1;
	})
  }, [])
    const {getRootProps, getInputProps} = useDropzone({onDrop})
	const onSubmit=async e =>{
		e.preventDefault();
		let data=new FormData();
		data.append('file',file);
		data.append('fileName',"Hello");
		const config = {     
			headers: { 'content-type': 'multipart/form-data' }
		}
		await axios.post("/Upload",data,config)
		.then(response=>{
			console.log(response);
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
        <h1 className="text-primary" style={{fontSize:"40px"}}>Dell Image Store
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
							<div {...getRootProps()}>
      <input {...getInputProps()} />
      <p>Drag 'n' drop some files here, or click to select files</p>
    </div>
	
                        <input className = "btn btn-primary"
										type = "submit"
										value = "Submit" />
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

  )
}



export default Home;