import { useState } from "react";

const FAQ = () => {
  const [isOpen, setIsOpen] = useState<number | null>(null);

  const dataArr = [
    {
      title: "How do I create an account?",
      description:
        'To create an account, click on the "Sign Up" button and fill out the required information. Once done, you can enjoy the benefits of being a registered member.',
    },
    {
      title: "What is your return policy?",
      description:
        "Our return policy allows you to return items within 30 days of purchase. Please visit our returns page for detailed instructions and to initiate a return.",
    },
    {
      title: "Can I change my shipping address?",
      description:
        "Yes, you can change your shipping address before your order is shipped. Go to your account settings and update the shipping information accordingly.",
    },
    {
      title: "Are there any discounts for loyal customers?",
      description:
        "We appreciate our loyal customers! Stay tuned for exclusive discounts, promotions, and special offers available to members of our loyalty program.",
    },
    {
      title: "How can I track my order?",
      description:
        "You can track your order by logging into your account and navigating to the 'Order History' section. From there, you can view the status and tracking information for your orders.",
    },
    {
      title: "Do you offer international shipping?",
      description:
        "Yes, we offer international shipping to select countries. Please refer to our shipping policy page for more details on available locations and shipping rates.",
    },
  ];
  const toggle = (index: number) => {
    setIsOpen((prevIdx) => (prevIdx === index ? null : index));
  };
  return (
    <div className="w-full max-w-4xl mx-auto bg-inherit px-2 *:mix-blend-difference dark:bg-inherit mt-20">
      {dataArr.map((PerAccordion, idx) => (
        <div key={idx} className="border-b border-gray-500/50 py-3">
          <button
            onClick={() => toggle(idx)}
            className="flex h-full w-full justify-between font-medium outline-none text-neutral-60"
          >
            <span>{PerAccordion.title}</span>
            <span className="rounded-full p-2">
              <svg
                className="ml-8 size-3 shrink-0 "
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  y="5"
                  width="12"
                  height="2"
                  rx="1"
                  className={`origin-center transform transition duration-200 ease-out ${
                    isOpen === idx && "!rotate-180"
                  }`}
                />
                <rect
                  y="5"
                  width="12"
                  height="2"
                  rx="1"
                  className={`origin-center rotate-90 transform transition duration-200 ease-out ${
                    isOpen === idx && "!rotate-180"
                  }`}
                />
              </svg>
            </span>
          </button>
          <div
            className={`grid overflow-hidden text-zinc-400 transition-all duration-300 ease-in-out ${
              isOpen === idx
                ? "grid-rows-[1fr] pb-1 pt-3 opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden pr-4 text-sm">
              {PerAccordion.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
