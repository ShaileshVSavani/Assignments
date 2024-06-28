import './App.css';
import Counter from './Counter';

function App() {
  let data1 = {
    initialVal: 5,
    add: 2,
    sub: 1,
  };

  return (
    <>
      <Counter {...data1} style={{ backgroundColor: "green", padding:"10px",borderRadius:"13px" }} />
      <Counter initialVal={2} add={3} sub={2} style={{ backgroundColor: "yellow", padding:"10px",borderRadius:"13px" }}/>
      <Counter initialVal={10} add={5} sub={2} style={{ backgroundColor: "pink", padding:"10px",borderRadius:"13px" }}/>
      <Counter {...{ initialVal: 6, add: 11, sub: 10 }} style={{ backgroundColor: "orange", padding:"10px",borderRadius:"13px" }}/>
      <Counter {...{ initialVal: 11, add: 15, sub: 2 }} style={{ backgroundColor: "red", padding:"10px",borderRadius:"13px" }}/>
    </>
  );
}

export default App;


