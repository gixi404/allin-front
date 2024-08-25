function Loader() {
  return (
    <div
      role="status"
      className="flex flex-row gap-2 w-full justify-center items-center"
    >
      <span className="w-6 h-6 rounded-full bg-orange-500 animate-bounce" />
      <span className="w-6 h-6 rounded-full bg-orange-500 animate-bounce [animation-delay:-.3s]" />
      <span className="w-6 h-6 rounded-full bg-orange-500 animate-bounce [animation-delay:-.5s]" />
    </div>
  );
}

export default Loader;
