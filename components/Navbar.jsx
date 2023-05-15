import React, {useState, useEffect} from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [color, setColor]= useState('transparent');
    const [textColor, setTextColor]= useState('white');

    useEffect(()=> {
        const changeColor=()=>{
        if(window.scrollY>=90){
            setColor('#ffffff');
            setTextColor('#000000');
        }
        else{
            setColor('transparent');
            setTextColor('#ffffff');
        }
    }; 
    window.addEventListener("scroll", changeColor);
    }, []);

    const handleNav= ()=>{
        setNav(!nav);
    }
  return (
    <div style={{backgroundColor:`${color}`}} className="fixed left-0 top-0 w-full z-10 ease-in duration-300">
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-black ">
        <div className="flex">
          <Link href="/">
            <img src="https://freepngimg.com/save/143195-feminism-free-clipart-hd/1200x1800" width="35" height="35" />
          </Link>
          <Link href="/">
            <h1 style={{textColor:`${color}`}} className="font-bold text-4xl pl-3 pt-1">LeadingLadies</h1>
          </Link>
        </div>
        
        <ul style={{textColor:`${color}`}} className="hidden sm:flex font-semibold">
          <li className="p-4 hover:scale-110">
            <Link href="/#Schemes">Schemes</Link>
          </li>
          <li className="p-4 hover:scale-110">
            <Link href="/aboutus">About Us</Link>
          </li>
          <li className="p-4 hover:scale-110">
            <Link href="/contact">Contact Us</Link>
          </li>
        </ul>
        <div onClick={handleNav} className="block sm:hidden z-10">
          {nav? <AiOutlineClose style={{textColor:`${color}`}} size={20}/>: <AiOutlineMenu style={{textColor:`${color}`}} size={20}/>}
          
        </div>
        <div className={nav? "sm:hidden absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center w-full h-screen bg-white text-center ease-in duration-300" : 
        "sm:hidden absolute top-0 bottom-0 left-[-100%] right-0 flex justify-center items-center w-full h-screen bg-white text-center ease-in duration-300"}>
          <ul>
            <li className="p-4 text-4xl hover: text-black-500">
              <Link href="/#Schemes">Schemes</Link>
            </li>
            <li className="p-4 text-4xl hover: text-black-500">
              <Link href="/aboutus">About Us</Link>
            </li>
            <li className="p-4 text-4xl hover: text-black-500">
              <Link href="/contactus">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
