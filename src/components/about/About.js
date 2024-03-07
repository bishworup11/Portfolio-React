import React from 'react'
import './about.css';
import p from '../img/p.jpg';

export default function About() {
  return (
    <div id="about">
        <div>
            <h1>About me</h1>
        </div>
        <div className="flex-container-about">
            <article>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
                    excepturi nesciunt eligendi deleniti vero voluptatibus consequatur
                    ad quaerat officiis eos facilis, libero, incidunt nobis fuga
                    repudiandae sunt! Dolorem, iure odit!
                </p>
                <br />
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
                    excepturi nesciunt eligendi deleniti vero voluptatibus consequatur
                    ad quaerat officiis eos facilis, libero, incidunt nobis fuga
                    repudiandae sunt! Dolorem, iure odit!
                </p>
            </article>
            <figure >
                <img height="100%" width="100%" src={p} />
            </figure>
        </div>
    </div>
  )
}
