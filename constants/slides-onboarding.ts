// export default [
//     {
//       id: '1',
//       title: "Welcome to Expense Manager",
//       image: require("../assets/onbording-img/1.png"),
//     },
//     {
//       id: '2',
//       title: "Vos déclarations douanières, simplifiées",
//       image: require("../assets/onbording-img/2.png"),
//     },
//     {
//       id: '3',
//       title: "La douane n'a jamais été aussi simple.",
//       image: require("../assets/onbording-img/3.png"),
//     },
//     {
//       id: '4',
//       title: "Maîtrisez votre conformité douanière.",
//       image: require("../assets/onbording-img/4.png"),
//     },
// ];

import { useTranslation } from "react-i18next";

const { t } = useTranslation();

export default [
  {
    id: "1",
    title: t("slides.0.title"),
    image: require("../assets/onbording-img/1.png"),
  },
  {
    id: "2",
    title: t("slides.1.title"),
    image: require("../assets/onbording-img/2.png"),
  },
  {
    id: "3",
    title: t("slides.2.title"),
    image: require("../assets/onbording-img/3.png"),
  },
  {
    id: "4",
    title: t("slides.3.title"),
    image: require("../assets/onbording-img/4.png"),
  },
];
