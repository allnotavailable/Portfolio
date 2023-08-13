import "./FooterStyles.css"

import React from 'react'

import {FaHome, FaMailBulk, FaPhone} from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"white", marginRight: "2rem"}} />
                    <div>
                        <p>Kent Ridge Hall</p>
                        <p>Singapore</p>

                    </div>
                </div>
                <div className="phone">
                    <h4>
                        <FaPhone size={20} style={{color:"white", marginRight: "2rem"}} />   
                        90530168             
                    </h4>
                </div>
                <div className="email">
                    <h4>
                        <FaMailBulk size={20} style={{color:"white", marginRight: "2rem"}} />   
                        timothyfusanto@gmail.com
                    </h4>
                </div>
            </div>
            <div className="right">
                <h4>About me</h4>
                <p>This is me Timothy, student at National University of Singapore. I enjoy web development and looking for the opportunity to enhance my skills</p>
            </div>
        </div>
    </div>
  )
}

export default Footer