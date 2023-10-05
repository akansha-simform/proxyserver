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

  const callSurveyAPI = () => {
    fetch("/survey?q=reactjs")
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
      <h1>Valid Request</h1>

      <button onClick={callSearchAPI}>Call Search API</button>
      <button onClick={callSurveyAPI}>Call Survey API</button>

      <pre>{JSON.stringify(data?.url)}</pre>
    </div>
  );
}

export default App;
