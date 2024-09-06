import React from 'react'
import './Faculty.css'
import HOD from '../../assets/images/team1.png'
import Prof from '../../assets/images/team3.png'
import Prof1 from '../../assets/images/team4.jpg'
import Prof2 from '../../assets/images/team2.png'

export default function Faculty() {
  return (
 <>
   <section id="team" class="team section-bg">
        <div class="container">
  
          <div class="section-title">
            <h2>Team</h2>
            <div class="underline"></div>
            <p>Meet Our Qualified Team</p>
          </div>
  
          <div class="row">
  
            <div class="col-lg-6">
              <div class="member d-flex align-items-start" >
                <div class="teampic"><img src={HOD}class="img-fluid" alt=""/></div>
                <div class="member-info">
                  <h4>Somshekhar Aland</h4>
                  <span>Head of the Department</span>
                  
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, ducimus.</p>
                  <div class="social">
                    <a href=""><i class="bi bi-facebook"></i></a>
                    <a href=""><i class="bi bi-instagram"></i></a>
                    <a href=""><i class="bi bi-linkedin"></i></a>
                    <a href=""> <i class="bi bi-whatsapp"></i> </a>
                  </div>
                </div>
              </div>
            </div>
  
            <div class="col-lg-6 mt-4 mt-lg-0">
              <div class="member d-flex align-items-start" >
                <div class="teampic"><img src={Prof}class="img-fluid" alt=""/></div>
                <div class="member-info">
                  <h4>Aarti Patel</h4>
                  <span>Asst.Professor</span>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, ducimus.</p>
                  <div class="social">
                    <a href=""><i class="bi bi-facebook"></i></a>
                    <a href=""><i class="bi bi-instagram"></i></a>
                    <a href=""><i class="bi bi-linkedin"></i></a>
                    <a href=""> <i class="bi bi-whatsapp"></i> </a>
                  </div>
                </div>
              </div>
            </div>
  
            <div class="col-lg-6 mt-4">
              <div class="member d-flex align-items-start" >
                <div class="teampic"><img src={Prof1} class="img-fluid" alt=""/></div>
                <div class="member-info">
                  <h4>Durga Bhosale</h4>
                  <span>Asst.Professor</span>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, ducimus.</p>
                  <div class="social">
                    <a href=""><i class="bi bi-facebook"></i></a>
                    <a href=""><i class="bi bi-instagram"></i></a>
                    <a href=""><i class="bi bi-linkedin"></i></a>
                    <a href=""> <i class="bi bi-whatsapp"></i> </a>
                  </div>
                </div>
              </div>
            </div>
  
            <div class="col-lg-6 mt-4">
              <div class="member d-flex align-items-start" >
                <div class="teampic"><img src={Prof2} class="img-fluid" alt=""/></div>
                <div class="member-info">
                  <h4>Jagdish Patil</h4>
                  <span>Asst.Professor</span>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, ducimus.</p>
                  <div class="social">
                    <a href=""><i class="bi bi-facebook"></i></a>
                    <a href=""><i class="bi bi-instagram"></i></a>
                    <a href=""><i class="bi bi-linkedin"></i></a>
                    <a href=""> <i class="bi bi-whatsapp"></i> </a>
                  </div>
                </div>
              </div>
            </div>


            
            <div class="col-lg-6 mt-4">
              <div class="member d-flex align-items-start" >
                <div class="teampic"><img src={Prof2} class="img-fluid" alt=""/></div>
                <div class="member-info">
                  <h4>Kishor Chavan </h4>
                  <span>Asst.Professor</span>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, ducimus.</p>
                  <div class="social">
                    <a href=""><i class="bi bi-facebook"></i></a>
                    <a href=""><i class="bi bi-instagram"></i></a>
                    <a href=""><i class="bi bi-linkedin"></i></a>
                    <a href=""> <i class="bi bi-whatsapp"></i> </a>
                  </div>
                </div>
              </div>
            </div>
  
          </div>
  
        </div>
      </section>
</>
  )
}
