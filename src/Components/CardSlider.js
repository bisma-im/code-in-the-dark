import React from "react";
import Slider from "react-slick";
import brainstorm from '../../src/assets/img/brainstorm.gif';
import catcomputer from '../../src/assets/img/cat-computer.gif';
import evaluation from '../../src/assets/img/evaluation.gif';
import analyze from '../../src/assets/img/analyze.gif';

const CardSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const cards = [
    {
      id: 1,
      image: analyze,
      title: "Analyze",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
    {
      id: 2,
      image: brainstorm,
      title: "BrainStorm",
      description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
    {
      id: 3,
      image: catcomputer,
      title: "Code",
      description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
    {
      id: 4,
      image: evaluation,
      title: "Evaluation",
      description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
  ];

  return (
    <div className="w-full px-4 py-10 bg-transparent">
      <Slider {...settings}>
        {cards.map((card) => (
          <div key={card.id} className="p-4">
            <div className="bg-transparent shadow-lg rounded-lg overflow-hidden relative group transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-[500px] object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="p-4 absolute bottom-0 text-start text-lg text-purple-600 bg-black bg-opacity-90 backdrop-blur-sm">
                <h3 className="text-lg font-bold">{card.title}</h3>
                <p
                  className="text-sm pt-2 text-gray-600 overflow-hidden transition-all duration-300 ease-in-out max-h-12 group-hover:max-h-[500px]"
                  style={{
                    lineClamp: 3,
                  }}
                >
                  {card.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardSlider;
