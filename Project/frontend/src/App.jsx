import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch("/api/data")
  //     .then((response) => {
  //       if (response.ok) {
  //         return response.json();
  //       }
  //       throw new Error("Something went wrong");
  //     })
  //     .then((responseJson) => {
  //       console.log(responseJson, "fetch response");
  //       //setData(responseJson)
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // });

  useEffect(() => {
    axios
      .get("/api/data")
      .then((res) => setData(res.data))
      .catch((e) => console.log(e, "error"));
  });

  return (
    <div>
      {data.map((d) => (
        <div key={d.id}>
          <p>{d.id}</p>
          <p>{d.title}</p>
          <p>{d.content}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
