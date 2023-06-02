import BatteryLife from "@components/BatteryLife/BatteryLife";
import CurrentTime from "@components/CurrentTime/CurrentTime";
import { useWindowContext } from "@context/WindowContext/WindowContext";

const MenuBar = () => {
  const { openWindow } = useWindowContext();

  return (
    <div className="flex justify-between items-center px-2 w-full  h-[25px] bg-grey">
      <span
        className="text-xs font-bold cursor-pointer"
        onClick={() => openWindow("preference")}
      >
        Preferences
      </span>
      <div className="flex p-1 items-center ">
        <BatteryLife />
        <CurrentTime />
      </div>
    </div>
  );
};

export default MenuBar;
