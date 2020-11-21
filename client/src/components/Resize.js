import React, { Component,Fragment,useState } from "react";
import {Link, useHistory} from "react-router-dom";
import { render } from "react-dom";
import { Stage, Layer, Image, Transformer } from "react-konva";
import axios from "axios";
import Spinner from "./Spinner";
import { findRenderedDOMComponentWithClass } from "react-dom/test-utils";
let data={x:1,y:1};
let url={};

class Resize extends Component {
  state = {
    image: null,
    isLoading:false,
    result:" "
  };
  componentDidMount(){
   url=this.props.location.state.data;
    const image = new window.Image();
    image.onload = () => {
      this.setState(
        {
          image
        },
        () => {
          this.transformer.attachTo(this.image);
        }
	  );
    }
    image.src=url;
  };
  handleTransform = () => {
    const props = {
      x: this.image.x(),
      y: this.image.y(),
      rotatio: this.image.rotation(),
      width: this.image.width(),
      height: this.image.height(),
      scaleX: this.image.scaleX(),
      scaleY: this.image.scaleY()
    };
    console.log(props);
    data.x=props.scaleX;
    data.y=props.scaleY;
  };
  onSubmit=(e)=>{
    this.setState({
      isLoading:true
    })
    e.preventDefault();
    data.filepath=url;
    console.log(data);
    axios.post("./Saveresize",data)
    .then((response)=>{
      this.setState({
        isLoading:false,
        result:"Image is resized"
      })
    })
  }

  render() {
    return (
      <Fragment>
      <nav className= "navbar bg-dark">
        <h1 className="text-primary" style={{fontSize:"40px"}} >
		    <img src="https://snpi.dell.com/snp/images/products/large/en-in~Dell_Logo_V2/Dell_Logo_V2.jpg"  
        style={{width:"40px",height:"30px"}} />  Dell Image Store</h1>
        </nav>
        <center>
        <div className="upload">
        <h1>Click on the submit button once resizing is done</h1>
        <div><p><b>{this.state.isLoading ? null :this.state.result}</b></p></div>
        <div>{this.state.isLoading ? <Spinner /> :null} </div>
        <form onSubmit={this.onSubmit}>
        <input className = "btn btn-primary" type = "submit" value = "Submit"/>
        </form>
        </div>
        </center>
      <Stage width={window.innerWidth} height={window.innerHeight} className="container">
        <Layer>
          <Image
            image={this.state.image}
            ref={(node) => {
              this.image = node;
            }}
            draggable
            onTransform={this.handleTransform}
            onDragMove={this.handleTransform}
          />
          <Transformer
            ref={(node) => {
              this.transformer = node;
            }}
          />
        </Layer>
      </Stage>
      </Fragment>
    );
  }
}
export default Resize;