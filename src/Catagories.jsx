import { TiThSmall } from "react-icons/ti";
import { MdFreeBreakfast } from "react-icons/md";
import { LuSoup } from "react-icons/lu";
import { LiaPastafarianismSolid } from "react-icons/lia";
import { MdOutlineDinnerDining } from "react-icons/md";
import { GiFullPizza } from "react-icons/gi";
import { FaBurger } from "react-icons/fa6";

const Catagories = [
    {
        id: 1,
        name : 'All',
        icon : <TiThSmall className="w-[60px] h-[60px] text-green-600" />

    },
    {
        id: 2,
        name : 'Breakfast',
        icon : <MdFreeBreakfast className="w-[60px] h-[60px] text-green-600"/>

    },{
        id: 3,
        name : 'Soups',
        icon : <LuSoup className="w-[60px] h-[60px] text-green-600"/>

    },{
        id: 4,
        name : 'Pasta',
        icon : <LiaPastafarianismSolid className="w-[60px] h-[60px] text-green-600"/>

    },{
        id: 5,
        name : 'main_course',
        icon : <MdOutlineDinnerDining className="w-[60px] h-[60px] text-green-600"/>

    },{
        id: 6,
        name : 'Pizza',
        icon : <GiFullPizza className="w-[60px] h-[60px] text-green-600"/>

    },{
        id: 7,
        name : 'Burger',
        icon : <FaBurger className="w-[60px] h-[60px] text-green-600"/>

    }
]

export default Catagories;