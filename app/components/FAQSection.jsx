import Accordion from "./ui/Accordion";
import Eyebrow from "./ui/Eyebrow";

export default function FaqSection() {
  const faqs = [
    {
      title: "Do I need prior meditation experience?",
      content:
        "No, this retreat is suitable for both beginners and experienced practitioners.",
    },
    {
      title: "What is included in the retreat?",
      content:
        "Accommodation, meals, daily meditation sessions, and guided practices are included.",
    },
    {
      title: "What should I bring?",
      content:
        "Comfortable clothing, a journal, and an open mind.",
    },
    {
      title: "Can I attend alone?",
      content:
        "Yes, many participants come alone and find deep connection during the retreat.",
    },
     {
      title: "What is the daily schedule like?",
      content:
        "Each day includes meditation sessions, relaxation time, workshops, and mindful activities designed for inner growth.",
    },
    {
      title: "How do I book and what is the cancellation policy?",
      content:
        "You can book through our website or contact us directly. Cancellation and refund policies will be clearly mentioned during booking.",
    },
  ];

  return (
    <section className="py-24 px-6 md:px-16 bg-(--secondary-background)">

      {/* HEADER */}
      <div className="max-w-2xl mb-12">
        <div>
          <Eyebrow variant="dark">FAQ</Eyebrow>
        </div>

        <h2 className="text-3xl md:text-5xl font-serif text-(--text-color)">
          Common Questions
        </h2>
      </div>

      {/* ACCORDION */}
      <Accordion items={faqs} />

    </section>
  );
}