import React from 'react';
import Popup from './popUp/popup';
import './App.css';

class App extends React.Component  {

  render() {

    return (
    <div>
   <Popup title='Title Will Show Here' message='Right now this component is not reusable. in order for people
         to use they have to copy and paste the code and play with it. '/>
    </div>
    )
  }
};

export default App;
