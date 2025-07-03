import React from "react";
import white from "../Images/white.png";
import gray from "../Images/gray.png";
import orange from "../Images/orange.png";
import yellow from "../Images/yellow.png";

const watches = [
  {
    color: "bg-orange-100",
    image: orange, // Replace with correct paths
  },
  {
    color: "bg-yellow-100",
    image: yellow,
  },
  {
    color: "bg-gray-100",
    image: gray,
  },
];

const WatchShowcase = () => {
  return (
    <section className="text-center px-4 py-16 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        A great deal to love Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Doloribus iste, dolor exercitationem est adipisci aperiam nesciunt
        vero accusantium totam reiciendis odio cumque nostrum quod beatae, nulla
        iure rerum et magni?
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-12">
        Easy ways to stay connected. Motivating fitness metrics. Innovative
        health and safety features. Fresh strap colours. Apple Watch SE is
        packed with features at a feel-good price. Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Praesentium deserunt neque similique
        excepturi tenetur dolores non iure vitae vel est nisi quibusdam
        voluptate, architecto, hic quam accusantium ipsam error quaerat.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas sed culpa
        vitae modi dolorum sit odit laudantium quo incidunt, debitis enim
        distinctio. Sed omnis aspernatur quis inventore est quo qui?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas sed culpa
        vitae modi dolorum sit odit laudantium quo incidunt, debitis enim
        distinctio. Sed omnis aspernatur quis inventore est quo qui?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas sed culpa
        vitae modi dolorum sit odit laudantium quo incidunt, debitis enim
        distinctio. Sed omnis aspernatur quis inventore est quo qui?
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta
        consequuntur nesciunt culpa possimus architecto enim quaerat pariatur
        similique ipsam autem asperiores, nisi debitis ipsum sint dolorem iure
        accusamus rerum quasi.
      </p>

      <div className="flex justify-center items-center gap-6 flex-wrap">
        {watches.map((watch, index) => (
          <div
            key={index}
            className={`rounded-full ${watch.color} p-6 w-[200px] h-[300px] flex justify-center items-center shadow-md`}
          >
            <img
              src={watch.image}
              alt={`watch-${index}`}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center gap-3">
        <button className="w-8 h-8 rounded-full border border-gray-400 flex justify-center items-center hover:bg-gray-200">
          ←
        </button>
        <button className="w-8 h-8 rounded-full border border-gray-400 flex justify-center items-center hover:bg-gray-200">
          →
        </button>
      </div>
    </section>
  );
};

export default WatchShowcase;
