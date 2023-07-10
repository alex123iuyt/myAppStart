import advantageImg1 from "../../assets/advantage/1.svg";
import advantageImg2 from "../../assets/advantage/2.svg";
import advantageImg3 from "../../assets/advantage/3.svg";
import advantageImg4 from "../../assets/advantage/4.svg";

const advantageObj = {
  id: "",
  img: "",
  title: "",
  description: "",
};

export const advantageData = [
  {
    ...advantageObj,
    id: 1,
    img: advantageImg1,
    title: "Reverse buttress profile",
    description: "Uniform internal connection designs",
  },
  {
    ...advantageObj,
    id: 2,
    img: advantageImg2,
    title: "Reverse crown",
    description: "Concave abutment profile design",
  },
  {
    ...advantageObj,
    id: 3,
    img: advantageImg3,
    title: "Unique platform switching",
    description: "Transmits axial and radial forces to the bone",
  },
  {
    ...advantageObj,
    id: 4,
    img: advantageImg4,
    title: "For all implants",
    description: "Uniform internal connection designs",
  },
];
