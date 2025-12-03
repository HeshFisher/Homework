import './App.css';
import Address from './Address';

function App() {
  return (
    <>
      <Address
        address="1521"
        street="57th Street"
        city="Brooklyn"
        state="New York"
        zip="11219"
      />
      <h4>{new Date().toLocaleString()}</h4>
    </>
  );
}

export default App;
