import { useState } from "react";
import { CardType } from "../types/card";

const Card = (props: CardType) => {
  const [show, setShow] = useState(false);

  return (
    <div
      className="w-[150px] h-[250px] cursor-pointer transition-transform duration-[0.6s]"
      onClick={() => setShow(!show)}
    >
      <div className={`relative perspective-1000 ${show ? "z-10" : "z-0"}`}>
        <div
          className={`backface-hidden perspective-1000 w-[150px] h-[250px] rounded-[10px] absolute shadow-[0_4px_8px_0_rgba(0,0,0,0.3)] transition-transform duration-[0.6s] ${show ? "transform rotate-y-180" : ""}`}
        >
          <img
            src="./images/back-card.png"
            className={`object-scale-down w-[150px] h-[250px]`}
          />
        </div>
        <div
          className={`backface-hidden perspective-1000 bg-white absolute p-2 rounded-[10px] flex flex-col gap-2 items-center shadow-[0_4px_8px_0_rgba(0,0,0,0.3)] transition-transform duration-[0.6s] ${!show ? "transform -rotate-y-180" : ""}`}
        >
          <img src={`${props.imageDir}`} alt="" />
          <h4>{`${props.name}`}</h4>
          <p className="text-center">{`${props.meaning}`}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
