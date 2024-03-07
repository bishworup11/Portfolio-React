import React from 'react'
import down from '../img/down-arrow.png';

export default function Intro() {
  return (
    <div class="intro">
    <div class="intro-name">Hi I'm Bishworup Mollik</div>
    <div>I design and build things </div>
    <div class="intro-down-arrow"> <a href="#about" title="about"> <img src={down} /></a></div>

</div>
  )
}
