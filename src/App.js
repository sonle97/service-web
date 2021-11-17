import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ButtonScrollOnTop from "./components/ButtonScrollOnTop";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Service";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import ServiceDetail from "./pages/ServiceDetail";
import NotFound from "./pages/404";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/dich-vu" exact component={Services} />
        <Route path="/dich-vu/:slug" exact component={ServiceDetail} />
        <Route path="/san-pham/:slug" exact component={Products} />
        <Route path="/san-pham/:slug/:id" exact component={ProductDetail} />
        <Route path="/tin-tuc" exact component={Blog} />
        <Route path="/lien-he" exact component={Contact} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
      <ButtonScrollOnTop />
    </Router>
  );
}

export default App;
