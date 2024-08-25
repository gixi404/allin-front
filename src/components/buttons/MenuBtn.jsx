function MenuBtn({ setMenuIsOpen }) {
  return (
    <svg
      onClick={() => setMenuIsOpen(true)}
      viewBox="0 0 24 24"
      fill="none"
      className="inline-block lg:hidden w-8 h-8"
    >
      <path
        d="M4 6H20M4 12H20M4 18H20"
        stroke="#000000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default MenuBtn;

MenuBtn.propTypes = {
  setMenuIsOpen: () => {},
};
