import { Application } from "@components/Applications/Application";
import { useWindowContext } from "@context/WindowContext/WindowContext";
import { applications } from "@pages/MainScreen/lib/applications";

const ApplicationsSection = () => {
  const { openWindow } = useWindowContext();

  return (
    <div className="flex flex-col items-start">
      <div className="flex gap-x-4">
        {applications.map((item) => (
          <Application
            {...item}
            key={`${item.name} - ${item.icon}`}
            onDoubleClick={() => {
              openWindow(item.type);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ApplicationsSection;
