import React from 'react';
import {useState} from "react";
import './App.css';
import Card from "./UI/Card/Card";
import Slideshow from "./Components/PictureSlider/Slideshow";
import Navbar from "./Components/Navbar/Navbar";
import Skills from "./Components/Skills/Skills";
import Footer from "./Components/Footer/Footer";
import Experience from "./Components/Content/Experience";
import Projects from "./Components/Projects/Projects";

function App() {
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useState(defaultDark ? 'dark' : 'light');
    const toggleThemeHandler = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
    };
    return  <div className="App" data-theme={theme}>
                <Navbar onThemeChange={toggleThemeHandler} theme={theme}></Navbar>
                <div className="body">
                <div className="width">
                    <div className="aboutMe">
                        <Card className="Header">
                            <h2>About me</h2>
                        </Card>
                        <Slideshow className="PictureSlider"/>
                        <Card className="Hi">
                            <h2 style={{textAlign:"left"}}>Hi, I'm Liam</h2>
                            <p style={{textAlign:"left"}} > Liam Sky Damien Heß</p>
                            <p style={{textAlign:"left"}} > Born in Bonn, Germany on the 15th of August 2001</p>
                            <p style={{textAlign:"left", marginBottom: "1rem"}}> Address: Alter Heeresweg 11, 53639 Königswinter</p>
                            <p>
                                My name is Liam and I'm 21 years old. I'm a student at the HBRS in Bonn and I'm currently studying computer science. <br/>
                                Im especially interested in web development and digital product-management. <br/>
                                I'm currently looking for an internship or working-student job in the field of web development. <br/>
                                Currently I'm working at ZDH-Zert GmbH as a working student, aswell as freelancing as a web designer. <br/>
                                In my free time I like to program side projects like this website or small web applications.
                            </p>
                        </Card>
                    </div>
                    <Experience className="experiences" theme={theme}/>
                    <Skills/>
                    <Projects/>
                </div>
                    <Footer className="footer"/>
                </div>
            </div>
}
export default App;
