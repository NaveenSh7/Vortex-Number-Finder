
import './App.css';
import { useState } from 'react';
import { db } from './Config/firebase-config';
import { addDoc, collection } from 'firebase/firestore';

function App() {

  // using firebase for test purpose only
  const UserCollecRef = collection(db, 'users');
  const [Name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onFind = async (name, vortexNumber) => {
    try {
      await addDoc(UserCollecRef, {
        name,
        vortexNumber,
      });
    } catch (err) {
      console.error(err);
    }
  };

  const findFun = async () => {
    let n = 0;

    for (let i = 0; i < Name.length; i++) {
      if (Name[i] === 'a' || Name[i] === 'j' || Name[i] === 's') {
        n = n + 1;
      } else if (Name[i] === 'b' || Name[i] === 'k' || Name[i] === 't') {
        n = n + 2;
      } else if (Name[i] === 'c' || Name[i] === 'l' || Name[i] === 'u') {
        n = n + 3;
      } else if (Name[i] === 'd' || Name[i] === 'm' || Name[i] === 'v') {
        n = n + 4;
      } else if (Name[i] === 'e' || Name[i] === 'n' || Name[i] === 'w') {
        n = n + 5;
      } else if (Name[i] === 'f' || Name[i] === 'o' || Name[i] === 'x') {
        n = n + 6;
      } else if (Name[i] === 'g' || Name[i] === 'p' || Name[i] === 'y') {
        n = n + 7;
      } else if (Name[i] === 'h' || Name[i] === 'q' || Name[i] === 'z') {
        n = n + 8;
      } else if (Name[i] === 'i' || Name[i] === 'r') {
        n = n + 9;
      }
    }

    const vortexNumber = calculateVortexNumber(n);
    setNumber(vortexNumber);
    await onFind(Name, vortexNumber);
  };

  const calculateVortexNumber = (n) => {
    let n1 = 0;
    while (n >= 1) {
      n1 = n1 + n % 10;
      n = n / 10;
    }
    if (n1 / 10 >= 1) {
      return calculateVortexNumber(n1);
    } else {
      return Math.floor(n1);
    }
  };

return (
    <div className="App">
    
      <div id='box1'>

          <div id='navBar'>Follow me on : <a id='ig' href="https://www.instagram.com/naveen_sh07/?igsh=ODlzNTdvaW96c2g%3D" target="_blank"></a> <a id='linkd' href="https://www.linkedin.com/in/naveen-s-h-3545b8262?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"></a></div>

          <h1>Enter your name to find your Vortex Number</h1>
          
          <div id='container'>

              <input placeholder='Entrer the Name' onChange={(e)=>{
                
                const lowercaseValue = e.target.value.toLowerCase();
                setName(lowercaseValue);}}></input>

              <button id='findBtn' onClick={findFun}>FIND</button>

              <p id='is'>Your Vortex Number is : </p> <p id='num'>{number}</p>

          </div>

          <div id='footer'>Made by Naveen .... on the basis of Tesla's 3-6-9 vortex maths</div> 
      
      </div>

      <div id='box2'>
        <h1 id='nt'>Vortext Math - Nikolas Tesla</h1>
      </div>

    </div>
  );
 }


export default App;












// This code had a bug of asyn , took alot time :(




// import './App.css';
// import { useState } from 'react';

// import { db } from './Config/firebase-config';
// import { addDoc , collection } from 'firebase/firestore';


// function App() {

//   const UserCollecRef = collection(db , "users");

//   const [Name , setName] = useState("");
//   const [number , setNumber] = useState("");

//   // using firebase for test purpose only
//   const [userName , setUsername] = useState("");
//   const [userNum , setUsernum] = useState();

//   const onFind = async () =>{
//     try {
//             await addDoc(UserCollecRef , {
//               name: userName,
//               number: userNum,
              
//             });

//     }
//     catch(err){console.error(err);}

//   }
  
//   const findFun =  async ()=>{
//     await onFind();

//   let n = 0;

//   setUsername(Name);
//  // Code for finding corresponding number

//   for (let i = 0; i < Name.length; i++)
//         {
    
//     if (Name[i]=='a' ||Name[i]=='j'||Name[i]=='s' ) {
//       n = n + 1;
//     }
//     else if(Name[i]=='b'||Name[i]=='k'||Name[i]=='t'){n=n+2;} 

//     else if(Name[i]=='c'||Name[i]=='l'||Name[i]=='u'){n=n+3;}

//     else if(Name[i]=='d'||Name[i]=='m'||Name[i]=='v'){n=n+4;}

//     else if(Name[i]=='e'||Name[i]=='n'||Name[i]=='w'){n=n+5;}

//     else if(Name[i]=='f'||Name[i]=='o'||Name[i]=='x'){n=n+6;}

//     else if(Name[i]=='g'||Name[i]=='p'||Name[i]=='y'){n=n+7;}

//     else if(Name[i]=='h'||Name[i]=='q'||Name[i]=='z'){n=n+8;}

//     else if(Name[i]=='i'||Name[i]=='r'){n=n+9;}


//         }

//   //summation of numbers

  

 

//   const fun2 = (n) =>{
//     var n1 = 0;
//     while(n>=1)
//     {
//       n1 = n1 + n%10;
//       n = n/10;

//       console.log(n1);
    
//     }
//     if(n1/10 >=1){fun2(n1);}
//     else{
//       let num2 = Math.floor(n1);
//       setNumber(num2);
//       setUsernum(num2);
   
//     }
//   }
  
//   fun2(n);
  
  

    
//   }


// return (
//     <div className="App">
    
//       <div id='box1'>

//           <div id='navBar'>Follow me on : <a id='ig' href="https://www.instagram.com/naveen_sh07/?igsh=ODlzNTdvaW96c2g%3D" target="_blank"></a> <a id='linkd' href="https://www.linkedin.com/in/naveen-s-h-3545b8262?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"></a></div>

//           <h1>Enter your name to find your Vortex Number</h1>
          
//           <div id='container'>

//               <input placeholder='Entrer the Name' onChange={(e)=>{
                
//                 const lowercaseValue = e.target.value.toLowerCase();
//                 setName(lowercaseValue);}}></input>

//               <button id='findBtn' onClick={findFun}>FIND</button>

//               <p id='is'>Your Vortex Number is : </p> <p id='num'>{number}</p>

//           </div>

//           <div id='footer'>Made by Naveen .... on the basis of Tesla's 3-6-9 vortex maths</div> 
      
//       </div>

//       <div id='box2'>
//         <h1 id='nt'>Vortext Math - Nikolas Tesla</h1>
//       </div>

//     </div>
//   );
//  }


// export default App;