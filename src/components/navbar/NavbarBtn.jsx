import { Link } from "react-scroll";
import { LuArrowDownRight } from "react-icons/lu";

const NavbarBtn = () => {
  return (
    <>
       <a
  href="https://drive.google.com/file/d/1HyGSfO-3N_MY3yzIrqbqBNIdyHJygzk9/view?usp=sharing"
   target="_blank"
 
 className=" px-4 py-2 rounded-full text-xl font-bold font-body text-white border-cyan border flex items-center gap-1 bg-gradient-to-r  from-darkCyan to-orange transition-all duration-500 hover:scale-110 hover:border-orange cursor-pointer hover:shadow-cyanShadow"
>
       Download CV</a>
    
      {/* <div className="sm:hidden md:block">
        <LuArrowDownRight />
      </div> */}
    </>
  );
};

export default NavbarBtn;
