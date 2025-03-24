import { BrowserRouter as Router, Routes, Route } from "react-router";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Tags from "./pages/Tags";
import Settings from "./pages/Settings";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/posts" element={<Posts />} />
          <Route path="/tags" element={<Tags />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
