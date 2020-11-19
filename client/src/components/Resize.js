import React,{Component, Fragment,useEffect,useState} from "react";
import { render } from "react-dom";
import { Stage, Layer, Image, Transformer } from "react-konva";
import axios from "axios";


class Resize extends Component{
    state = {
		image: null
	  };
	  componentDidMount() {
		  let url=this.props.location.state.data;
		  console.log(url);		
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
		};
		image.src =url;
	  }
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
	  };
	   render() {
		return (
			<Fragment>
		  <Stage width={window.innerWidth} height={window.innerHeight} className="container">
			<Layer>
			  <Image
				image={this.state.image}
				ref={node => {
				  this.image = node;
				}}
				draggable
				onTransform={this.handleTransform}
				onDragMove={this.handleTransform}
			  />
			  <Transformer
				ref={node => {
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