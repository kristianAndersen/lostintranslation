import React, { useRef, useEffect } from "react";
import '../App.css';
import './css/InputBar.css'

import './css/Profile.css'
/*using fontawesome for the icons */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import MyLocalStorage from './utils/MyLocalStorage'
import { SaveTranslations } from './utils/SaveTranslations'

const InputBar = ({ passToOutPutBox ,passToProfile}) => {

  const [translation, setTranslation] = MyLocalStorage('translations', []);

  const inputValue = useRef(null);
  const inputwrap = useRef(null);
  const inputwhitewrap = useRef(null);

  useEffect(() => {
  /**Animate/fade background out on input wrappers */
 inputwrap.current.classList.toggle("nobg1");
 inputwhitewrap.current.classList.toggle("nobg2");
  }, []);
  
  useEffect(() => {
    if (translation) {
        passToProfile(translation)
    }
  }, [translation]);

  const addTranslation = () => {
  
    /**Make sure the input is clean */
    let cleanValue = inputValue.current.value.replace(/[^a-zA-Z ]/g, "");
    inputValue.current.value = cleanValue;

    if (inputValue.current.value) {
    
      /**SaveTranslations (bad name) creates an array no longer than 10 items long newest first oldest last*/
      setTranslation([...SaveTranslations(inputValue.current.value)])
      /**Pass input string to outputbox /translator */
      passToOutPutBox(inputValue.current.value)
      
    }}

  return (
    <div>   
        <div ref={inputwrap} className="inputwrap">
          <div ref={inputwhitewrap} className="inputwhitewrap">
            <div className="formwrap">
              <div className="form-input">
                <label htmlFor="input x" className="iconl"><FontAwesomeIcon className="far fa-keyboard" icon='keyboard' /></label>
                <div className="iconr x" onClick={addTranslation}><FontAwesomeIcon className="fas fon" icon='arrow-alt-circle-right' /></div>
                <input ref={inputValue} id="input" type="text" className="input" placeholder="Translate?" pattern="[A-Za-z]" aria-label="Enter your translation here" required />
              </div>
            </div>
          </div>
        </div>
     
    </div>);
};

export default InputBar;