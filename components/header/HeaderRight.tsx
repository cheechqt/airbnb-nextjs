import { TbWorld } from "react-icons/tb";
import { AiOutlineMenu } from "react-icons/ai";
import { HiUserCircle } from "react-icons/hi";

export const HeaderRight = () => {
  return (
    <div>
      <button>Airbnb your home</button>
      <button>
        <TbWorld />
      </button>
      <button>
        <AiOutlineMenu />
        <HiUserCircle />
      </button>
    </div>
  );
};
