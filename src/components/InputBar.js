import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";

import '../App.css';
import './css/InputBar.css'
import './css/Profile.css'
/*using fontawesome for the icons */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MyLocalStorage from './utils/MyLocalStorage'

//passToOutPutBox
const InputBar = ({ passToHeader}) => {

  const [name, setName] = MyLocalStorage('username',);
  let history = useHistory();
  const inputValue = useRef(null);



  useEffect(() => {
    if(name){
      history.push("/translate");

    }
  }, [name]);


  const addValue = () => {

    /**Make sure the input is clean */
    let cleanValue = inputValue.current.value.replace(/[^a-zA-Z ]/g, "");
    inputValue.current.value = cleanValue;

    /**Create object to be stored in localStorage */
    if (inputValue.current.value && inputValue.current.placeholder === "What's your name?") {
    
       setName(inputValue.current.value);
        window.dispatchEvent(new Event("storage"));
      /**Empty input value and change placeholder text */
      inputValue.current.value = "";
      inputValue.current.placeholder = "Time to translate"

      /**Tell header to animate */
      passToHeader()

    }

  }

  return (
    <div>
      {/* only show profile if you entered a name */}
      <main>
        <div className="inputwrap">
          <div className="inputwhitewrap">
            <div className="formwrap">
              <div className="form-input ">
                <label htmlFor="input" className="iconl"><FontAwesomeIcon className="far fa-keyboard" icon='keyboard' /></label>
                <div className="iconr" onClick={addValue}><FontAwesomeIcon className="fas fon" icon='arrow-alt-circle-right' /></div>
                <input ref={inputValue} id="input" type="text" className="input" placeholder="What's your name?" pattern="[A-Za-z]" aria-label="Enter your translation here" required />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>);
};

export default InputBar;