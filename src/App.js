import React from 'react';
import {useState} from "react";
import './App.css';
import Card from "./UI/Card/Card";
import Slideshow from "./Components/PictureSlider/Slideshow";
import Navbar from "./Components/Navbar/Navbar";
import ListOfEducation from "./Components/Content/ListOfEducation";
import ListofWork from "./Components/Content/ListofWork";
import Skills from "./Components/Skills/Skills";
import Footer from "./Components/Footer/Footer";
import Experience from "./Components/Content/Experience";
import Skill from "./Components/Skills/Skill";

function App() {
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useState(defaultDark ? 'dark' : 'light');
    const toggleThemeHandler = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
    };
    return  <div className="App" data-theme={theme}>
                <Navbar onThemeChange={toggleThemeHandler}></Navbar>
                <div className="body">
                <div className="width">
                    <div className="aboutMe">
                        <Card className="Header">
                            <h2>About me</h2>
                        </Card>
                        <Slideshow className="PictureSlider"/>
                        <Card className="Hi">
                            <h2 style={{textAlign:"left"}}>Hi, I'm Liam</h2>
                            <p style={{textAlign:"left"}} >Liam Sky Damien Heß</p>
                            <p style={{textAlign:"left"}} >  Born in Bonn, Germany on the 15th of August 2001</p>
                            <p style={{textAlign:"left"}}> Address: Alter Heeresweg 11, 53639 Königswinter</p>
                            <p>
                                My name is Liam and I'm 21 years old. I'm a student at the HBRS in Bonn and I'm currently studying computer science.
                            </p>
                        </Card>
                    </div>
                    <Experience className="experiences" theme={theme}/>
                    <Skills/>
                    <div className="Projects">
                    </div>
                </div>

                    <Footer className="footer"/>
                    <p>https://www.get-in-it.de/profil/UWSjB0ZYF69yshlZgmyOVZg74VruOS6G</p>
                </div>
            </div>
}
export default App;
