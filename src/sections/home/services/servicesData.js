import ProductScoping from "@/assets/illustration/services/product_scoping.svg";
import Design from "@/assets/illustration/services/design.svg";
import Mvp from "@/assets/illustration/services/mvp.svg";
import DevelopmentPartnership from "@/assets/illustration/services/development_partnership.svg";
import Overlay from "@/assets/illustration/services/overlay.svg";

export const serviceData = [
  {
    id: 1,
    title: "Product scoping",
    color: "bg-brand-background-300",
    image: ProductScoping,
    description:
      "You wouldn't build a house without a blueprint, so why launch a product without a solid product scope? Unleash your curiosity and learn more about our product scoping processes.",
    overlay: Overlay,
    route: "/product-scoping",
  },
  {
    id: 2,
    title: "Designs",
    color: "bg-brand-background-400",
    image: Design,
    description:
      "Being a crucial part of product development, a well-designed software product is not only aesthetically pleasing but also intuitive and easy to use. A great design can make a product stand out in a crowded market. Explore our product design approach.",
    overlay: Overlay,
    route: "/designs",
  },
  {
    id: 3,
    title: "MVP Development",
    color: "bg-brand-background-300",
    image: Mvp,
    description:
      "A key benefit of building an MVP is that, it helps you to reduce the risk of product failure. By testing the MVP with real users, you can obtain feedback, identify potential issues, and make informed decisions about the product's development. Dive into our MVP development process.",
    overlay: Overlay,
    route: "/mvp-development",
  },
  {
    id: 4,
    title: "Software Development partnership",
    color: "bg-brand-background-400",
    image: DevelopmentPartnership,
    description:
      "Partnering with us for development offers two significant benefits. Firstly, we provide the ability to experiment, prototype, and validate new ideas. Secondly, we offer our extensive skill set to build your initial MVP and scale it to new heights. Together, we can reach to PMF that you aim for.",
    overlay: Overlay,
    route: "/",
  },
];
