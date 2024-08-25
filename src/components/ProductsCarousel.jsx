import img1 from "/joystickps4-img.jpg";
import img3 from "/tinta-img.jpg";
import img2 from "/toner-img.jpg";
import ProductCarousel from "./ProductCarousel";
import { Link } from "wouter";

function ProductsCarousel() {
  return (
    <section className="w-full flex flex-col gap-y-8">
      <Link
        to="/products"
        className="hover:underline text-4xl font-bold tracking-tighter w-full text-center lg:text-start"
      >
        Ver más productos
      </Link>
      <ul className="flex flex-col lg:flex-row justify-between items-center w-full gap-y-6">
        <ProductCarousel
          img={img1}
          name="Joystick PS4"
          description="Alternativo"
          price={500}
        />
        <ProductCarousel
          img={img2}
          name="Toner 1060"
          description="Marca Magna"
          price={200}
        />
        <ProductCarousel
          img={img3}
          name="Tinta HP 667xl negra"
          description="Marca GNEISS"
          price={110}
        />
      </ul>
    </section>
  );
}

export default ProductsCarousel;
