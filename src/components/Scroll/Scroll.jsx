import { HiArrowCircleDown, HiArrowCircleUp } from "react-icons/hi";
import { ScrollAnimation } from "./Scroll.styled";
const Scroll = ({ arrowDown }) => {
  return (
    <ScrollAnimation>
      {arrowDown ? (
        <HiArrowCircleDown size={60} />
      ) : (
        <HiArrowCircleUp size={60} />
      )}
    </ScrollAnimation>
  );
};

export default Scroll;
