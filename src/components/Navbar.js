import React,{useState} from "react";
import {FaBars, FaTimes} from 'react-icons/fa';
import {Link} from "react-scroll";

const Navbar = () => {

  const [nav, setNav] = useState(false);
  
  const links = [
    {
      id: 1,
      link: 'home'
    },
    {
      id: 2,
      link: 'about'
    },
    {
      id: 3,
      link: 'portfolio'
    },
    {
      id: 4,
      link: 'expereince'
    },
    {
      id: 5,
      link: 'contact'
    },
  ];

  return (

   
    
  <div className="flex justify-between items-center w-full h-20 text-white px-4 fixed bg-black">
     {/* <FaBars />  */}
    <div>
      <h1 className="text-5xl font-signature ml-2">Nandhakumar</h1>
    </div>
    <ul className="hidden md:flex">
 
    {links.map(({id, link}) => (
<li key={id} 
className="px-4 cursor-pointer capitalize font-medium 
text-white hover:scale-105 duration-200">

<Link to={link} smooth duration={500}>
  {link}
  </Link>

</li>
    ))}

     </ul>


     <div
      onClick={() => setNav (!nav)} 
      className="cursor-pointer pr-4 z-10 text-white md:hidden"
      >
       {nav ? <FaTimes Size={30} /> : <FaBars Size={30} />}
     </div>

   {nav  && (

<ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white">
{links.map(({id, link}) => (
<li key={id} 
className="px-4 cursor-pointer capitalize py-6 text-4xl">

<Link onClick={() => setNav (!nav)}
 to={link} smooth duration={500}>
  {link}
  </Link>


</li>
))}
</ul>

   ) }

   
  </div>
  );
};

export default Navbar;
