import React, { Fragment,useState } from "react";
import {useEffect} from "react";
import {useHistory} from "react-router-dom";
import axios from "axios";

function Home() {
	const [file,setFile]=useState('');
	const [fileName,setFileName]=useState('');
	const [uploadedFile, setUploadedFile] = useState({});
	const [uploadPercentage, setUploadPercentage] = useState(0);
	
	const onChange=e=>{
		setFile(e.target.files[0]);
		setFileName(e.target.files[0].name);
	}
	const onSubmit = async e => {
		e.preventDefault();
		const formData = new FormData();
		formData.append('file', file);
	
		try {
		  const res = await axios.post('/upload', formData, {
			headers: {
			  'Content-Type': 'multipart/form-data'
			},
			onUploadProgress: progressEvent => {
			  setUploadPercentage(
				parseInt(
				  Math.round((progressEvent.loaded * 100) / progressEvent.total)
				)
			  );
			  setTimeout(() => setUploadPercentage(0), 10000);
			}
		  });
	
		  const { fileName, filePath } = res.data;
	
		  setUploadedFile({ fileName, filePath });
	
		  console.log('File Uploaded');
		} catch (err) {
		  if (err.response.status === 500) {
			  console.log('There was a problem with the server');
		  } else {
			console.log(err.response.data.msg);
		  }
		}
	  };
	let history = useHistory();
	useEffect(()=>{
		fetch("/home")
		.then((response)=>{
			if (response.status === 400){
				history.push("/login")
			}
		})
	});
	return (
		<Fragment>
		<center>
			<div class="upload">
				<header class="page-header">
					<h4></h4>
					<h1>Upload Image</h1>
				</header>

				<form onSubmit={e=>onSubmit(e)} autoComplete="off">
					<div class="row">
						<div class="col-sm-7 col-md-6 col-lg-5">
							<div class="form-group">
								<label for="file" class="sr-only">
									File
								</label>
								<div class="input-group">
									<label style={{fontSize: "large"}}>{fileName}</label><br/>
									<span class="input-group-btn">
										<div class="btn btn-default  custom-file-uploader">
											<p></p>
											<input style = {{font: "inherit"}}
												type="file"
												name="file"
												value={file}
												onChange={e=>onChange(e)}
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
			{uploadedFile ? (
				<div className='row mt-5'>
				  <div className='col-md-6 m-auto'>
					<h3 className='text-center'>{uploadedFile.fileName}</h3>
					<img style={{ width: '100%' }} src={uploadedFile.filePath} alt='' />
				  </div>
				</div>
			  ) : null}
		</center>
			<br /> <br /> <br /> <br /> <br />
			<center>
				<h1>IMAGE GALLERY</h1>
			</center>
			<div class="gallery">
				<img src="http://c1.staticflickr.com/9/8450/8026519634_f33f3724ea_b.jpg" />
				<img src="http://c2.staticflickr.com/8/7218/7209301894_c99d3a33c2_h.jpg" />
				<img src="http://c2.staticflickr.com/8/7231/6947093326_df216540ff_b.jpg" />

				<img src="http://c1.staticflickr.com/9/8788/17367410309_78abb9e5b6_b.jpg" />
				<img src="http://c2.staticflickr.com/6/5814/20700286354_762c19bd3b_b.jpg" />
				<img src="http://c2.staticflickr.com/6/5647/21137202535_404bf25729_b.jpg" />

				<img src="http://c2.staticflickr.com/6/5588/14991687545_5c8e1a2e86_b.jpg" />
				<img src="http://c2.staticflickr.com/4/3888/14878097108_5997041006_b.jpg" />
				<img src="http://c2.staticflickr.com/8/7579/15482110477_0b0e9e5421_b.jpg" />
			</div>
		</Fragment>
	);
}

export default Home;
