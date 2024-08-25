import propTypes from "prop-types";
import GoToCart from "./buttons/GoToCart";
import WhatsAppBtn from "./buttons/WhatsAppBtn";
import Footer from "./Footer";
import Header from "./Header";

function Layout({ children }) {
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
