import React from 'react'
import "./Features.scss"
function Features() {
  return (
<>

    <div className='features'>
        <div className="container">
            <div className="item">
                <h1>A whole world of freelance at your finger tips</h1>
                <div className="title">
                    <img src="./img/check.png" al
                    t="" />
                    The best for every budget
                </div>
                <p>
                    find high quality price at every price point. No hourly rates,
                    just project-based pricing
                </p>
                <div className="title">
                    <img src="./img/check.png" alt="" />
                    Quality work done quickly
                </div>
                <p>
                    find the right fleelancer to begin working on your project within minutes
                </p>
                <div className="title">
                    <img src="./img/check.png" alt="" />
                    Protected Payment every time
                </div>
                <p>
                    Always know what you'll pay upfront. your payment isn't released until you approve the work
                </p>
                <div className="title">
                    <img src="./img/check.png" alt="" />
                    24/7 Support
                </div>
                <p>
                    Find high-quality services at every price point No hourly rates just project-based pricing
                </p>
            </div>
            <div className="item">
                <video src="./img/video.mp4" controls></video>
            </div>
        </div>
    </div>

    <div className="features dark">
        <div className="container">
          <div className="item">
            <h1>
              Kankot <i>business</i>
            </h1>
            <h1>
              A business solution designed for <i>teams</i>
            </h1>
            <p>
              Upgrade to a curated experience packed with tools and benefits,
              dedicated to businesses
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Connect to freelancers with proven business experience
            </div>

            <div className="title">
              <img src="./img/check.png" alt="" />
              Get matched with the perfect talent by a customer success manager
            </div>

            <div className="title">
              <img src="./img/check.png" alt="" />
              Manage teamwork and boost productivity with one powerful workspace
            </div>
            <button>Explore Kankot Business</button>
          </div>
          <div className="item">
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png"
              alt=""
            />
          </div>
        </div>
      </div>

</>
    
  )
}

export default Features