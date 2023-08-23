import React from 'react'

export default function Footer() {
    return (

        <footer >
            <ul className='social-links' style={{ margin: "auto" }} >
                <li data-aos="fade-down" data-aos-duration="900">
                    <a href="http://facebook.com" target="_blank" className="button project-btn" rel="noreferrer" >

                        <i className="fa fa-facebook p-2 text-light"></i>
                    </a>
                </li>
                <li data-aos="fade-down" data-aos-duration="1100">
                    <a href="https://github.com/Krishna-patel-0311/" target="_blank" rel="noreferrer" className="button github-btn">
                        <i className="fa fa-github text-light"></i>
                    </a>
                </li>
                <li data-aos="fade-down" data-aos-duration="1300">
                    <a href="https://www.linkedin.com/in/krishna-patel11/" target="_blank" rel="noreferrer" className="button linkedin-btn">
                        <i className="fa fa-linkedin text-light"></i>
                    </a>
                </li>
                <li data-aos="fade-down" data-aos-duration="1500">
                    <a href="http://Instagram.com" target="_blank" rel="noreferrer" className="button instagram-btn">
                        <i className="fa fa-instagram text-light"></i>
                    </a>
                </li>
                <li data-aos="fade-down" data-aos-duration="1700">
                    <a href="http://twitter.com" target="_blank" rel="noreferrer" className="button twitter-btn">
                        <i className="fa fa-twitter text-light"></i>
                    </a>
                </li>
            </ul>
            <h4 className='mt-2 ' >&copy; Copyright 2023 Design by {" "}
                <a title="krishna Patel" className='text-warning' href="https://www.linkedin.com/in/krishna-patel11/">Krishna Patel
                </a>
            </h4>
        </footer>

    )
}
