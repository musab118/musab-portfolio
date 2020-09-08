import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Card } from "semantic-ui-react";
import Javascriptlogo from "../javascrptlogo.png";
import Tilt from "react-tilt";
import ReactLogo from "../reactlogo.png";
import SQLlogo from "../sqllogo.png";
import Vuelogo from "../vuelogo.png";
import HTMLlogo from "../htmllogo.png";
import CSSlogo from "../csslogo.png";

const Skills = () => {
  return (
    <div className="">
      <header className="sans-serif">
        <div className="cover bg-left bg-center-l" style={{}}>
          <div className="bg-moon-gray pb5 pb6-m pb4-l">
            <nav className="dt w-100 mw8 center">
              <div className="dtc w2 v-mid pa3"></div>
            </nav>
            <div className="tc-l mt4 mt5-m mt4-l ph3">
              <h1 className="f2 f1-l fw2 white-90 mb0 lh-title">Skills</h1>

              <a
                className="no-underline near-white bg-animate  inline-flex items-center ma2 tc br2 pa2 "
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                title="GitHub"
              >
                <div className="fl w-20 tc pv2 mt2-m ph3 ">
                  <Tilt
                    className="Tilt"
                    options={{ max: 25 }}
                    style={{ height: 250, width: 250 }}
                  >
                    <Card
                      className="pointer"
                      image={Javascriptlogo}

                      header="Javascript"
                    />
                  </Tilt>
                </div>
              </a>

              <a
                className="no-underline near-white bg-animate  inline-flex items-center ma2 tc br2 pa2"
                href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                title="GitHub"
              >
                <div className="fl w-20 tc pv2 mt4-m ph3 ">
                  <Tilt
                    className="Tilt"
                    options={{ max: 25 }}
                    style={{ height: 250, width: 250 }}
                  >
                    <Card
                      className="pointer "
                      image={HTMLlogo}
                      header="HTML"
                    />
                  </Tilt>
                </div>
              </a>

              <a
                className="no-underline near-white bg-animate  inline-flex items-center ma2 tc br2 pa2"
                href="https://reactjs.org/"
                title="GitHub"
              >
                <div className="fl w-20 tc pv2 mt4-m ph3 ">
                  <Tilt
                    className="Tilt"
                    options={{ max: 25 }}
                    style={{ height: 250, width: 250 }}
                  >
                    <Card
                      className="pointer "
                      image={ReactLogo}
                      header="React"
                    />
                  </Tilt>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="cover bg-left bg-center-l" style={{}}>
          <div className="bg-moon-gray pb5 pb6-m pb6-l">
            <nav className="dt w-100 mw8 center">
              <div className="dtc w2 v-mid pa3"></div>
            </nav>
            <div className="tc-l mt4 mt5-m mt4-l ph3">
             

              <a
                className="no-underline near-white bg-animate  inline-flex items-center ma2 tc br2 pa2"
                href="https://vuejs.org/"
                title="GitHub"
              >
                <div className="fl w-20 tc pv2 mt2-m ph3 ">
                  <Tilt
                    className="Tilt"
                    options={{ max: 25 }}
                    style={{ height: 250, width: 250 }}
                  >
                    <Card
                      className="pointer "
                      image={Vuelogo}
                      header="Vue"
                    />
                  </Tilt>
                </div>
              </a>

              <a
                className="no-underline near-white bg-animate  inline-flex items-center ma2 tc br2 pa2"
                href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                title="GitHub"
              >
                <div className="fl w-20 tc pv2 mt4-m ph3 ">
                  <Tilt
                    className="Tilt"
                    options={{ max: 25 }}
                    style={{ height: 250, width: 250 }}
                  >
                    <Card
                      className="pointer "
                      image={CSSlogo}
                      header="CSS"
                    />
                  </Tilt>
                </div>
              </a>

              <a
                className="no-underline near-white bg-animate  inline-flex items-center ma2 tc br2 pa2"
                href="https://www.w3schools.com/sql/"
                title="GitHub"
              >
                <div className="fl w-20 tc pv2 mt4-m ph3 ">
                  <Tilt
                    className="Tilt"
                    options={{ max: 25 }}
                    style={{ height: 250, width: 250 }}
                  >
                    <Card
                      className="pointer "
                      image={SQLlogo}
                      header="SQL & Databases"
                    />
                  </Tilt>
                </div>
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Skills;
