import React from "react";
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { AddItem } from "../redux/cartSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const Card = ({ name, id, type, image, price }) => {
  const dispatch = useDispatch();
  return (
    <div className="w-[280px] h-[350px]  bg-white p-2 flex flex-col gap-3 rounded-lg shadow-lg   hover:border-2 border-green-400 ">
      <div className="w-[100%] h-[60%] rounded-lg overflow-hidden">
        <img src={image} alt="" className="object-cover" />
      </div>
      <div className="text-xl font-semibold">{name}</div>
      <div className="w-full flex justify-between items-center ">
        <div className="text-md font-bold text-green-600">Rs {price}</div>
        <div className="flex justify-center items-center gap-2 text-green-600 font-semibold">
          {type === "veg" ? <LuLeafyGreen /> : <GiChickenOven />}
          <span>{type}</span>
        </div>
      </div>
      <button
        className="w-full bg-green-400 p-2 rounded-lg hover:bg-green-500 text-white"
        onClick={() =>
          {dispatch(
            AddItem({ id: id, name: name, price: price, image: image, qty: 1 })
            
          )
          toast.success("Item Added..");
        }
        }
      >
        Add to Dish
      </button>
    </div>
  );
};

export default Card;
