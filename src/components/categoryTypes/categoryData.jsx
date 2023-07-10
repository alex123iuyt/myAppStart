import categoryImages1 from "../../assets/impantsCategory/1.png";
import categoryImages2 from "../../assets/impantsCategory/2.png";
import categoryImages3 from "../../assets/impantsCategory/3.png";
import categoryImages4 from "../../assets/impantsCategory/4.png";

const categoryObj = {
  id: "",
  img: "",
  brand: "",
  title: "",
  description: "",
  path: "",
};

export const categoryData = [
  {
    ...categoryObj,
    id: 1,
    img: categoryImages1,
    brand: "AXIS",
    title: "Internal hex",
    description: "Length Ø3.3 — 6.0mm",
  },
  {
    ...categoryObj,
    id: 2,
    img: categoryImages2,
    brand: "MASSIF",
    title: "Internal hex",
    description: "Length Ø3.3 — 6.0mm",
  },
  {
    ...categoryObj,
    id: 3,
    img: categoryImages3,
    brand: "ROBICONE",
    title: "Conical connection",
    description: "Length Ø3.3 — 6.0mm",
  },
  {
    ...categoryObj,
    id: 4,
    img: categoryImages4,
    brand: "CRESTONE",
    title: "One piece",
    description: "Length Ø3.3 — 6.0mm",
  },
];
