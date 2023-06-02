import { Icon } from "@components/shared/Icon/Icon";
import { DefaultModal } from "@components/shared/Modal/DefaultModal/DefaultModal";
import { useAuthContext } from "@context/AuthContext/AuthContext";
import { useState } from "react";

export const PowerButton = () => {
  const { user, onLogout } = useAuthContext();

  const [isVisible, setIsVisible] = useState(false);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleOpen = () => {
    setIsVisible(true);
  };

  const handlePowerOff = () => {
    console.log("power off");
  };

  const handleLogOut = () => {
    setIsVisible(false);
    onLogout();
  };

  return (
    <>
      <div
        onClick={handleOpen}
        className="flex justify-center items-center rounded-full bg-green-300 cursor-pointer w-[55px] h-[55px] m-3"
      >
        <Icon icon="power-off" className="w-7" />
      </div>

      <DefaultModal isVisible={isVisible} onClose={handleClose}>
        <div className="flex flex-col gap-y-4 rounded-lg p-8">
          <div
            onClick={handlePowerOff}
            className="flex items-center p-4 gap-x-2 min-w-[200px] rounded-xl bg-slate-300 cursor-pointer"
          >
            <Icon icon="power-off" className="w-5 mr-2" />
            <span>Power Off</span>
          </div>

          {user && (
            <div
              onClick={handleLogOut}
              className="flex items-center p-4 gap-x-2 rounded-xl bg-slate-300 cursor-pointer"
            >
              <Icon icon="log-out" className="w-5 mr-2" />
              <span>Log Out</span>
            </div>
          )}
          <div
            onClick={handleClose}
            className="flex items-center p-4 gap-x-2 rounded-xl bg-slate-300 cursor-pointer"
          >
            <span className="ml-7">Cancel</span>
          </div>
        </div>
      </DefaultModal>
    </>
  );
};
