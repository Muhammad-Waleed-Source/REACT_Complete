import React, { useEffect, useState } from "react";

function Resize() {
  const [windowWidth, setwindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setwindowWidth(window.innerWidth);

    console.log("Event listener added");

    window.addEventListener("resize", handleResize);

    return () => {
      console.log("Event listener removed");
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <h1>Window width: {windowWidth}px</h1>
    </div>
  );
}

export default Resize;
