import React, { useState, useCallback, useRef, useEffect } from "react";
import "./App.css";
function App() {
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState("");
  const [character, setCharacter] = useState("");
  const [number, setNumber] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (number) str += "1234567890";
    if (character) str += "!@#$%^&&*()";
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, number, character, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, number, character, setPassword]);
  return (
    <div>
      <div className="container d-flex justify-center align">
        <div className="child-container d-flex justify-center align">
          <h4>Password generator</h4>
        </div>
        <div className="child-container d-flex justify-center align">
          <input type="text" className="password" value={password} />
          <input className="btn cursor-pointer" type="button" value={"copy"} />
        </div>
        <div className="child-container">
          <input type="range" onChange={(e)=>setLength(e.target.value)} value={length} min={8} max={40}/>
          <label>Length:{length}</label>
          <label>Character:{character}</label>
          <input
            className="cursor-pointer"
            type="checkbox"
            onClick={() => {
              setCharacter((prev) => !prev);
            }}
          />
          <label>Number:{number}</label>
          <input
            className="cursor-pointer"
            type="checkbox"
            onClick={() => {
              setNumber((prev) => !prev);
            }}/>
        </div>
      </div>
    </div>
  );
}
export default App;
