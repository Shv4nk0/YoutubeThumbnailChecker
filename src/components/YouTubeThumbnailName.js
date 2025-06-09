import { useRef, useState } from "react";

const MAX_CHARS = 70;

const YouTubeThumbnailName = () => {
	const [textInput, setTextInput] = useState("");
	const [nameInput, setNameInput] = useState("");
	const [isFocused, setIsFocused] = useState(false);
	const inputRef = useRef(null);

	const handleTextInputChange = (event) => {
		let value = event.target.value;
		if (value.length > MAX_CHARS) {
			value = value.slice(0, MAX_CHARS);
		}
		setTextInput(value);
	};

	const handleDivClick = () => {
		inputRef.current.focus();
	};

	// Добавляем ... если текст максимально длинный
	const displayText =
		textInput.length === MAX_CHARS
			? textInput.slice(0, MAX_CHARS - 3) + "..."
			: textInput || "Thumbnail Name";

	return (
		<div className="font-roboto">
			<div className="flex max-w-[390px] flex-wrap">
				<div className="h-full">
					<div className="h-10 w-10 rounded-full bg-[#535353]  mt-3"></div>
				</div>
				<div
					className={`
                        mt-2 px-2 py-1 w-[350px] h-[52px] bg-transparent font-medium text-white text-base relative
                        transition-colors duration-200
                        ${isFocused ? "text-red-400" : "text-white"}
                        hover:text-red-400 cursor-text
                    `}
					onClick={handleDivClick}
				>
					<input
						ref={inputRef}
						type="text"
						value={textInput}
						onChange={handleTextInputChange}
						maxLength={MAX_CHARS}
						className={`
                            absolute top-0 left-0 w-full h-full opacity-0 z-10 cursor-text
                            [caret-color:transparent] focus:[caret-color:transparent]
                        `}
						placeholder="Thumbnail Name"
						onFocus={() => setIsFocused(true)}
						onBlur={() => setIsFocused(false)}
						autoComplete="off"
					/>
					<div
						className={`
                            pointer-events-none w-full h-full
                            overflow-hidden text-ellipsis whitespace-normal
                            [display:-webkit-box] [WebkitLineClamp:2] [WebkitBoxOrient:vertical] leading-[25px]
                            ${isFocused ? "animate-caret" : ""}
                        `}
					>
						{displayText}
						{isFocused && (
							<span className="inline-block w-[1px] h-[22px] align-middle bg-red-400 animate-blink ml-0.5" />
						)}
					</div>
				</div>

				<div className="ml-12 text-sm text-[#9e9e9e]">
					<textarea
						value={nameInput}
						onChange={() => setNameInput((event) => event?.target?.value)}
						className={`
            w-[150px] h-[18px] bg-transparent font-medium text-white mb-[-4px] 
            transition-colors duration-200 outline-none border-none rounded scroll-none overflow-hidden
            hover:text-red-400 focus:text-red-400 cursor-text resize-none 
            placeholder:text-[#888]
        `}
						placeholder="Channel Name"
					/>
					<div>100k views • 10 min ago</div>
				</div>
			</div>
			<style>
				{`
                @keyframes blink {
                    0%, 49% { opacity: 1; }
                    50%, 100% { opacity: 0; }
                }
                .animate-blink {
                    animation: blink 1s steps(1) infinite;
                }
                `}
			</style>
		</div>
	);
};

export default YouTubeThumbnailName;
