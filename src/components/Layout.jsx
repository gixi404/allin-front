import { useDocumentTitle } from "@uidotdev/usehooks";
import propTypes from "prop-types";
import { Toaster } from "react-hot-toast";
import { useLocation } from "wouter";
import { ADMIN_PATH } from "../utils/consts";
import GoToCartBtn from "./buttons/GoToCartBtn";
import WhatsAppBtn from "./buttons/WhatsAppBtn";
import Footer from "./Footer";
import Header from "./Header";

function Layout({ children }) {
  const pathname = useLocation()[0];
  const isAdminPath = pathname == ADMIN_PATH;

  useDocumentTitle(`All In Informática ${isAdminPath ? "- Admin panel" : ""}`);

  if (isAdminPath)
    return (
      <>
        <Toaster
          position="top-right"
          reverseOrder={false}
          toastOptions={{ style: { maxWidth: "400px", whiteSpace: "nowrap" } }}
        />
        {children}
      </>
    );

  return (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{ style: { maxWidth: "400px", whiteSpace: "nowrap" } }}
      />
      <GoToCartBtn />
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
