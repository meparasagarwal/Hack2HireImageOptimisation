import React, { Fragment, useState } from 'react';
import {useHistory} from "react-router-dom";
import {useEffect} from "react";
import Message from './Message';
import Progress from './Progress';
import axios from 'axios';

const Try = () => {
    let history = useHistory();
	useEffect(()=>{
		fetch("/home")
		.then((response)=>{
			if (response.status === 400){
				history.push("/login")
			}
		})
    });
    /*const res1=await axios.get('/home')
          .then(response) => {
              if(response.status === 400){
                  window.location="/login";
              }
          }

    }*/
  const [file, setFile] = useState('');
  const [filename, setFilename] = useState('Choose File');
  const [uploadedFile, setUploadedFile] = useState({});
  const [message, setMessage] = useState('');
  const [uploadPercentage, setUploadPercentage] = useState(0);

  const onChange = e => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const onSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await axios.post('/home', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        onUploadProgress: progressEvent => {
          setUploadPercentage(
            parseInt(
              Math.round((progressEvent.loaded * 100) / progressEvent.total)
            )
          );

          // Clear percentage
          setTimeout(() => setUploadPercentage(0), 10000);
        }
      });

      const { fileName, filePath } = res.data;

      setUploadedFile({ fileName, filePath });

      setMessage('File Uploaded');
    } catch (err) {
      if (err.response.status === 500) {
        setMessage('There was a problem with the server');
      } else {
        setMessage(err.response.data.msg);
      }
    }
  };

  return (
    <Fragment>
		<center>
			<div class="upload">
				<header class="page-header">
					<h4></h4>
					<h1>Upload Image</h1>
				</header>

				{message ? <Message msg={message} /> : null}
      <form onSubmit={onSubmit}>
        <div className='custom-file mb-4'>
          <input
            type='file'
            className='custom-file-input'
            id='customFile'
            onChange={onChange}
          />
          <br></br>
          <label className='custom-file-label' htmlFor='customFile'>
            {filename}
          </label>
        </div>

        <Progress percentage={uploadPercentage} />

        <input
          type='submit'
          value='Upload'
          className='btn btn-primary btn-block mt-4'
        />
      </form>
      {uploadedFile ? (
        <div className='row mt-5'>
          <div className='col-md-6 m-auto'>
            <h3 className='text-center'>{uploadedFile.fileName}</h3>
            <img style={{ width: '100%' }} src={uploadedFile.filePath} alt='' />
          </div>
        </div>
      ) : null}
            </div>
            </center>
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
};

export default Try;