import { useEffect } from "react";
import YouTubeButton from "./components/YouTubeButton";
import { useStore } from "./store";

function App() {
  const { bears, increasePopulation } = useStore();

  useEffect(() => {
    document.body.classList.add("bg-background");
    return () => {
      document.body.classList.remove("bg-background");
    };
  }, []);
  return (
    <div className="flex justify-center bg-[#0f0f0f]">
      <div className="flex flex-wrap justify-evenly items-center h-screen w-[80%]">
        <YouTubeButton />
        <YouTubeButton />
        <YouTubeButton />
        <YouTubeButton />
        <YouTubeButton />
        <YouTubeButton />
        <YouTubeButton />
        <YouTubeButton />
      </div>
    </div>
  );
}

export default App;
