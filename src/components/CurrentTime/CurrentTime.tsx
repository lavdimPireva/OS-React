import React, { useEffect, useState } from "react";

const CurrentTime: React.FC = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const date = now.toLocaleDateString();
      const time = now.toLocaleTimeString();
      setCurrentTime(`${date} - ${time}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="font-bold text-xs cursor-pointer">{currentTime}</span>
  );
};

export default CurrentTime;
