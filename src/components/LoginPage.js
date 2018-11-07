import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';
import { Fade } from 'react-slideshow-image';

// slider props
const slideImages = [
  'images/slide1.jpg',
  'images/slide2.jpg',
  'images/slide5.jpg',
  'images/slide3.jpg',
  'images/slide4.jpg'
];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: false,
  arrows: false
}

const Slideshow = () => {
  return (
    <Fade {...properties}>

      <div className="each-fade">
        <div className="image-container">
          <img src={slideImages[1]} />
        </div>
        
      </div>
      <div className="each-fade">
        <div className="image-container">
          <img src={slideImages[2]} />
        </div>
      
      </div>
      <div className="each-fade">
        <div className="image-container">
          <img src={slideImages[3]} />
        </div>
      
      </div>
      <div className="each-fade">
        <div className="image-container">
          <img src={slideImages[4]} />
        </div>
      
      </div>
    </Fade>
  )
}
export const LoginPage = ({ startLogin }) => (
  <div>
    <div className="back">
    <Slideshow className="box-layout__slider" />
    </div>
    <div className="box-layout front">    
      <div className="box-layout__box">
        <h1 className="box-layout__title">Wish - IM</h1>
        <p>Moment Sharing and Wish keeping for everyone</p>
        <button className="button" onClick={startLogin}>Login with Google</button>
      </div>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
