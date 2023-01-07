import './App.css';
import Card from "./UI/Card/Card";
import Slideshow from "./Components/PictureSlider/Slideshow";
import SliderAndButtons from "./Components/PictureSlider/SliderAndButtons";
import TableAboutMe from "./Components/AboutMe/TableAboutMe";

function App() {
  return (
    <div className="App">
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
            <div className="parent">
                <div className="div1">
                </div>
                <div className="div2">
                    <h1>Title</h1>
                </div>
                <div className="div3">
                    <h1>Languages</h1>
                </div>
                <div className="div4">
                    <h1>Interests</h1>
                </div>
                <div className="div5">
                    <h1>Biography</h1>
                </div>
                <div className="div6">
                    <h1>Experience</h1>
                </div>
                <div className="div7">
                    <h1>Education</h1>
                </div>
                <div className="div8">
                    <h1>Recent Projects</h1>
                </div>
            </div>
        <div className="skills-grid">
            <div className="div1">
                <h1>Skills</h1>
            </div>
            <div className="div2">
                <h1>Title</h1>
            </div>
            <div className="div3">
                <h1>Experience</h1>
            </div>
            <div className="div4">
                <h1>Education</h1>
            </div>
            <div className="div5">
                <h1>Languages</h1>
            </div>
            <div className="div6">
                <h1>Interests</h1>
            </div>
            <div className="div7">
                <h1>Card 1</h1>
            </div>
            <div className="div8">
                <h1>Recent Projects</h1>
            </div>
        </div>
    </div>
  );
}

export default App;
