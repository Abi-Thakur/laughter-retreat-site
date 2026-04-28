import Accordion from "./ui/Accordion";

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
  ];

  return (
    <section className="py-24 px-6 md:px-16 bg-[var(--secondary-background)]">

      {/* HEADER */}
      <div className="max-w-2xl mb-12">
        <p className="text-sm uppercase tracking-widest text-[var(--secondary-text)] mb-4">
          FAQ
        </p>

        <h2 className="text-3xl md:text-5xl font-serif text-[var(--text-color)]">
          Common Questions
        </h2>
      </div>

      {/* ACCORDION */}
      <Accordion items={faqs} />

    </section>
  );
}