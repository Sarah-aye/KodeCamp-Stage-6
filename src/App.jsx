import "./App.css";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import TopHeader from "./components/topHeader";

function App() {
  return (
    <div>
      <TopHeader />
      <br />
      <div className="">
        <Header />
        <hr className="w-full h-0 absolute top-30" />
        <LandingPage />
      </div>
    </div>
  );
}

export default App;
