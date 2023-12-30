import './App.css';

function App() {
  return (
    <div className="App">

      <div id='box1'>

          <div id='navBar'>Follow me on : <div id='ig'></div> <div id='linkd'></div></div>
          <h1>Enter your name to find your Vortex Number</h1>
          
          <div id='container'>
              <input placeholder='Entrer the Name'></input>
              <button>FIND</button>
              <p>Your Vortex Number is : </p>
          </div>

          <div id='footer'>Made by Captain</div> 
      
      </div>

      <div id='box2'>
        <h1 id='nt'>Vortext Math - Nikolas Tesla</h1>
      </div>

    </div>
  );
}

export default App;
