const BackGroundImage = () => {
  return (
    <div>
      <div
        className="bg-contain bg-no-repeat h-[100vh] w-[100vw] bg-center border-b-2 border-black"
        style={{
          backgroundImage: "url('image8.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></div>
    </div>
  );
};

export default BackGroundImage;
