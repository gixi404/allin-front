import CreateYourApp from "../components/CreateYourApp";
import Main from "../components/Main";
import SecurityCameras from "../components/SecurityCameras";
import cyberMonday from "/cybermonday.png";

function Home() {
  return (
    <>
      <img
        src={cyberMonday}
        alt="Cyber Monday"
        className="sm:w-[70%] sm:-mt-10 rounded-lg sm:h-[400px] h-[500px] px-4 sm:px-0"
      />
      <Main />
      <CreateYourApp />
      <SecurityCameras />
    </>
  );
}

export default Home;
