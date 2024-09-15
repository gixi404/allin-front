import Section from "../components/Section";

function NotFound() {
  return (
    <Section sectionClass="flex-col justify-end items-center">
      <p className="text-9xl tracking-tight font-bold">404</p>
      <p className="text-4xl mt-4">Página no encontrada</p>
    </Section>
  );
}

export default NotFound;
