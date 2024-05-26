import React from 'react'
import ph1 from "./img/showcase-photo1.jpg"
import ph3 from "./img/showcase-photo3.jpg"
import { Link } from 'react-router-dom'
const First = () => {
  return (
    <>
    
    <header class='header'>
       <nav class='navbar'>
           <div class="container">
                <h1 class='logo lg-heading text-light'>WT</h1>
                <ul class='nav-items'>
                   <li class="nav-item"><Link to='/'>Home</Link></li>
                   <li class="nav-item"><Link to="/about">About</Link></li>
                   <li class="nav-item"><Link to="/contact">Contact</Link></li>
                </ul>
           </div>
       </nav>
        <div class="header-content">
            <h1 class='lg-heading text-light main-heading'>travel the world</h1>
            <p class='text-light'>travel the world, experience the greateness, it's the best gift given by nature</p>
            <a href="#" class='btn btn-primary text-red md-heading'>Explore Places</a>
        </div>
    </header>

    <section class='showcase'>
        <div class="container">
            <div class="row row1">
                <div class="img-box">
                    <img src={ph3} alt="Image Description"/>
                </div>
                <div class="text-box">
                    <h2 class='lg-heading text-black'>DEGANVY, U.K</h2>
                    <p class='text-gray'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit incidunt nulla a corporis eveniet pariatur maiores, id quis, totam dolore praesentium facere consequatur rem, fuga minus! Rerum, dolorem praesentium. Nemo?</p>
                    <Link to="/about" class='btn btn-secondary'>More</Link>
                </div>
            </div>
            <div class="row row2">
                <div class="img-box">
                    <img src={ph1} alt="Image Description"/>
                </div>
                <div class="text-box">
                    <h2 class='lg-heading text-black'>DESERT, EGYPT</h2>
                    <p class='text-gray'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, amet ratione, quas laborum porro, explicabo vero ipsum laudantium nesciunt eos illum pariatur obcaecati fugiat asperiores nulla adipisci. Porro, atque itaque.</p>
                    <Link to="/about" class='btn btn-secondary'>More</Link>
                </div>
            </div>
        </div>
    </section>

    <section class="features">
        <div class="container">
            <div class="box-wrapper">
                <div class="box box-1">
                    <i class="fas fa-route fa-2x text-red"></i>
                    <h2 class="md-heading">Adventure</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus, quia. Corporis dolores ipsa a veniam molestias beatae, fuga ex laboriosam.</p>
                </div>
                <div class="box box-2">
                    <i class="fas fa-strikethrough fa-2x"></i>
                    <h2 class="md-heading">Less Price</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus, quia. Corporis dolores ipsa a veniam molestias beatae, fuga ex laboriosam.</p>
                </div>
                <div class="box box-3">
                    <i class="fas fa-user-check fa-2x text-red"></i>
                    <h2 class="md-heading">Experice</h2>    
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus, quia. Corporis dolores ipsa a veniam molestias beatae, fuga ex laboriosam.</p>
                </div>
            </div>
        </div>
        
    </section>

    <footer class='footer'>
        <div class="social-media-links">
            <i class="fab fa-facebook fa-4x"></i>
            <i class="fab fa-twitter fa-4x"></i>
            <i class="fab fa-instagram fa-4x"></i>
        </div>
        <p>World Travel &copy; 2020, All Rights Reserved</p>
    </footer>

    
    </>
  )
}

export default First