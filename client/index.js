import React from 'react';
import ReactDOM from 'react-dom';
import AFRAME from 'aframe';
import extras from 'aframe-extras';

extras.physics.registerAll();
extras.controls.registerAll();
require('aframe-text-component')

require('./aframeComponents/spawner');
require('./aframeComponents/click-space-listener');
require('./aframeComponents/click-space-cursor');
require('./aframeComponents/explode');
require('./aframeComponents/data-emitter');
require('./aframeComponents/socket-controls');
require('./aframeComponents/forward-movement-controls');
require('./aframeComponents/rotation-controls');
require('./aframeComponents/death-listener');
require('./aframeComponents/hit-listener');
require('./aframeComponents/hover-highlight');

import WelcomePage from './reactComponents/WelcomePage'

const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;

ReactDOM.render(
  <WelcomePage isTouch={isTouch}/>
, document.getElementById('app'));
