import React from 'react'
import { Link } from 'react-router-dom'
import down from '../img/down-arrow.png';

export default function Intro() {
  return (
    <div class="intro">
    <div class="intro-name">Hi I'm Bishworup Mollik</div>
    <div>I design and build things </div>
    <div class="intro-down-arrow"><Link to='/about'> <img src={down} /></Link></div>

</div>
  )
}
