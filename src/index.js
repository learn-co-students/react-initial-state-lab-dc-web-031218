import React from 'react';
import ReactDOM from 'react-dom';

import ImageSlider from './components/ImageSlider';
import Bomb from './components/Bomb';

ReactDOM.render(
  <ImageSlider
    currentSlideIndex={0}
  />,
  <Bomb initialCount={120} />,
  document.getElementById('global')
);
