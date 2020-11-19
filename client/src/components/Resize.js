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
    image.src=url;
    }
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
      <Stage width={window.innerWidth} height={window.innerHeight}>
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
    );
  }
}
export default Resize;