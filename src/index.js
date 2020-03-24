import { useState } from "react";
import html2canvas from "html2canvas";

const useScreenshot = ref => {
  const [image, setImage] = useState(null);

  const takeScreenShot = () => {
    html2canvas(ref.current).then(canvas => {
      const croppedCanvas = document.createElement("canvas");
      const croppedCanvasContext = croppedCanvas.getContext("2d");

      // init data
      const cropPositionTop = 0;
      const cropPositionLeft = 0;
      const cropWidth = canvas.width;
      const cropHeight = canvas.height;

      croppedCanvas.width = cropWidth;
      croppedCanvas.height = cropHeight;

      croppedCanvasContext.drawImage(canvas, cropPositionLeft, cropPositionTop);

      const image = croppedCanvas.toDataURL();

      setImage(image);
    });
  };

  return [image, takeScreenShot];
};

export { useScreenshot };
