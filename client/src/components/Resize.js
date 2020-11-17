import React,{Fragment,useEffect,useState} from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";
import {Link} from "react-router-dom";


function Resize(props){
    let history=useHistory();
    let [images,setImages]=useState([]);
    useEffect(()=>{
        var fileName=props.location.fileName;
        console.log(props);
		fetch("/Resize1/"+fileName+"")
		.then((response)=>{
			if (response.status === 400){
				history.push("/Login")
			}else if(response.status === 201){
					console.log(response.data);
            }
			})},[]);
	const onClick=async e=>{
		e.preventDefault();
		await axios.get("/Login")
		.then(response=>{history.push("/Login");
		})};

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
    return(
        <Fragment>
        <nav className= "navbar bg-dark">
        <h1 className="text-primary" style={{fontSize:"40px"}} >
		<img src="https://snpi.dell.com/snp/images/products/large/en-in~Dell_Logo_V2/Dell_Logo_V2.jpg" alt="Dell_logo"
        style={{width:"40px",height:"30px"}} />Dell Image Store</h1>
        <ul>
		<li >
		<Link onClick={e=>onClick(e)} style={{fontSize:"25px"}}>Logout</Link>
        </li>
        </ul>
        </nav>
        <center>
        <div className="upload">
			<h1 style={{fontSize:"35px"}}>IMAGE GALLERY</h1>
			<p>Click on the image to download</p>
			<div class="gallery">
			{renderImages()}
		   </div>
           </div>
			</center>
        </Fragment>
    );
}

export default Resize;