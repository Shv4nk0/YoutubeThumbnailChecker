import { useEffect, useState } from "react";
import YouTubeButton from "./components/YouTubeButton";

function App() {
	const [buttonCount, setButtonCount] = useState(
		window.innerWidth < 1780 ? 6 : 8
	);

	useEffect(() => {
		const handleResize = () => {
			setButtonCount(window.innerWidth < 1780 ? 6 : 8);
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<div className="flex justify-center bg-[#0f0f0f]">
			<div className="flex flex-wrap justify-evenly items-center h-screen w-[80%]">
				{[...Array(buttonCount)].map((_, index) => (
					<YouTubeButton key={index} />
				))}
			</div>
		</div>
	);
}

export default App;
