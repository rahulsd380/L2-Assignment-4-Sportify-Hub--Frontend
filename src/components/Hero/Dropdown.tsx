import {
    FiEdit,
    FiChevronDown,
    FiTrash,
    FiShare,
    FiPlusSquare,
  } from "react-icons/fi";
  import { motion } from "framer-motion";
  import {useState } from "react";
  import { IconType } from "react-icons";

  interface OptionProps {
    text: string;
    Icon: IconType;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  }
  
  const StaggeredDropDown = () => {
    const [open, setOpen] = useState(true);
  
    return (
      <div className="z-50 bg-white">
        <motion.div animate={open ? "open" : "closed"} className="relative">
          <button
            onClick={() => setOpen((pv) => !pv)}
            className="flex items-center justify-between gap-2 px-4 py-4 w-full md:w-[300px] rounded-md bg-neutral-10 text-neutral-60 transition-colors"
          >
            <span className="font-semibold text-base">Our Best Categories</span>
            <motion.span variants={iconVariants}>
              <FiChevronDown />
            </motion.span>
          </button>
  
          <motion.ul
            initial={wrapperVariants.closed}
            variants={wrapperVariants}
            style={{ originY: "top", translateX: "-50%" }}
            className="flex flex-col gap-2 p-2 rounded-b-md bg-neutral-10 absolute top-[120%] left-[50%] overflow-hidden w-full h-[415px] md:w-[300px]"
          >
            <Option setOpen={setOpen} Icon={FiEdit} text="Cricket Gear" />
            <Option setOpen={setOpen} Icon={FiPlusSquare} text="Football Gear" />
            <Option setOpen={setOpen} Icon={FiShare} text="Basketball Gear" />
            <Option setOpen={setOpen} Icon={FiTrash} text="Tennis Gear" />
            <Option setOpen={setOpen} Icon={FiTrash} text="Running Gear" />
            <Option setOpen={setOpen} Icon={FiTrash} text="Gym & Fitness" />
            <Option setOpen={setOpen} Icon={FiTrash} text="Swimming Gear" />
            <Option setOpen={setOpen} Icon={FiTrash} text="Outdoor Sports" />
            <Option setOpen={setOpen} Icon={FiTrash} text="Winter Sports" />
            <Option setOpen={setOpen} Icon={FiTrash} text="Racket Sports" />
            <Option setOpen={setOpen} Icon={FiTrash} text="Team Sports" />
          </motion.ul>
        </motion.div>
      </div>
    );
  };
  
  const Option: React.FC<OptionProps> = ({ text, Icon, setOpen } ) => {
    return (
      <motion.li
        variants={itemVariants}
        onClick={() => setOpen(false)}
        className="flex items-center gap-2 w-full p-2 text-sm font-medium whitespace-nowrap rounded-md hover:bg-indigo-100 text-slate-700 hover:text-indigo-500 transition-colors cursor-pointer"
      >
        <motion.span variants={actionIconVariants}>
          <Icon />
        </motion.span>
        <span>{text}</span>
      </motion.li>
    );
  };
  
  export default StaggeredDropDown;
  
  const wrapperVariants = {
    open: {
      scaleY: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    closed: {
      scaleY: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.1,
      },
    },
  };
  
  const iconVariants = {
    open: { rotate: 180 },
    closed: { rotate: 0 },
  };
  
  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
      },
    },
    closed: {
      opacity: 0,
      y: -15,
      transition: {
        when: "afterChildren",
      },
    },
  };
  
  const actionIconVariants = {
    open: { scale: 1, y: 0 },
    closed: { scale: 0, y: -7 },
  };