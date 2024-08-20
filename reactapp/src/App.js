import React from 'react';
import Welcome from './Components/Welcome';
import HelloWorld from './Components/HelloWorld';
import Greetings from './Components/Greetings';
import Department from './Components/Department';
import Counter from './Components/Counter';
import ToggleMessage from './Components/ToggleMessage';
import Sample from './Components/Sample';
import TwoWay from './Components/TwoWay';
import CallbackFunctions from './Components/CallbackFunctions';
import ConditionalRendering from './Components/ConditionalRendering';
import NameChange from './Components/NameChange';
function App() {
  return(
  <div>
   <Welcome/>
   <HelloWorld/>
   <Greetings name="Vijay Syam"/>
   <Department/>
   <Counter/>
   <ToggleMessage/>
   <Sample/>
   <TwoWay/>
   <CallbackFunctions/>
   <ConditionalRendering/>
   <NameChange/>
     </div>
  )
}
export default App;
