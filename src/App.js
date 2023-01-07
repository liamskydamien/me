import './App.css';
import Card from "./UI/Card/Card";
import Slideshow from "./Components/PictureSlider/Slideshow";
import SliderAndButtons from "./Components/PictureSlider/SliderAndButtons";

function App() {
  return (
    <div className="App">
        <div className="aboutMe">
            <Card className="Header">
                <h1>About me</h1>
            </Card>
               <Slideshow className="PictureSlider"/>
            <div className="Hi"></div>
            <div className="General"></div>
            <div className="AboutMyself"></div>
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
