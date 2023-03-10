import Home from "./pages/home/Home";
import Chart from "./pages/chart/Chart";
import Collection from "./pages/collection/Collection";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {                                       
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="chart" element={<Chart />} />
          </Route>

          <Route path="collectiom">
            <Route index element={<Collection />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
