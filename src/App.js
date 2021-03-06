import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components
import Home from "./pages/Home";
import Enquiry from "./pages/Enquiry";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Flexitank from "./pages/Flexitank";

import ScrollToTop from "Layout/ScrollToTop";
function App() {
  return (
    <Router>
      <ScrollToTop />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/enquiry" exact component={Enquiry} />
            <Route path="/products" exact component={Products} />
            <Route path="/services" exact component={Services} />
            <Route path="/flexitank" exact component={Flexitank} />
          </Switch>
    </Router>
  );
}

export default App;
