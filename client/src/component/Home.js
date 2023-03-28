import React from 'react'
import img1 from './image/img1.jpg'
import img2 from './image/img2.jpg'
import img3 from './image/img3.jpg'
const Home = () => {
    return (
        <>
            <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={img1} height="600" width="500" class="d-block w-100" class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src={img2} height="600" width="500" class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src={img3} height="600" width="500" class="d-block w-100" class="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

        </>

    )
}
export default Home