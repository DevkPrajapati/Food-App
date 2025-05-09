import React from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { DecrementQty, IncrementQty, RemoveItem } from "../redux/cartSlice";
import { toast } from "react-toastify";

const Card2 = ({ id, name, price, image, qty }) => {
  const dispatch = useDispatch();
  return (
    <div className="w-full h-[120px] bg-white rounded-lg shadow-lg p-2 flex justify-between  ">
      <div className="w-[60%] h-full p-1 flex  gap-3 ">
        <div className="w-[60%] h-full rounded-lg overflow-hidden">
          <img src={image} alt="" className="object-cover" />
        </div>
        <div className="w-[40%] h-full flex flex-col gap-4">
          <div className="text-md  font-semibold text-gray-700">{name}</div>
          <div className="w-[100px] h-[50px] border-2 flex justify-center items-center border-green-500 rounded-lg shadow-xl overflow-hidden">
            <button
              className="w-[30%] h-full bg-slate-50 hover:bg-slate-300"
              onClick={() => {
                qty > 1 ? dispatch(DecrementQty(id)) : 1;
              }}
            >
              -
            </button>
            <span className="w-[40%] h-full bg-slate-200 flex justify-center items-center">
              {qty}
            </span>
            <button
              className="w-[30%] h-full bg-slate-50 hover:bg-slate-300"
              onClick={() => dispatch(IncrementQty(id))}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div className="w-[40%] h-full flex flex-col justify-start items-end gap-4">
        <div className="text-lg text-green-400 font-semibold">Rs.{price}/-</div>
        <RiDeleteBin5Line
          className="text-2xl cursor-pointer text-red-700"
          onClick={() => {dispatch(RemoveItem(id))
            toast("Item Deleted...")
          }
            
          }
        />
      </div>
    </div>
  );
};

export default Card2;
