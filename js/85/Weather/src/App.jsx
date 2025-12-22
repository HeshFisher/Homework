import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Component } from "react";
import HaveWeather from "./HaveWeather";
import NoWeather from "./NoWeather";

export default class App extends Component {
  key = "f7d3aa7cfebe0d3e63a9a6cb8ee6be0d";

  state = {
    zip: "11219",
    // weather: {},
  };

  async componentDidMount() {
    try {
      const r = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?zip=${this.state.zip}&appid=${this.key}&units=imperial`
      );
      const weatherData = await r.json();
      if (!r.ok) {
        throw new Error(
          `${r.status} - ${r.statusText} - ${weatherData.message}`
        );
      }

      this.setState({
        weather: {
          name: weatherData.name,
          temp: weatherData.main.temp,
          icon: `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`,
          description: weatherData.weather[0].description,
        },
      });
    } catch (e) {
      console.error(e);
    }
  }

  render() {
    return (
      <>
        <div className="container text-center">
          <div className="row justify-content-end">
            <div className="col-3 col-md-2">
              <input id="zip" value={this.state.zip} readOnly />
            </div>
          </div>

          {!this.state.weather ?
            <NoWeather />
           :
            <HaveWeather weather={this.state.weather} />
          }
        </div>
      </>
    );
  }
}
