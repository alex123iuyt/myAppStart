import categoryImages1 from "../../assets/category/01.png";
import categoryImages2 from "../../assets/category/02.png";
import categoryImages3 from "../../assets/category/03.png";
import categoryImages4 from "../../assets/category/04.png";

const categoryObj = {
  id: "",
  img: "",
  title: "",
  path: "",
};

export const categoryData = [
  {
    ...categoryObj,
    id: 1,
    img: categoryImages1,
    title: "Implants",
    path: "/implants",
  },
  {
    ...categoryObj,
    id: 2,
    img: categoryImages2,
    title: "Superstructures",
    path: "/category/internal-hex",
  },
  {
    ...categoryObj,
    id: 3,
    img: categoryImages3,
    title: "Instruments",
    path: "/category/conical-connection",
  },
  {
    ...categoryObj,
    id: 4,
    img: categoryImages4,
    title: "Digital Solutions",
    path: "/category/one-piece",
  },
];
