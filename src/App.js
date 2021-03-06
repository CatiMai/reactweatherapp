import "./App.css";
import Form from "./Form";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weatherApp-wrapper">
          <div className="weatherApp">
            <Form />
            <hr />
            <div className="Forecast">Hourly Forecast coming soon..</div>
          </div>
        </div>

        <small class="footer">
          <a
            href="https://github.com/CatiMai/reactweatherapp"
            target="_blank"
            rel="noreferrer noopener"
          >
            Open Source Code
          </a>{" "}
          by Caterina Maidhof
        </small>
      </div>
    </div>
  );
}

export default App;
