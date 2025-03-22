import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      {/* Sidebar */}
      <div className="d-flex flex-grow-1">
        <Sidebar />
        <div className="flex-grow-1">
          {/* Header */}
          <Header pageTitle="Home" userName="ryan" onLogout={() => console.log("Logging out...")} />
          
          {/* Main content goes here */}
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;