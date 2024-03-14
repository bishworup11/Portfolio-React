import React from 'react';
import './otherProject.css';
import github from '../img/github.png';
import external from '../img/external.png';
import viewMore from '../img/viewmore.png';
import viewLess from '../img/viewless.png';

export default function OtherProject() {
    function cl() {
  
             
        let other=document.getElementById("other-project");
        let text=document.getElementById("showMore");
        let img1=document.getElementById("img1");
     
       if (
           other.style.display === "none" ||
           other.style.display === ""
       ) {
           other.style.display = "block";
           text.textContent="Show Less";
           img1.src= viewLess ;
       } else {
           other.style.display = "none";
      
           text.textContent="Show More";
           img1.src=viewMore;
       }
   }
   
  return (

    <div>
<div id="other-project">
        <div>
            <h1>Other Project</h1>
        </div>

        <div className="row">

            <div className="column">
                <div className="box-other">
                   
                </div>

                <div>
                    <h3>Project Name</h3>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. A
                        architecto debitis expedita,
                    </p>
                    <hr />
                    <div>
                        <span>Html</span>
                        <span>CSS</span>
                        <span>JS</span>
                        
                     
                    </div>
                    <div>
                        <img  width="25px" src={github} />
                        <a href="#"><img  width="25px" height="25px" src={external} /> </a>
                    </div>
                </div>
            </div>


            <div className="column">
                
                <div className="box-other">
                   
                </div>

                <div>
                    <h3>Project Name</h3>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. A
                        architecto debitis expedita,
                    </p>
                    <hr />
                    <div>
                        <span>Html</span>
                        <span>CSS</span>
                        <span>JS</span>
                      
                    </div>
                    <div>
                        <img  width="25px" src={github} />
                        <a href="#"><img  width="25px" height="25px" src={external} /> </a>
                    </div>
                </div>
            </div>



            <div className="column" >
                <div className="box-other">
                    
                </div>

                <div>
                    <h3>Project Name</h3>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. A
                        architecto debitis expedita,
                    </p>
                    <hr />
                    <div>
                        <span>Html</span>
                        <span>CSS</span>
                        <span>JS</span>
                        
                    </div>
                    <div>
                        <img  width="25px" src={github} />
                        <a href="#"><img  width="25px" height="25px" src={external} /> </a>
                    </div>
                </div>
            </div>

            <div className="column" >
                <div className="box-other">
                   
                </div>

                <div>
                    <h3>Project Name</h3>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. A
                        architecto debitis expedita,
                    </p>
                    <hr />
                    <div>
                        <span>Html</span>
                        <span>CSS</span>
                        <span>JS</span>
                       
                    </div>
                    <div>
                        <img  width="25px" src={github} />
                        <a href="#"><img  width="25px" height="25px" src={external} /> </a>
                    </div>
                </div>
            </div>

        </div>


    </div>
   
 
    <a href="#other-project" title="about"> <span onClick={cl} className="seeMore">  <label id="showMore" style={{paddingTop: "10px"}}>Show More</label> <img id="img1" height="40px" src={viewMore} alt="hide" /> </span> </a>
    

      
    </div>
    
  )
}
