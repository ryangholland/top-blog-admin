import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1">
        <Header
          pageTitle="Home"
          userName="ryan"
          onLogout={() => console.log("Logging out...")}
        />
        {/* Main content goes here */}
      </div>
    </div>
  );
}

export default App;
