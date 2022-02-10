import { useRef } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomeNew from "./screens/Home";
import WhyUs from "./screens/WhyUs";
import Pricing from "./screens/Pricing";
import HowItWorks from "./screens/HowItWorks";
import Solutions from "./screens/Solutions";
import Help_Advice from "./screens/Help_Advice";

function App() {
  const top = useRef();
  const onClickScrollTo = () => {
    top.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Router>
      <div>
        <Navbar ref={top} />
        {/* <HomeNew /> */}
        <Switch>
          <Route exact path="/">
            <HomeNew />
          </Route>
          <Route path="/why-us">
            <WhyUs />
          </Route>
          <Route path="/pricing">
            <Pricing />
          </Route>
          <Route path="/how-it-works">
            <HowItWorks />
          </Route>
          <Route path="/solutions">
            <Solutions />
          </Route>
          <Route path="/help-and-advice">
            <Help_Advice />
          </Route>
          {/* <Route path="*">
            <h1>Not found</h1>
          </Route> */}
        </Switch>
        <Footer scrollToTop={onClickScrollTo} />
      </div>
    </Router>
  );
}

export default App;
