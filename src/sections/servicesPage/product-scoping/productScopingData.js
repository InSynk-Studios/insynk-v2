import DiscoveryPhaseSvg from "./assets/discovery_phase.svg";
import ScopingPhaseSvg from "./assets/scoping_phase.svg";
import PlanningPhaseSvg from "./assets/planning_phase.svg";

const wrapperStyles = "space-y-0 sm:space-y-5 lg:space-y-8";
const titleStyles =
  "text-xl sm:text-[40px] text-brand-secondary-100 leading-6 sm:leading-[45px] font-tanker-400";
const paragraphStyles =
  "text-xs sm:text-lg font-dmsans-400 tracking-[-0.27px] space-y-4 lg:space-y-6 leading-5 sm:leading-[27px]";

export const productScopingData = [
  {
    imageUrl: DiscoveryPhaseSvg,
    content: (
      <div className={wrapperStyles}>
        <h3 className={titleStyles}>Discovery Phase</h3>
        <div className={paragraphStyles}>
          <p>
            Our product scoping process starts with a discovery phase. During
            this phase, we work with you to understand your vision for the
            product, your target audience, and your product’s unique value
            proposition.
          </p>
          <p>
            We also identify any potential roadblocks that could hinder the
            product&apos;s success, such as technical limitations or market
            saturation.
          </p>
          <p>
            By the end of the discovery phase, we have a deep understanding of
            your product and the business goals you want to achieve.
          </p>
        </div>
      </div>
    ),
  },
  {
    imageUrl: ScopingPhaseSvg,
    content: (
      <div className={wrapperStyles}>
        <h3 className={titleStyles}>scoping phase</h3>
        <div className={paragraphStyles}>
          <p>
            During this phase, we use the information gathered in the discovery
            phase to define the product&apos;s features, requirements, and
            goals. We take a user-centered approach to scope, focusing on the
            needs and desires of the end users.
          </p>
          <p>
            We also consider the technical requirements of the product, such as
            the technology stack, scalability, and security.
          </p>
          <p>
            The scoping phase is where we define the scope of the product. This
            includes the product&apos;s features, functionality, and design.
          </p>
          <p>
            We also define the product&apos;s MVP (Minimum Viable Product),
            which is the version of the product that contains the essential
            features needed to launch. Defining the MVP is a critical step in
            the scoping process, as it ensures that the product is delivered to
            the market as quickly as possible.
          </p>
        </div>
      </div>
    ),
  },
  {
    imageUrl: PlanningPhaseSvg,
    content: (
      <div className={`${wrapperStyles} sm:mt-5 lg:mt-8`}>
        <h3 className={titleStyles}>Planning Phase</h3>
        <div className={paragraphStyles}>
          <p>
            Once we have defined the product scope and MVP, we move on to the
            planning phase. During this phase, we create a roadmap for the
            product&apos;s development.
          </p>
          <p>
            This roadmap outlines the development milestones, the timeline for
            each milestone, and the resources needed to achieve them. The
            roadmap is designed to ensure that the development process is
            efficient and cost-effective.
          </p>
          <p>
            At InSynk Studios, we understand that software development is an
            iterative process. As such, we don&apos;t consider the scoping
            process to be a one-and-done task.
          </p>
          <p>
            Instead, we view it as an ongoing process that evolves as the
            product develops. As the development process progresses, we revisit
            the product scope and make any necessary adjustments.
          </p>
        </div>
      </div>
    ),
  },
];
