import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

export default function Layout({ children }) {
  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      <div className="d-flex flex-grow-1">
        <Sidebar />
        <div className="flex-grow-1">
          <Header
            pageTitle="Home"
            userName="ryan"
            onLogout={() => console.log("Logging out...")}
          />

          <main className="p-4">{children}</main>
        </div>
      </div>

      <Footer />
    </div>
  );
}
