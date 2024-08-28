import propTypes from "prop-types";
import { useLocation } from "wouter";
import { ADMIN_PATH } from "../utils/consts";
import GoToCart from "./buttons/GoToCart";
import WhatsAppBtn from "./buttons/WhatsAppBtn";
import Footer from "./Footer";
import Header from "./Header";

function Layout({ children }) {
  const pathname = useLocation()[0];

  if (pathname == ADMIN_PATH) return children;

  return (
    <>
      <GoToCart />
      <Header />
      <WhatsAppBtn />
      {children}
      <Footer />
    </>
  );
}

export default Layout;

Layout.propTypes = {
  children: propTypes.node,
};
