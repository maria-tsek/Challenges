import "./styles.css";

export default function App() {
  return <Greeting name="Maria" />;
}

function Greeting({ name }) {
  // Check if the name is one of your coaches
  const isCoach = name === "Coach";

  return <div>{isCoach ? <p>Hello, Coach!</p> : <p>Hello, {name}!</p>}</div>;
}
