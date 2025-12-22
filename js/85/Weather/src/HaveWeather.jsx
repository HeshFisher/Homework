export default function HaveWeather(props) {
  const { weather } = props;
  const { name, temp, icon, description } = weather;
  return (
    <div className="row have-weather">
      <div>
        The weather in <span id="location">{name}</span>
      </div>
      <img className="m-auto" id="icon" src={icon} alt="Weather Icon" />
      <div>
        <span id="temperature">{temp}</span> and{" "}
        <span id="description">{description}</span>
      </div>
    </div>
  );
}
