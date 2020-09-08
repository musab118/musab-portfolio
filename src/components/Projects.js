import React from 'react';
import FaceRecognitionPhoto from '../facerecog.png';
import FullStackPhoto from '../fullstack.png';
import SmartFilePhoto from '../smartfile.png';

const Projects = () => {

    return(
        <div>
 <div className="cover bg-left bg-center-l" style={{}}>  
 <div className="bg-black-80 pb5 pb6-m pb4-l">
<section className="mw7 center avenir">
<h1 className="f2 f1-l fw2 white-90 mb0 lh-title pa5">Projects</h1>
  <article className="bt bb b--black-10">
    <a className="db pv4 ph3 ph0-l no-underline black grow" href="https://github.com/musab118/SmartFile">
      <div className="flex flex-column flex-row-ns">
        <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns" href = "https://github.com/musab118/SmartFile">
          <img src={SmartFilePhoto} className="db br4 shadow-5 ba bw3 " alt=""/>
        </div>
        <div className="w-100 w-60-ns pl3-ns">
          <h1 className="f3 fw2 white-90 mt0 lh-title">Python SmartFile</h1>
          <p className="f6 f5-l fw4 white-90 lh-copy">
            Automated Python application that organizes system files by type. Implements
            the OS and Pathlib libraries
          </p>
         
        </div>
      </div>
    </a>
  </article>
  <article className="bb b--black-10">
    <a className="db pv4 ph3 ph0-l no-underline black  grow" href="https://github.com/musab118/full-stack-mevn">
      <div className="flex flex-column flex-row-ns ">
        <div className="pr3-ns mb4  mb0-ns w-100 w-40-ns  " href="https://github.com/musab118/full-stack-mevn">
          <img src={FullStackPhoto}className="db br4 shadow-5 ba bw3   " alt=""/>
        </div>
        <div  className="w-100 w-60-ns pl3-ns">
        <h1 className="f3 fw2 white-90 mt0 lh-title ">Full stack Vue.JS App </h1>
        <p className="f6 f5-l fw4 white-90 lh-copy">
        Full-stack web application with CRUD operations using state of the art 
        technologies such as Vue, Node.js and MongoDB which allowed user 
        registration/authentication and appointment scheduling
          </p>
         
        </div>
      </div>
    </a>
  </article>
  <article className="bb b--black-10">
    <a className="db pv4 ph3 ph0-l no-underline black grow" href="https://github.com/musab118/facerecognition">
      <div className="flex flex-column flex-row-ns">
        <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns" href = "https://github.com/musab118/facerecognition">
          <img src={FaceRecognitionPhoto} className="db br4 shadow-5 grow ba bw3" alt=""/>
        </div>
        <div className="w-100 w-60-ns pl3-ns">
        <h1 className="f3 fw2 white-90 mt0 lh-title">React Face recognition app </h1>
        <p className="f6 f5-l fw4 white-90 lh-copy">
            Face recogntion app using the Clarifai API and React
          </p>
          
        </div>
      </div>
    </a>
  </article>
</section>
</div>
</div>
        </div>
    )

}

export default Projects;