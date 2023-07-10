import categoryImages1 from "../../assets/category/01.png";
import categoryImages2 from "../../assets/category/02.png";
import categoryImages3 from "../../assets/category/03.png";
import categoryImages4 from "../../assets/category/01.png";

const categoryTemplate = {
  title: "",
  image: "",
  id: "",
  link: "",
};

export const categoryData = [
  {
    ...categoryTemplate,
    id: 1,
    title: "Implants",
    image: categoryImages1,
    link: "/implants",
  },
  {
    ...categoryTemplate,
    id: 2,
    title: "Superstructures",
    image: categoryImages2,
    link: "/category/superstructures",
  },
  {
    ...categoryTemplate,
    id: 3,
    title: "Instruments",
    image: categoryImages3,
    link: "/category/instruments",
  },
  {
    ...categoryTemplate,
    id: 4,
    title: "Digital Solutions",
    image: categoryImages4,
    link: "/category/digital-solutions",
  },
];
