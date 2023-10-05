import { useState } from "react";
import "./App.css";

function Test() {
  const [data, setData] = useState<any>(null);

  const callSearchAPI = () => {
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

  const callSurveyAPI = () => {
    fetch("https://www.stackoverflow.com/survey?q=reactjs")
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
      <button onClick={callSearchAPI}>Call Search API</button>
      <button onClick={callSurveyAPI}>Call Survey API</button>

      <pre>{JSON.stringify(data?.url)}</pre>
    </div>
  );
}

export default Test;
