import React from 'react'
import corusol_image from "./Image/image.jpg";
import corusol_image2 from "./Image/image2.jpg";
export default function Home() {
  return (
    <div className='container' >
      <div className='row'>
        <div className="col col-lg-8 ">
          <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={corusol_image} class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src={corusol_image2} class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src={corusol_image} class="d-block w-100" alt="..." />
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
          <div>
          </div>
        </div>
      </div>
    </div>
  )
}
