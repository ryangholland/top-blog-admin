import Header from "./components/Header";

function App() {
  return (
    <>
      <Header
        pageTitle="Home"
        userName="ryan"
        onLogout={() => console.log("Logging out...")}
      />
    </>
  );
}

export default App;
