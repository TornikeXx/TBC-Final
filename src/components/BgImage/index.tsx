import { useMediaQuery } from "@mui/material";
import Image1 from "../../assets/image 227.png";
import Image2 from "../../assets/image 226.png";

const BgImage = () => {
  const isTablet = useMediaQuery("(max-width:850px)");
  return (
    <div className="absolute inset-0">
      {isTablet ? (
        <img
          src={Image2}
          alt="Image"
          className="rounded-[14px] w-full h-full object-cover"
        />
      ) : (
        <img
          src={Image1}
          alt="Image"
          className="rounded-[40px] w-full h-full object-cover"
        />
      )}
    </div>
  );
};

export default BgImage;
