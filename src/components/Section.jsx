import propTypes from "prop-types";
import { twJoin } from "tailwind-merge";

function Section({ children, sectionClass }) {
  return (
    <section
      className={twJoin(
        "w-[100vw] lg:w-full h-full lg:min-w-[1100px] min-h-[400px] flex justify-center items-start",
        sectionClass
      )}
    >
      {children}
    </section>
  );
}

export default Section;

Section.propTypes = {
  children: propTypes.node.isRequired,
  sectionClass: propTypes.string,
};
