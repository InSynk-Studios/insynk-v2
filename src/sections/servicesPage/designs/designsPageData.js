import FirsthCircleSvg from "../product-scoping/assets/scoping_phase.svg";
import SecondCircleSvg from "./assets/secondCircle.svg";
import ThirdCircleSvg from "./assets/thirdCircle.svg";
import FourthCircleSvg from "./assets/fourthCircle.svg";
import FifthCircleSvg from "./assets/fifthCircle.svg";
import SixthCircleSvg from "./assets/sixthCircle.svg";
import SeventhCircleSvg from "./assets/seventhCircle.svg";
import EighthCircleSvg from "./assets/eighthCircle.svg";

const titleStyles =
  "text-[40px] text-brand-secondary-100 leading-[45px] font-tanker-400";
const paragraphStyles =
  "text-lg font-dmsans-400 tracking-[-0.27px] space-y-4 lg:space-y-6 leading-[27px]";

export const designsPageData = [
  {
    imageUrl: FirsthCircleSvg,
    content: (
      <div className="space-y-5 lg:space-y-8">
        <h3 className={titleStyles}>
          Research to Get to know Target Audience, Their Needs, and Pain Points
        </h3>
        <div className={paragraphStyles}>
          <p>
            Our product design process starts with researching the target
            audience, their needs, and pain points. We gather this information
            through surveys, interviews, and focus groups. The goal of this step
            is to get a clear understanding of who the target audience is and
            what they want from the product.
          </p>
          <p>
            We ask questions like: Who are the users? What are their goals? What
            challenges do they face? What do they value in a product? By
            answering these questions, we can identify the user&apos;s needs and
            pain points and design a product that meets those needs.
          </p>
        </div>
      </div>
    ),
  },
  {
    imageUrl: SecondCircleSvg,
    content: (
      <div className="space-y-5 lg:space-y-8">
        <h3 className={titleStyles}>
          Identifying the Product Goals, Features, and Requirements Based on
          User Research and Business Objectives
        </h3>
        <div className={paragraphStyles}>
          <p>
            Once we have a good understanding of the target audience, we
            identify the product goals, features, and requirements.
          </p>
          <p>
            We use the user research data and align it with the business
            objectives to identify what the product needs to achieve. This step
            ensures that the product is not only meeting the user&apos;s needs
            but also aligning with the business&apos;s goals.s
          </p>
        </div>
      </div>
    ),
  },
  {
    imageUrl: ThirdCircleSvg,
    content: (
      <div className="space-y-0 pb-6 lg:space-y-8">
        <h3 className={titleStyles}>
          Developing User Personas and Use Cases to Guide the Design Process
        </h3>
        <div className={paragraphStyles}>
          <p>
            Now comes the user personas, they are fictional characters that
            represent the different user types who will interact with the
            product.
          </p>
          <p>
            Use cases are scenarios that describe how the user will interact
            with the product.
          </p>
          <p>
            We use user personas and use cases to guide the design process. It
            helps us to understand the user&apos;s motivations, goals, and
            behavior, which is critical to designing a product that meets their
            needs.
          </p>
          <p>
            User personas and use cases help us to ensure that the product is
            designed with the user in mind.
          </p>
        </div>
      </div>
    ),
  },
  {
    imageUrl: FourthCircleSvg,
    content: (
      <div className="space-y-5 lg:space-y-8">
        <h3 className={titleStyles}>
          Creating Wireframes and Prototypes to Visualize the Product&apos;s
          Functionality and Layout.
        </h3>
        <div className={paragraphStyles}>
          <p>
            Wireframes are low-fidelity designs that show the product&apos;s
            layout and functionality. It is an excellent way to test and iterate
            the product&apos;s design before moving into the final design phase.
          </p>
          <p>
            Prototypes are more advanced versions of wireframes that have some
            of the product&apos;s functionality built-in. Prototypes are used to
            test the product&apos;s functionality and gather feedback from the
            users.
          </p>
        </div>
      </div>
    ),
  },
  {
    imageUrl: FifthCircleSvg,
    content: (
      <div className="space-y-5 lg:space-y-8">
        <h3 className={titleStyles}>
          Choosing a Visual Style, Color Scheme, Typography, and Other Design
          Elements That Align with the Brand
        </h3>
        <div className={paragraphStyles}>
          <p>
            Once the wireframes and prototypes are complete, we move on to the
            visual design phase. The visual design phase is where we choose a
            visual style, color scheme, typography, and other design elements
            that align with the brand.
          </p>
          <p>
            The goal of this step is to create a design that is consistent with
            the brand&apos;s message and values. The design should be visually
            appealing and easy to use.
          </p>
        </div>
      </div>
    ),
  },
  {
    imageUrl: SixthCircleSvg,
    content: (
      <div className="space-y-5 lg:space-y-8">
        <h3 className={titleStyles}>
          Testing the Prototypes with Real Users to Gather Feedback and Identify
          Any Issues with the Design
        </h3>
        <div className={paragraphStyles}>
          <p>
            After the design is complete, we test the prototypes with real
            users. Testing the prototypes with real users helps us to gather
            feedback and identify any issues with the design. We use the
            feedback to make necessary changes to improve the product&apos;s
            usability and user experience.
          </p>
        </div>
      </div>
    ),
  },
  {
    imageUrl: SeventhCircleSvg,
    content: (
      <div className="space-y-5 lg:space-y-8">
        <h3 className={titleStyles}>
          Refining the Design Based on the User Feedback and Make Necessary
          Changes to Improve the Product&apos;s Usability and User Experience
        </h3>
        <div className={paragraphStyles}>
          <p>
            Based on the user feedback, we refine the design and make necessary
            changes to improve the product&apos;s usability and user experience.
            The goal of this step is to ensure that the product meets the
            user&apos;s needs and is easy to use.
          </p>
        </div>
      </div>
    ),
  },
  {
    imageUrl: EighthCircleSvg,
    content: (
      <div className="space-y-5 lg:space-y-8">
        <h3 className={titleStyles}>
          Creating a Design System and Style Guide to Ensure Consistency in the
          Product&apos;s Design and Development
        </h3>
        <div className={paragraphStyles}>
          <p>
            Once the design is complete, we create a design system and style
            guide. The design system and style guide ensure consistency.
          </p>
        </div>
      </div>
    ),
  },
];
