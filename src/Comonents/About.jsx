import React from 'react'
import image from '../assets/dhiraj img.jpg'
import './Style/About.css'

function About() {
  return (
    <section id="about">
    <div class="container mt-4 pt-4" />
        <h1 class="text-center">About Me</h1>
        <div class="row mt-4">
            <div class="col-lg-4">
                <img src={image} class= "imageAboutPage" alt="" />
            </div>

            <div class="col-lg-8">
                <p> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
                    
                </p>
                <div class="row mt-3">
                    <div class="col-md-6">
                        <ul>
                            <li className='text-danger fw-bold'>Name: Dhiraj Desale</li>
                            <li>Age: 21</li>
                            <li>Occupation: Web Developer</li>

                        </ul>
                    </div>
                    
                   
                </div>
                <div class="row mt-3">
                    <p> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                </div>
            </div>
        </div>
</section>
  )
}

export default About
