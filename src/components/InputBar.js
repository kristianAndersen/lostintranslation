import React, { useRef } from "react";
import '../App.css';
import './css/InputBar.css'
import Profile from './Profile';
import './css/Profile.css'
/*using fontawesome for the icons */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { MyLocalStorage } from './utils/MyLocalStorage'
import {SaveTranslations} from './utils/SaveTranslations'
const InputBar = ({ passToHeader, passToOutPutBox }) => {

  const [name, setName] = MyLocalStorage('username', '');
  const [translation, setTranslation] = MyLocalStorage('translations', []);

  const inputValue = useRef(null);
  const inputwrap = useRef(null);
  const inputwhitewrap = useRef(null);

  const addValue = () => {
   
    /**Make sure the input is clean */
    let cleanValue = inputValue.current.value.replace(/[^a-zA-Z ]/g, "");
    inputValue.current.value = cleanValue;

    /**Create object to be stored in localStorage */
    if (inputValue.current.value && inputValue.current.placeholder === "What's your name?") {

      setName(inputValue.current.value);
      /**Empty input value and change placeholder text */
      inputValue.current.value = "";
      inputValue.current.placeholder = "Time to translate"

      /**Animate/fade background out on input wrappers */
      inputwrap.current.classList.toggle("nobg1");
      inputwhitewrap.current.classList.toggle("nobg2");

      /**Tell header to animate */
      passToHeader()
    }

    if (inputValue.current.value && inputValue.current.placeholder === "Time to translate") {
      /**Save translations */
      setTranslation([SaveTranslations(inputValue.current.value)])
      /**Pass input string to outputbox /translator */
      passToOutPutBox(inputValue.current.value)
    }

  }

  return (
    <div>
      {/* only show profile if you entered a name */}
      {name.length > 0 && <Profile name={name} />}
      <main>
        <div ref={inputwrap} className="inputwrap">
          <div ref={inputwhitewrap} className="inputwhitewrap">
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