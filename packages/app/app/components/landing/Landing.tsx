import Flow from "~/flow.svg";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Landing() {
  return (
    <div className="flex flex-col items-center text-gray-900 mt-10 md:mt-20 lg:mt-40">
      <h1 className="max-w-3xl text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-4">
      Streamline  <span className="text-primary-600">Gifting</span> with{" "}
        <span className="text-primary-600">Encapsul</span> 
      </h1>
      <p className="max-w-xl text-center text-gray-900">
      Empower your community by effortlessly creating and delivering Capsules filled with digital assets, with zero friction for users.
      </p>
      {/* <Flow className="max-w-md my-16" /> */}
      <div className="max-w-md my-16"></div>
      <p className="text-gray-600 font-semibold">Get started:</p>
      <ConnectButton />
      <h2 className="mt-20 mb-16 text-3xl sm:text-4xl md:text-5xl font-extrabold text-center">
        How It Works
      </h2>
      <div className="flex flex-wrap gap-16 md:mx-10 mb-20 justify-center">
        <HowItWorksItem
          number={1}
          title="Design Your Capsule"
          description="Bundle ETH, tokens, or NFTs into a Capsule tailored for your users' needs. What will you enclose in your Capsule?"
        />
        <HowItWorksItem
          number={2}
          title="Distribute with Ease"
          description="Share your Capsule link through any communication channel. One click is all it takes for your users to access it."
        />
        <HowItWorksItem
          number={3}
          title="Effortless Access"
          description="Users open their Capsules without paying any gas fees—Capsule handles the costs, ensuring a smooth experience."
        />
      </div>
    </div>
  );
}

type HowItWorksItemProps = {
  number: number;
  title: string;
  description: string;
};

function HowItWorksItem({ number, title, description }: HowItWorksItemProps) {
  return (
    <div className="max-w-[280px] w-full">
      <div className="flex justify-center items-center font-semibold">
        <span className="text-7xl text-gray-300 font-extrabold mr-4">
          {number}.
        </span>
        <h3 className="text-3xl font-extrabold text-center text-gray-900">
          {title}{" "}
        </h3>
      </div>
      <p className="mt-4 text-center text-gray-900">{description}</p>
    </div>
  );
}
