import { useRef, useState } from "react";

const YouTubeButton = () => {
  const [backgroundImage, setBackgroundImage] = useState(null);
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
    inputRef.current.click(); // Нажатие на инпут при клике на компонент
  };

  return (
    <div>
      <div
        onClick={handleComponentClick}
        className="h-[200px] w-[350px]  hover:bg-slate-100 transition-colors rounded-xl absolute opacity-20"
      />
      <div
        className="flex justify-center items-center text-3xl font-bold underline h-[200px] w-[350px] rounded-xl bg-[#535353]  "
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
          style={{ display: "none" }} // Скрытие инпута
        />
      </div>
    </div>
  );
};

export default YouTubeButton;
