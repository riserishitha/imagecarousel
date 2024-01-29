// import React, { Component } from "react";
// import "./Carousel.css";
// import { images } from "../data/CarouselData";
// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// class Carousel extends Component {
//   constructor() {
//     super();
//     this.state = {
//       index: 0,
//     };
//   }
//   increaseindex = () => {
//     let imageIndex = this.state.index;
//     if (imageIndex === images.length - 1) {
//       this.setState({ index: 0 });
//     } else {
//       this.setState({ index: imageIndex + 1 });
//     }
//   };

//   decreaseindex = () => {
//     let imageIndex = this.state.index;
//     if (imageIndex === 0) {
//       this.setState({ index: images.length - 1 });
//     } else {
//       this.setState({ index: imageIndex - 1 });
//     }
//   };

//   render() {
//     let imageIndex = this.state.index;
//     let imagesRoute = images[imageIndex].img;

//     return (
//       <div className="flex">
//         <ArrowBackIosIcon onClick={this.decreaseindex} className="arrows" />
//         <img src={imagesRoute} alt="" />
//         <ArrowForwardIosIcon onClick={this.increaseindex} className="arrows" />
//       </div>
//     );
//   }
// }

// export default Carousel;
import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

class Carousel extends Component {
  constructor() {
    super();
    this.state = {
      index: 0,
    };
  }

  handleIncrease = () => {
    let imageIndex = this.state.index;
    if (imageIndex === images.length - 1) {
      this.setState({ index: 0 });
    } else {
      this.setState({ index: imageIndex + 1 });
    }
  };

  handleDecrease = () => {
    let imageIndex = this.state.index;
    if (imageIndex === 0) {
      this.setState({ index: images.length - 1 });
    } else {
      this.setState({ index: imageIndex - 1 });
    }
  };

  render() {
    let imageIndex = this.state.index;
    let currentImage = images[imageIndex];

    return (
      <div className="flex">
        <div className="image-info">
          <h2>{currentImage.title}</h2>
          <p>{currentImage.subtitle}</p>
        </div>
        <ArrowBackIosIcon onClick={this.handleDecrease} className="arrows" />
        <img src={currentImage.img} alt="" />
        <ArrowForwardIosIcon onClick={this.handleIncrease} className="arrows" />
      </div>
    );
  }
}

export default Carousel;

