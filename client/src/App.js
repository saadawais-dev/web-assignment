import "./App.css";
import NavBar from "./components/navbar";
import CovidTips from "./components/CovidTips";
import CreateEvent from "./components/createEvent";
import WhyUseEventRAy from "./components/WhyUseEventRay";
import Integration from "./components/integrations";
import Features from "./components/features";
import ContactUs from "./components/contactUs";
import BottomBar from "./components/bottomBar";
function App() {
  return (
    <div className="main">
      <NavBar></NavBar>
      <CovidTips></CovidTips>
      <CreateEvent></CreateEvent>
      <WhyUseEventRAy></WhyUseEventRAy>
      <Integration></Integration>
      <Features></Features>
      <ContactUs></ContactUs>
      <BottomBar></BottomBar>
    </div>
  );
}

export default App;
