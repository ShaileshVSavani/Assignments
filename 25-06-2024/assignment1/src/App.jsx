import "./App.css";
import Greetings from "./Greetings";


function App() {

  let data1={
    name:"Congratulation!!",
    color:"green"
  };

  return (
    <> 
    <center><h1>Greetings!!!</h1></center>
    <div className="Greetings">
      <Greetings {...data1}/>
      <Greetings name="Welcome!!" color='orange'/>
      <Greetings name="Hello!!" color='greenihsyellow'/>
      <Greetings name="Thanks!!" color='pink'/>
      <Greetings />
    
     
     </div> 
    </>
  );
}

export default App;
