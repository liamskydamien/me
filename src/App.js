import React from 'react';
import {useState} from "react";
import './App.css';
import Card from "./UI/Card/Card";
import Slideshow from "./Components/PictureSlider/Slideshow";
import Navbar from "./Components/Navbar/Navbar";
import ListOfEducation from "./Components/Content/ListOfEducation";
import styles from "./Components/Content/contentStyles.module.css";
import {FaCode, FaNetworkWired, FaPoll, FaRegLightbulb} from "react-icons/fa";

function App() {
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useState(defaultDark ? 'dark' : 'light');
    const toggleThemeHandler = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
    }
    const [showEducation, setShowEducation] = useState(false);

    const toggleExpansionEducation = () => {
        setShowEducation(!showEducation);
    }

    return  <div className="App" data-theme={theme}>
                <Navbar onThemeChange={toggleThemeHandler}></Navbar>
                <div className="body">
                  <div className="aboutMe">
                      <Card className="Header">
                          <h2>About me</h2>
                      </Card>
                      <Slideshow className="PictureSlider"/>
                      <Card className="Hi">
                          <h2 style={{textAlign:"left"}}>Hi, I'm Liam</h2>
                      </Card>
                      <Card className="General">
                          <p style={{textAlign:"left"}} >Liam Sky Damien Heß</p>
                          <p style={{textAlign:"left"}} >  Born in Bonn, Germany on the 15th of August 2001</p>
                          <p style={{textAlign:"left"}}> Address: Alter Heeresweg 11, 53639 Königswinter</p>
                      </Card>
                      <Card className="AboutMyself">
                          <p>
                              My name is Liam and I'm 21 years old. I'm a student at the HBRS in Bonn and I'm currently studying computer science.
                          </p>
                      </Card>
                  </div>
                  <div className="experiences">
                      <Card className="ExperiencesHeader">
                          <h2>Experiences</h2>
                      </Card>
                      <Card className="Work">
                          <h3 style={{textAlign:"left"}}>Work</h3>
                      </Card>
                      <Card className="Education expandableCard" onClick={toggleExpansionEducation}>
                          <ListOfEducation isExpanded={showEducation}/>
                      </Card>
                  </div>
                    <div className={styles.skills}>
                    <div className={styles.skill}><FaCode/> Software Engineering</div>
                    <div className={styles.skill}><FaPoll/> IT-Controlling</div>
                    <div className={styles.skill}><FaCode/> Web Development</div>
                    <div className={styles.skill}><FaRegLightbulb/> Design Thinking</div>
                    <div className={styles.skill}><FaNetworkWired/> IT-Systems</div>
                </div>
                </div>
            </div>
}
export default App;
