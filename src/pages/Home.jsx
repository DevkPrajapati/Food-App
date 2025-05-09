import React, { useContext, useState } from "react";
import Nav from "../components/Nav";
import Catagories from "../Catagories";
import Card from "../components/Card";
import { dataContext } from "../Context/UserContext";
import { IoCloseSharp } from "react-icons/io5";
import Card2 from "../components/Card2";
import { useSelector } from "react-redux";

const Home = () => {
  let { cat, setCat, input, setInput, showCart, setShowCart } =
    useContext(dataContext);
  const [currCat, setCurrCat] = useState("All");
  const items = useSelector(state => state.cart);  


  let subtotal = items.reduce((total, item) => total+item.qty*item.price,0)
  let deliveryFee = 20
  let tax = subtotal*0.5/100
  let total = Math.floor(subtotal+deliveryFee+tax)


  return (
    <div className="w-full min-h-screen bg-gray-200 ">
      <Nav />
      {!input ? (
        <div className="flex flex-wrap justify-center items-center gap-6 w-full">
          {Catagories.map((item) => (
            <div
              className="w-[130px] h-[130px] bg-white flex flex-col items-star justify-center px-5 gap-3 text-md font-semibold text-gray-600 rounded-lg shadow-lg cursor-pointer hover:bg-green-200 transition-all duration-200"
              onClick={() => setCurrCat(item?.name)}
            >
              {item.icon}
              {item.name}
            </div>
          ))}
        </div>
      ) : null}

      <div className="w-full flex flex-wrap justify-center items-center gap-5 pt-7 pb-5">
        {
          cat.length>1 ? cat
          .filter((item) =>
            currCat == "All"
              ? item
              : item.food_category.toLowerCase() == currCat.toLowerCase()
          )
          .map((item) => {            
            return (
              <Card
                id={item.id}
                name={item.food_name}
                price={item.price}
                type={item.food_type}
                image={item.food_image}
              />
            );
          }) : <div className="text-2xl font-semibold text-green-600 ">Not Dish Found</div>
        }
        
      </div>
      <div
        className={`w-full md:w-[40vw] h-[100%] top-0 right-0 bg-white p-6 fixed overflow-auto ${
          showCart ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500`}
      >
        <header className="w-full flex justify-between items-center ">
          <span className="text-green-400 text-[18px] font-semibold">
            Order Now
          </span>
          <IoCloseSharp
            className="text-green-400 text-[25px] font-semibold cursor-pointer hover:text-gray-600"
            onClick={() => setShowCart(false)}
          />
        </header>
        {
          items.length > 0 ? 
          <>
        <div className="w-full flex flex-col  mt-5 gap-6">
          {items.map((item) => {
            
            return (
              <Card2
                name={item.name}
                price={item.price}
                image={item.image}
                qty={item.qty}
                id={item.id}
              />
            );
          })}
        </div>
        <div className="w-full border-t-2 border-b-2 border-gray-400 mt-7">
          <div className="w-full flex justify-between items-center pt-3">
            <span className="text-gray-600">Subtotal</span>
            <span className="text-green-500 font-semibold">Rs {subtotal}/-</span>
          </div>
          <div className="w-full flex justify-between items-center pt-5 ">
            <span className="text-gray-600">DeliveryFee</span>
            <span className="text-green-500 font-semibold">Rs {deliveryFee}/-</span>
          </div>
          <div className="w-full flex justify-between items-center pt-5 pb-3">
            <span className="text-gray-600">Tax</span>
            <span className="text-green-500 font-semibold">Rs {tax}/-</span>
          </div>
        </div>
        <div className="w-full flex justify-between items-center pt-5">
            <span className="text-gray-600 text-xl">Total</span>
            <span className="text-green-500 text-xl font-semibold">Rs {total}/-</span>
          </div>
        <button className='w-full bg-green-400 p-2 mt-3 rounded-lg hover:bg-green-500 text-white'>Place Order</button>
        </> : <div className="text-center text-xl font-semibold  text-green-500 mt-8">Empty Order...</div>
        }
        
      </div>
    </div>
  );
};

export default Home;
