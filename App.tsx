import { BrowserRouter, Routes, Route } from "react-router";
import { IntroPage } from "./intro_page/IntroPage";
import { Content } from "./content/Content";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/more" element={<Content />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
