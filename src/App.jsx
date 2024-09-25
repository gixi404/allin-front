import { Route, Switch } from "wouter";
import Layout from "./components/Layout";
import AboutUs from "./pages/AboutUs";
import Admin from "./pages/Admin";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Location from "./pages/Location";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";
import Success from "./pages/Success";
import TermsAndConditions from "./pages/TermsAndConditions";
import { ADMIN_PATH } from "./utils/consts";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/location" component={Location} />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/success" component={Success} />
        <Route path="/cart" component={Cart} />
        <Route path="/termsandconditions" component={TermsAndConditions} />
        <Route path={ADMIN_PATH} component={Admin} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Layout>
  );
}

export default App;
