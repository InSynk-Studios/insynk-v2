import FirsthCircleSvg from "../product-scoping/assets/discovery_phase.svg";
import SecondCircleSvg from "../product-scoping/assets/scoping_phase.svg";
import ThirdCircleSvg from "../designs/assets/thirdCircle.svg";
import FourthCircleSvg from "../designs/assets/fourthCircle.svg";
import FifthCircleSvg from "../designs/assets/sixthCircle.svg";
import SixthCircleSvg from "../designs/assets/seventhCircle.svg";
import SeventhCircleSvg from "./assets/seventhCircle.svg";
import EighthCircleSvg from "../product-scoping/assets/planning_phase.svg";

const titleStyles =
  "text-[40px] text-brand-secondary-100 leading-[45px] font-tanker-400";
const paragraphStyles =
  "text-lg font-dmsans-400 tracking-[-0.27px] space-y-4 lg:space-y-6 leading-[27px]";

export const mvpDevelopmentPageData = [
  {
    imageUrl: FirsthCircleSvg,
    content: (
      <div className="space-y-5 lg:space-y-8">
        <h3 className={titleStyles}>Define the Problem and Goal</h3>
        <p className={paragraphStyles}>
          We start by defining the problem that the MVP will solve and the goal
          we aim to achieve. This is a crucial step as it helps us to determine
          the scope and features of the MVP.
        </p>
      </div>
    ),
  },
  {
    imageUrl: SecondCircleSvg,
    content: (
      <div className="space-y-5 lg:space-y-8">
        <h3 className={titleStyles}>USER RESEARCH</h3>
        <p className={paragraphStyles}>
          We conduct extensive research to understand our target audience, their
          needs, and pain points. This information helps us to design an MVP
          that solves the user&apos;s problems and meets their expectations.{" "}
        </p>
      </div>
    ),
  },
  {
    imageUrl: ThirdCircleSvg,
    content: (
      <div className="space-y-0 pb-6 lg:space-y-8">
        <h3 className={titleStyles}>DEfine user personas and use cases</h3>
        <p className={paragraphStyles}>
          Based on the user research, we create user personas and use cases that
          guide the design process. This step ensures that we create a product
          that aligns with our user&apos;s needs and goals.
        </p>
      </div>
    ),
  },
  {
    imageUrl: FourthCircleSvg,
    content: (
      <div className="space-y-0 pb-6 lg:space-y-8">
        <h3 className={titleStyles}>DEVElop the mvp features</h3>
        <p className={paragraphStyles}>
          Next, we develop a list of MVP features based on the user personas and
          use cases. The MVP features are those that are critical to solving the
          user&apos;s problem and achieving the MVP goal.
        </p>
      </div>
    ),
  },
  {
    imageUrl: FifthCircleSvg,
    content: (
      <div className="space-y-5 lg:space-y-8">
        <h3 className={titleStyles}>TEST with real users</h3>
        <p className={paragraphStyles}>
          We test the MVP prototype with real users to gather feedback and
          identify any issues with the design. This step is critical as it
          allows us to make informed decisions about the product&apos;s future
          development.
        </p>
      </div>
    ),
  },
  {
    imageUrl: SixthCircleSvg,
    content: (
      <div className="space-y-5 lg:space-y-8">
        <h3 className={titleStyles}>refine the design</h3>
        <p className={paragraphStyles}>
          Based on the user feedback, we refine the MVP design and make
          necessary changes to improve the product&apos;s usability and user
          experience.
        </p>
      </div>
    ),
  },
  {
    imageUrl: SeventhCircleSvg,
    content: (
      <div className="space-y-5 lg:space-y-8">
        <h3 className={titleStyles}>build the mvp</h3>
        <p className={paragraphStyles}>
          Once the design is finalized, we begin building the MVP. Our team of
          developers works closely with our designers to ensure that the product
          is built to the highest quality standards.
        </p>
      </div>
    ),
  },
  {
    imageUrl: EighthCircleSvg,
    content: (
      <div className="space-y-5 lg:space-y-8">
        <h3 className={titleStyles}>launch the mvp</h3>

        <p className={paragraphStyles}>
          Once the MVP is built, we launch it and make it available to the
          public. We continue to gather feedback.
        </p>
      </div>
    ),
  },
];
