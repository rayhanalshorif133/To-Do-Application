import React from 'react'
import { Image } from 'react-bootstrap'
import './NotFound.css'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <>
      <div className="stars">
            <div className="central-body">
                <Image className="image-404" src="assets/notfound/svg/404.svg" width="300px"/>
                <Link to="/" className="btn-go-home">GO BACK HOME</Link>
            </div>
            <div className="objects">
                <Image className="object_rocket" src="assets/notfound/svg/rocket.svg" width="40px"/>
                <div className="earth-moon">
                    <Image className="object_earth" src="assets/notfound/svg/earth.svg" width="100px"/>
                    <Image className="object_moon" src="assets/notfound/svg/moon.svg" width="80px"/>
                </div>
                <div className="box_astronaut">
                    <Image className="object_astronaut" src="assets/notfound/svg/astronaut.svg" width="140px"/>
                </div>
            </div>
            <div className="glowing_stars">
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>

            </div>

        </div>
    </>
  )
}
