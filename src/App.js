import "./styles.css";
function CurrentDate() {
  return <h2>{new Date().toLocaleDateString()}</h2>;
}
function HelloTo() {
  alert("Hello");
}

function Qprops(props) {
  return (
    <>
      <h2>{props.name}</h2>
      <p>{props.desc}</p>
    </>
  );
}

export default function App() {
  let date = new Date().toLocaleTimeString();
  let qName = "Волчанский волк";
  let qQuote = "Волk в цирке не выступает";
  return (
    <>
      <h1 className="title">Hello world</h1>
      <h1 className="title">{date}</h1>
      <CurrentDate />
      <Qprops name={qName} desc={qQuote} />
      <button onClick={HelloTo}>Скажи привет</button>
    </>
  );
}
