

export default function Address(props) {
  console.log(props);

  const { address, street,city,state,zip } = props;

  return (
    <>
    <h1>Heshy Fisher</h1>
  <h2>I live at {address} {street} {city} {state} {zip}</h2>
  </>
);
}

