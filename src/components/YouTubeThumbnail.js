import { useRef, useState } from "react";

const YouTubeThumbnail = () => {
	const [backgroundImage, setBackgroundImage] = useState(null);
	const [isDraggingOver, setIsDraggingOver] = useState(false); // Состояние для отслеживания перетаскивания
	const inputRef = useRef(null);

	const handleImageChange = (event) => {
		const file = event.target.files[0];
		if (file) {
			if (file.type === "image/jpeg" || file.type === "image/png") {
				const reader = new FileReader();
				reader.onload = () => {
					setBackgroundImage(reader.result);
				};
				reader.readAsDataURL(file);
			} else {
				alert("Пожалуйста, выберите файл JPG или PNG.");
			}
		}
	};

	const handleComponentClick = () => {
		inputRef.current.click();
	};

	const handleDrop = (event) => {
		event.preventDefault();
		setIsDraggingOver(false);

		const file = event.dataTransfer.files[0];

		if (file) {
			if (file.type === "image/jpeg" || file.type === "image/png") {
				const reader = new FileReader();
				reader.onload = () => {
					setBackgroundImage(reader.result);
				};
				reader.readAsDataURL(file);
			} else {
				alert("Пожалуйста, выберите файл JPG или PNG.");
			}
		}
	};

	return (
		<div
			className="relative"
			onDragOver={(e) => {
				e.preventDefault();
				setIsDraggingOver(true);
			}}
			onDragLeave={() => setIsDraggingOver(false)}
			onDrop={handleDrop}
		>
			{backgroundImage && (
				<div className="absolute bottom-1 right-1 p-1 py-0.5 bg-black rounded-md bg-opacity-80">
					<div className="text-white  text-xs font-roboto tracking-widest font-semibold">
						{" "}
						12:34{" "}
					</div>
				</div>
			)}
			<div
				onClick={handleComponentClick}
				className={`h-[220px] w-[392px]  hover:bg-slate-100 transition-colors rounded-xl absolute ${
					isDraggingOver ? "bg-gray-200" : "opacity-20"
				}`}
			/>
			<div
				className="flex justify-center items-center text-3xl font-bold underline h-[220px] w-[392px] rounded-xl bg-[#535353]"
				style={{
					backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
					backgroundSize: backgroundImage ? "cover" : "100% 100%",
					backgroundPosition: "center",
				}}
			>
				<input
					type="file"
					accept="image/jpeg, image/png"
					onChange={handleImageChange}
					ref={inputRef}
					style={{ display: "none" }}
				/>
			</div>
		</div>
	);
};

export default YouTubeThumbnail;
