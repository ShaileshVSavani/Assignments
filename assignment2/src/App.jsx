import "./App.css";
import UserProfileCard from "./UserProfileCard";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  let user ={
    img : "https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png",
    userName:"Rahul",
    age:20,
    location:"Mumbai",
    hobbies:["Cricket, ","Football, ","Badminton"]
  };

  return (
    <> 
    <center><h2>Profile Card</h2></center>
    <div className="">
      <UserProfileCard {...user}/>
     </div> 
    </>
  );
}

export default App;
