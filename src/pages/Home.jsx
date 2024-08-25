import CreateYourApp from "../components/CreateYourApp";
import Main from "../components/Main";
import ProductsCarousel from "../components/ProductsCarousel";
import SecurityCameras from "../components/SecurityCameras";

function Home() {
  return (
    <>
      <Main />
      <CreateYourApp />
      <SecurityCameras />
      <ProductsCarousel />
    </>
  );
}

export default Home;
