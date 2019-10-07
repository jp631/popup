import React from 'react';
import './popup.css';

class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'No Title Yet',
      message: "Put your Message here!",
      location: 'location1',
      showIt: true
    }
  }
  /* title for popUp */
   {/* message to be display in popup  */}
          {/* this will be the id and place it in the div thst will trigger the popup this is not really nessary I am trying to elimanate it */}
            {/* this will be false but when it will be true when popup need to be shown */}
  componentDidMount() {
    this.setState({title: this.props.title,
                  message: this.props.message,
                  showIt: this.props.showIt,
                  isPopup: this.props.isPopup})
  }

  render() {
    const visible = (value, opacity) => {
      const popupId = document.getElementById('ThePopup')
      popupId.style.visibility = value;
      popupId.style.opacity = opacity;
    }

    const openPopup = () => {
      visible('visible', '1');
    }

    const closePopUp = () => {
      visible('hidden', '0');
    }

    return (<div>
      <div className='box'>
        <button className='button' href='#ThePopup' onClick={openPopup}>Click Me</button>
      </div>

      {/* the pop up window start here  */}
      <div id='ThePopup' className="overlay">
        <div className="popup">
          <h2>{this.state.title}
          </h2>
          <hr/>
          <a className="close" id="cross" onClick={closePopUp} href="#">&times;</a>
          <div className="content">
            <p>{this.state.message}</p>
          </div>
        </div>
      </div>
    </div>);
  }
}
export default Popup;
