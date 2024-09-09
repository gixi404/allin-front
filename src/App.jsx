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
import { ADMIN_PATH } from "./utils/consts";
import { useState } from "react";

function App() {
  const [admin, setAdmin] = useState("");
  const soyGixi = admin == "garnacho";

  if (location.hostname == "localhost") {
    return (
      <Layout>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/location" component={Location} />
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/success" component={Success} />
          <Route path="/cart" component={Cart} />
          <Route path={ADMIN_PATH} component={Admin} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Layout>
    );
  } else
    return (
      <Layout>
        <input
          type="text"
          value={admin}
          onChange={e => setAdmin(e.target.value)}
        />
        <Switch>
          <Route path="/" component={soyGixi ? Home : NotFound} />
          <Route path="/products" component={soyGixi ? Products : NotFound} />
          <Route path="/location" component={soyGixi ? Location : NotFound} />
          <Route path="/aboutus" component={soyGixi ? AboutUs : NotFound} />
          <Route path="/success" component={soyGixi ? Success : NotFound} />
          <Route path="/cart" component={soyGixi ? Cart : NotFound} />
          <Route path={ADMIN_PATH} component={soyGixi ? Admin : NotFound} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Layout>
    );
}

export default App;
