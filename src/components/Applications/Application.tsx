import { Icon } from "@components/shared/Icon/Icon";
import { IconDefinition } from "@components/shared/Icon/Icon.generated";
import { WindowType } from "@context/WindowContext/WindowContext";

export type ApplicationProps = {
  name: string;
  type: WindowType;
  icon: IconDefinition;
};

type Props = ApplicationProps & {
  onDoubleClick: () => void;
};

export const Application = (props: Props) => {
  return (
    <div
      className="flex flex-col cursor-pointer"
      onDoubleClick={props.onDoubleClick}
    >
      <div className="w-[90px] h-[90px] rounded-[50px] bg-gray p-7 flex items-center justify-center shadow-md">
        <Icon icon={props.icon} className="w-full" />
      </div>
      <h2 className="text-base ml-2 ">{props.name}</h2>
    </div>
  );
};
