import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<>Home</>} />
          <Route path="dashboard" element={<>dashboard</>}>
            <Route path="project/:id" element={<>fdseewwrrrrrrrrrrrr</>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
