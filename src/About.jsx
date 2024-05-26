import React from 'react'
import { Link } from 'react-router-dom'
const About = () => {
  return (
    <>
    
    <nav class='navbar bg-dark'>
        <div class="container">
             <h1 class='logo lg-heading text-light'>WT</h1>
             <ul class='nav-items'>
             <li class="nav-item"><Link to='/'>Home</Link></li>
                   <li class="nav-item"><Link to="/about">About</Link></li>
                   <li class="nav-item"><Link to="/contact">Contact</Link></li>
             </ul>
        </div>
    </nav>

    <section class="about">
        <div class="container">
            <h2 class='lg-heading text-black about-heading'>About Us</h2>
            <p class="text-gray">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam pariatur, eum veritatis minima tempore laborum ad aspernatur quod itaque. Nostrum.</p>
            <div class="about-wrapper">
                 <div class="left">
                     <ul>
                         <li>Lorem ipsum dolor sit.</li>
                         <li>Lorem ipsum dolor sit.</li>
                         <li>Lorem ipsum dolor sit.</li>
                     </ul>
                 </div>
                 <div class="right">
                    <ul>
                        <li>Lorem ipsum dolor sit.</li>
                        <li>Lorem ipsum dolor sit.</li>
                        <li>Lorem ipsum dolor sit.</li>
                    </ul>
                 </div>
            </div>

            <div class="counts">
                <div class="count-item count-item1">
                    <span>2500</span> 
                    <p>Travelled</p>   
                </div>
                <div class="count-item count-item2">
                    <span>500</span>
                    <p>Places</p>
                </div>
                <div class="count-item count-item3">
                    <span>400</span>
                    <p>Guide</p>
                </div>
                <div class="count-item count-item4">
                    <span>20</span>
                    <p>Sport</p>
                </div>
            </div>

            <div class="cta-banner">
                <div class="cta-banner-left">
                    <p class="cta-line">What are you waiting for, reach us right now.</p>
                </div>
                <div class="cta-banner-right">
                    <Link to="/contact" class='btn-cta'>Contact Us</Link>
                </div>
            </div>
            
        </div>
        
    </section>
    
    </>
  )
}

export default About