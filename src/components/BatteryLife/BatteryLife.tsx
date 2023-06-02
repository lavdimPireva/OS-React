import { Icon } from "@components/shared/Icon/Icon";
import React from "react";

const BatteryLife = () => {
  return (
    <div className="flex items-center px-5 mr-4 gap-x-1">
      <span className="text-xs font-bold cursor-pointer">75% </span>
      <Icon icon="battery-life" className="w-[20px]" />
    </div>
  );
};

export default BatteryLife;
