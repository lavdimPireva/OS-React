import Browser from "@components/Applications/Browser/Browser";
import Camera from "@components/Applications/Camera/Camera";
import Doucments from "@components/Applications/Documents/Doucments";
import News from "@components/Applications/News/News";
import Preferences from "@components/Applications/Preferences/Preferences";
import { WindowType } from "@context/WindowContext/WindowContext";
import { DefaultModal } from "../DefaultModal/DefaultModal";
import { Gallery } from "@components/Applications/Gallery/Gallery";

interface Props {
  isVisible: boolean;
  onClose: () => void;
  component: WindowType | null;
}

const WindowComponents: { [key in WindowType]: React.FunctionComponent<{}> } = {
  news: News,
  camera: Camera,
  browser: Browser,
  gallery: Gallery,
  folder: Doucments,
  preference: Preferences,
};

export const WindowModal = ({ isVisible, onClose, component }: Props) => {
  const Component = component ? WindowComponents[component] : () => <></>;

  return (
    <DefaultModal isVisible={isVisible} onClose={onClose}>
      <div className="flex w-full h-full max-h-[800px] max-w-[1400px]">
        <div className="bg-gray-400 w-full h-full overflow-hidden rounded-xl flex flex-col">
          <div className="w-full h-5 px-[3px] flex items-center justify-end">
            <div
              className="w-5 h-5 cursor-pointer rounded-full bg-red-500 flex justify-center items-center"
              onClick={onClose}
            >
              <span className="font-bold  ">x</span>
            </div>
          </div>
          <Component />
        </div>
      </div>
    </DefaultModal>
  );
};
