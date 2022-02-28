import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Url from "./pages/Url/Url";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Url />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
