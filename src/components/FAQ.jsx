import { useState } from "react";

function FAQ() {
  const faqs = [
    {
      question: "Who can join this workshop?",
      answer:
        "Children aged 8–14 years can join this workshop. No prior coding experience is required.",
    },
    {
      question: "Do I need coding experience?",
      answer:
        "No. This workshop is designed for complete beginners. Everything is taught from scratch.",
    },
    {
      question: "Will I receive a certificate?",
      answer:
        "Yes. Every student who completes the workshop will receive a digital certificate.",
    },
    {
      question: "Are live classes recorded?",
      answer:
        "Yes. Recordings will be available if you miss any live session.",
    },
  ];

  const [open, setOpen] = useState(0);

  return (
    <section
      id="faq"
      className="py-20 bg-gradient-to-b from-white to-slate-50"
    >
      <div className="container mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-600 mt-4 text-lg">
            Everything parents usually ask before enrolling.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border border-gray-200 mb-5 overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <h3 className="text-xl font-semibold text-gray-800">
                  {faq.question}
                </h3>

                <span className="text-3xl font-bold text-blue-600">
                  {open === index ? "−" : "+"}
                </span>
              </button>

              {open === index && (
                <div className="px-6 pb-6 text-gray-600 leading-7">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default FAQ;