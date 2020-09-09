import React, { Component } from 'react';

import {Link, animateScroll as scroll} from 'react-scroll';
import './Navbar.css'



class NavBar extends Component{
    scrollToTop = () => {
        scroll.scrollToTop();
      };

render(){
    return (
        <div className =" sticky" >
          
            <nav className="bg-black db dt-m w-100 border-box pa3 ">  
            
                <div className="db dtc-m v-mid w-100  tc ">
                    <p className="link dim grow dark-gray f6 f4-l dib mr3 mr4-l pointer"  title="Home">
                    <Link
                
                to="section1"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1500}
              >
                        About Me
             </Link></p>

                    <p className="link dim grow dark-gray f6 f4-l dib mr3 mr4-l pointer" title="How it Works">
                <Link
                activeClass="active"
                to="section2"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
              >
                        Skills
                        </Link>
                        </p>
                    
                    <p className="link dim grow dark-gray f6 f4-l dib mr3 mr4-l pointer"  title="Press">
                    <Link
                activeClass="active"
                to="section3"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
              >
                Projects
              </Link> </p>
                    <p className="link dim grow dark-gray f6 f4-l dib pointer"  title="Contact">
                    <Link
                activeClass="inactive"
                to="section4"
                spy={true}
                smooth={true}
                offset={-100}
                duration={2000}
              >
                        Contact Information
                        </Link> </p>
                </div>
            </nav>
        </div>
    )
}
}

export default NavBar;