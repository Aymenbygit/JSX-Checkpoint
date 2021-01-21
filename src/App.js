import './App.css';
import myImage  from "../src/imageInSrc.jpg";
import style from "./style.css"

function App() {
  return (
    <div className="App">
      <div style={{ border:"solid 1px black",maxWidth:'100vw'}}>
        <h1 class="title red">Aymen Ben Youssef</h1>
        <br />
        <img src={myImage}  />
        <br />
        <img src="/imageInPublic.jpg" style={{ width:"1025px",height:'700px'}}/>
        <video style={{width:"900px" }} controls>
              <source src="/beautyOfNature.mp4" type="video/mp4" />
            </video>
        </div>
        
    </div>
  );
}

export default App;
