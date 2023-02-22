
import './App.css';
import Header from "./components/profiles/Header";

import FullName from "./components/profiles/FullName";
import Bio from "./components/profiles/Bio"
import Profession from './components/profiles/Profession';
import Profiles from './components/profiles/Profiles';
function App() {
  const handleAlert = () => { alert( `im a developer`);
  };
  return (
    <div>
      <Header />
      
      <FullName firstName="Hana" lastName="Ouerghi">
      
        <h3>Welcome to my profile</h3>
      </FullName>
      <Bio FullName="Hana Ouerghi" Age={31} Interests="Learning, Watching TV , cooking"  />
      <div>
      <h3 className='title'><b>Profession</b></h3>
    <p className='card-text'>I am currently a student at GO My Code Academy
  
Motivated, curious, ambitious, always looking to improve my skills.</p>
    <p className='card-text'><b>SKIILS</b> <br/> -HTML/CSS <br/> -JAVASCRIPT <br/> -REACT </p>
      
      <Profession title={"Im a developer" } 
      
      handleAlert={handleAlert}/></div>
      

    <Profiles>
     <div>
      <h1>Contact</h1>
      <p>Email:ouerghihana@gmail.com</p>
      <img  className ='working'src="https://assets-global.website-files.com/5f6b9a421d5a61e1d0cd9e3d/5f8e79444f8f2dee8245ae3f_5de52d612ab67bed06dc08e5_remote%2520working.jpeg" alt=""  style={{width:"600px", height:"200px"}} />
      
      </div>
      </Profiles>
       </div>
       
  );
}

export default App;
