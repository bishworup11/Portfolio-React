import React from 'react'
import './contact.css';
import github from '../img/github.png';
import linkedin from '../img/linkedin.png';
import Form1 from './Form1';

export default function Contact() {

  return (

    <div id="contact" className="contact-style">
        <div>
            <h1>Contact</h1>
        </div>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, error,
            corrupti sapiente voluptatem provident doloribus rerum voluptatibus, ad
            quia quidem unde et id tempora aspernatur! Totam commodi obcaecati atque
            suscipit.
        </p>
          <Form1></Form1>
          
        <div  style={{margin:"10px", marginTop:"100px"}}>
            <a href="#"><img src={github}/> </a>
            <a href="#"><img src={linkedin} /> </a>
        </div>
        <p>Bishworup Mollik-2024</p>

    </div>

   
  )
}
