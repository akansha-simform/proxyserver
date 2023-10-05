import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState<any>(null);

  const callSearchAPI = () => {
    fetch("/search?q=javascript")
      .then((resp) => {
        setData(resp);
        console.log(resp);
        console.log("======success=======");
      })
      .catch((err) => {
        console.log("======failure=======");
        setData(err);
        console.log(err);
      });
  };

  const callTagAPI = () => {
    fetch("/tags?q=reactjs")
      .then((resp) => {
        setData(resp);
        console.log(resp);
        console.log("======success=======");
      })
      .catch((err) => {
        console.log("======failure=======");
        setData(err);
        console.log(err);
      });
  };

  const callInvalideSearchAPI = () => {
    fetch("https://www.google.com/search?q=javascript")
      .then((resp) => {
        setData(resp);
        console.log(resp);
        console.log("======success=======");
      })
      .catch((err) => {
        console.log("======failure=======");
        setData(err);
        console.log(err);
      });
  };
  return (
    <div key={data}>
      <h1>Invalid Request</h1>
      <button onClick={callInvalideSearchAPI}>Call Search API</button>
      <br />
      <br />
      <h1>Valid Request</h1>
      <button onClick={callSearchAPI}>Call Search API</button>
      <button onClick={callTagAPI}>Call Tags API</button>

      <pre>{JSON.stringify(data?.url)}</pre>
    </div>
  );
}

export default App;
