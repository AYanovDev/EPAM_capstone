import { BrowserRouter, Routes, Route } from "react-router";
import { IntroPage } from "./intro_page/IntroPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/more" element={null} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
