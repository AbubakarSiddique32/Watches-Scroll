import React from "react";
import white from "../Images/white.png";
import gray from "../Images/gray.png";
import orange from "../Images/orange.png";
import yellow from "../Images/yellow.png";

const watchData = [
  {
    id: 1,
    imageUrl: orange,
    alt: "Orange Strap Watch",
    description: "Easy ways to stay connected. Motivating fitness metrics.",
  },
  {
    id: 2,
    imageUrl: yellow,
    alt: "Yellow Strap Watch",
    description: "Innovative health and safety features. Fresh strap colors.",
  },
  {
    id: 3,
    imageUrl: gray,
    alt: "Gray Strap Watch",
    description: "Apple Watch SE is packed with features at a feel-good price.",
  },
  {
    id: 4,
    imageUrl: white,
    alt: "Orange Strap Watch",
    description: "Easy ways to stay connected. Motivating fitness metrics.",
  },
];

const WatchShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % watchData.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + watchData.length) % watchData.length
    );
  };
  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold text-gray-900">
          A great deal to love
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
            illo nobis perferendis magnam eveniet tempora similique eum, soluta,
            maxime ad accusantium provident vitae cupiditate sint tempore,
            dolore ipsam nisi aliquid?
          </p>
        </h2>
        <p>ok</p>
        <p className="mt-4 text-lg text-gray-500">
          {watchData[currentIndex].description}
        </p>
      </div>

      <div className="flex justify-center mb-8">
        <div className="relative w-72 h-72 rounded-lg overflow-hidden shadow-lg">
          <img
            src={watchData[currentIndex].imageUrl}
            alt={watchData[currentIndex].alt}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="flex justify-center space-x-4">
        <button
          onClick={prevSlide}
          className="bg-white border border-gray-300 text-gray-800 rounded-full p-3 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="bg-white border border-gray-300 text-gray-800 rounded-full p-3 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default WatchShowcase;
