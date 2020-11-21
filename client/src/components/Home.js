import React, { Fragment,useState} from "react";
import {Link} from "react-router-dom";
import {useEffect} from "react";
import {useHistory} from "react-router-dom";
import axios from "axios";
import {useCallback} from 'react';
import {useDropzone} from 'react-dropzone';
import Spinner from "./Spinner";
let files;
let fileName='';
let result='';
 
function Home() {
  let [images,setImages]=useState([]);
	let [uploadedImage,setUploadedImage]=useState([]);
	let [button,setButton]=useState((""));
	let [isLoading,setLoading]=useState(false);
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


  const onDrop =useCallback((acceptedFile) => {
    acceptedFile.map(file=>{
		files=file;
	})
  },[]);

 const {getRootProps, getInputProps} = useDropzone({onDrop});
	const onSubmit=async e =>{
		setLoading(true)
		e.preventDefault();
		let data=new FormData();
		data.append('file',files);
		const config = {     
			headers: { 'content-type': 'multipart/form-data' }
		}
		if(button=="Submit"){
		await axios.post("/Upload",data,config)
		.then(response=>{
			setLoading(false);
			result=fileName+" is uploaded";
			axios.get("/Images")
			.then(response=>{
				setImages(response.data.image);
			})
		}).catch(err=>{
				console.log(err);
			})
		}
		else{
			await axios.post("/Resize",data,config)
			.then(response=>{
				console.log(response.data);
				let data=response.data;
				history.push("/Resize",{data});
			})
	}
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
		}
		return(
			<Fragment>
					<nav className= "navbar bg-dark">
					   <h1 className="text-primary" style={{fontSize:"40px"}} >
						 <img src="https://snpi.dell.com/snp/images/products/large/en-in~Dell_Logo_V2/Dell_Logo_V2.jpg" 
							style={{width:"50px",height:"40px"}} />  Dell Image Store</h1>
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
						  <div {...getRootProps()} className="dragndrop">
							   <input {...getInputProps({onChange:event=>{fileName=event.target.files[0].name;result=fileName+" is selected"}})} />
								  <p>Click here to upload a file or Drag n drop a file</p>
									  </div>
									  <br />
									  <div>{isLoading ? <Spinner /> : null}</div>
						  <div><p><b>{result}</b></p></div>
						  <br />
					  <input className = "btn btn-primary"
									  type = "submit"
									  value = "Submit"
									  onClick={e=>{setButton("Submit")}} />
					  <input className = "btn btn-primary"
									  type = "submit"
									  value = "Resize"
									  onClick={e=>{setButton("Resize")}} />
						  </div>
					  </div>
				  </div>
			  </form>
		  </div>
	  </center>
		  <br /> <br /> <br /> 
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