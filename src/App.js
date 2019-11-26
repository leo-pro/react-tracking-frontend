import React, {Component} from 'react';

import FormTrack from './FormTrack';
import TrackingEvents from './components/TrackingEvents';


class App extends Component{

  render(){
    return (
      <div className="App">
        <FormTrack></FormTrack>
        <TrackingEvents></TrackingEvents>
      </div>
    );
  }
}

export default App;
