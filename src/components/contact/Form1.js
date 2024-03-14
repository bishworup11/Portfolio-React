import React from 'react'
import './contact.css';

export default function Form1() {

    function ContactForm() {
        
        let form1 = document.getElementById("contact-form");
        let div1=document.getElementById("div1")
        console.log(form1);
        let writeMessage = document.getElementById("contact-write-message");
      
        if (form1.style.display === "none" || form1.style.display === "") {
          form1.style.display = "flex";
          div1.style.marginTop="20px";
          div1.style.marginBottom="10px";
          writeMessage.textContent = "Submit";
        } else {
          form1.style.display = "none";
          div1.style.marginTop="150px";
          div1.style.marginBottom="200px";
          writeMessage.textContent = "Write message";
        }
      }


  return (
    <div id="div1" Style="margin-top: 150px; margin-bottom: 200px ;">
    <form id="contact-form">
        <label> Full Name</label>
        <input type="text" id="fname" name="fname" placeholder="Your Full name"/>

        <label>Email</label>
        <input type="email" placeholder="Your email." id="contact-send-email" required />

        <label>Messege</label>
        <textarea placeholder="Your message." id="contact-send-messege" required></textarea>
     

      </form>

      <span onClick={ContactForm} className="write-messege-button-style"><a href="#contact"
          id="contact-write-message">Write Message</a></span>
</div>
  )
}
