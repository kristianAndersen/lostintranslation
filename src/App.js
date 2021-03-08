import './App.css';

import React, { useRef, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Appheader from './components/AppHeader'
import ProfilePage from './components/ProfilePage'
import Profile from './components/Profile';
//import Home from './components/Home'
import Outputbox from './components/OutPutbox'
import Inputbar from './components/InputBar'
import InputTranslation from './components/InputTranslation'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { faArrowAltCircleRight, faKeyboard } from '@fortawesome/free-solid-svg-icons'

library.add(fab, far, faArrowAltCircleRight, faKeyboard)

function App() {

      const headerRef = useRef();
      const outputbox = useRef();
      const profilepageRef = useRef();

      //using forwardRef to pass information from child component to child component
      function passToHeader() {
            /**Tell header to Animate */
            headerRef.current.shrinkHeader()
      }

      function passToOutPutBox(strTotranslate) {
            /**send input value to translation */
            outputbox.current.translate(strTotranslate);
      }

      function passToProfile(translation) {
            /**send translated value to profile */
            profilepageRef.current.updateList(translation)
      }

      return (
            <div>

                  <Router>
                        <Appheader ref={headerRef} />
                        <ProfilePage ref={profilepageRef} />
                        <Profile />
                        <Switch>
                              <Route exact path="/" component={() => <Inputbar passToHeader={passToHeader} />} />
                              <Route path='/translate'>
                                    <Fragment>
                                          <InputTranslation passToOutPutBox={passToOutPutBox} passToProfile={passToProfile} />
                                          <Outputbox ref={outputbox} />
                                    </Fragment>
                              </Route>
                        </Switch>
                  </Router>

            </div>
      );


}

export default App;