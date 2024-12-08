import "./App.css";
import { Button } from "./components/ui/button";

function App() {
  const handleClick = () => {
    console.log("Clicked");
  };

  return (
    <>
      <div className=" min-h-screen flex justify-center items-center ">
        <Button onClick={handleClick}> Redux To Do </Button>
      </div>
    </>
  );
}

export default App;
