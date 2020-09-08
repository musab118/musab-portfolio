import React from 'react';
// import image from '../logo.png'



const NavBar = () => {

    return (
        <div>
          
            <nav className="bg-moon-gray db dt-m w-100 border-box pa3 ">  
            {/* <a className="db dtc-l v-mid mid-gray link dim w-100 w-225-l tc tl-l mb2 mb0-l" href="#" title="Home">
                 <img src={image} className="dib w4 h4 br-10" alt="Site Name"/>
                </a> */}
                <div className="db dtc-m v-mid w-100  tc ">
                    <p className="link dim grow dark-gray f6 f4-l dib mr3 mr4-l pointer"  title="Home">About Me</p>
                    <p className="link dim grow dark-gray f6 f4-l dib mr3 mr4-l pointer" title="How it Works">Skills</p>
                    <p className="link dim grow dark-gray f6 f4-l dib mr3 mr4-l pointer" title="Blog">Education</p>
                    <p className="link dim grow dark-gray f6 f4-l dib mr3 mr4-l pointer"  title="Press">Projects</p>
                    <p className="link dim grow dark-gray f6 f4-l dib pointer"  title="Contact">Contact Information</p>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;