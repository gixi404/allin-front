import { Route, Switch } from "wouter";
import Layout from "./components/Layout";
import AboutUs from "./pages/AboutUs";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Location from "./pages/Location";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/location" component={Location} />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/cart" component={Cart} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Layout>
  );
}

export default App;
