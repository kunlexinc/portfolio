import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
//import {DownloadBtn} from "./DownloadBtn";

const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-2xl sm:text-xl  uppercase text-lightGrey "
      >
       Fullstack Developer
      </motion.h2>
      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-[2.8rem] lg:text-6xl sm:text-4xl text-orange font-bold uppercase"
      >
        Kunle <br className="sm:hidden md:block" />
       Akintola
      </motion.h1>
      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-lg mt-4"
      >
        A deligent Fullstack developer  <br /> with a grasp of machine learning, <br />
      </motion.p>
      
  
     
    </div>
  );
};

export default HeroText;
