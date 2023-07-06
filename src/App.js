import logo from './logo.svg';
import './App.css';
import './coolStyles.css';

function App() {

  const basicVar = 2 + 2;
  return (
    <>
    <div className="App">

      <h1 >WELCOME</h1>
      <h2>Welcome to React</h2>
      <h4> two plus two is: {basicVar}</h4>

      <h5>the time is {(new Date().getHours())}.00 hours</h5>


      <ul></ul>
      <li>its cool</li>
      <li>single page</li>


      <div className="myBox" >

      </div>




    </div>

</>

  );
}

export default App;
