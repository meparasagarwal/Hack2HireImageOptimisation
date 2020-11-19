import React, { Component } from "react";
import { render } from "react-dom";
import { Stage, Layer, Image, Transformer } from "react-konva";

class Resize extends Component {
  state = {
    image: null
  };
  componentDidMount(){
  const url=this.props.location.state.data;
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
    console.log(image);
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
  };
  render() {
    return (
      <Fragment>
      <nav className= "navbar bg-dark">
        <h1 className="text-primary" style={{fontSize:"40px"}} >
		<img src="https://snpi.dell.com/snp/images/products/large/en-in~Dell_Logo_V2/Dell_Logo_V2.jpg" 
        style={{width:"40px",height:"30px"}} />  Dell Image Store</h1>
        <ul>
		<li >
		<Link onClick={e=>onClick(e)} style={{fontSize:"25px"}}>Logout</Link>
        </li>
        </ul>
        </nav>
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Image className="reszieImage"
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