import { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    zip: '11219'
  }

 async fetchWeather(){
try {
      const r = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${this.state.zip}&appid=${key}&units=imperial&lang=he`);
      const weatherData = await r.json();
      if (!r.ok) {
        throw new Error(`${r.status} - ${r.statusText} - ${weatherData.message}`);
      }
      console.log(weatherData);
    } catch(e) {
      console.error(e);
      document.querySelector('#error').innerText = e.message;
    }
  }

  componentDidMount(){
    this.fetchWeather();
  }
  render() {
    return (
      <>
        <div className="row justify-content-end">
          <div className="col-3 col-md-2">
            <input id="zip" value={this.state.zip} readOnly/>
          </div>
        </div>

        <div className="row no-weather">
          <h2>enter zip to see weather</h2>
          <h5 id="error" className="text-danger"></h5>
        </div>

        <div className="row have-weather">
          <div>
            The weather in <span id="location"></span>
          </div>
          <img id="icon" />
          <div>
            <span id="temperature"></span> and <span id="description"></span>
          </div>
        </div>
      </>
    );
  }
}

export default App;
