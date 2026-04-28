"use client";
import Eyebrow from "./ui/Eyebrow";
export default function JourneySection() {
  const steps = [
    {
      title: "Arrive",
      desc: "Step away from daily noise and enter a space of stillness and presence.",
    },
    {
      title: "Release",
      desc: "Let go of stress, emotions, and inner tension through guided practices.",
    },
    {
      title: "Transform",
      desc: "Experience deep inner shifts through meditation and awareness.",
    },
    {
      title: "Integrate",
      desc: "Return to life with clarity, calm, and a renewed perspective.",
    },
  ];

  return (
    <section className="py-10 md:py-24 px-6 md:px-16 bg-(--background-color)">

      <div className="max-w-2xl mb-16">
        <div className="mb-4">
            <Eyebrow variant="dark">Your Journey</Eyebrow>
        </div>

        <h2 className="text-3xl md:text-5xl font-serif text-(--text-color) leading-tight">
          The Experience<em>You will live</em>
        </h2>
      </div>

      <div className="grid md:grid-cols-4 gap-10">
        {steps.map((step, i) => (
          <div key={i} className="space-y-4">
            <div className="text-4xl font-serif text-(--accent-color)">
              {i + 1}
            </div>

            <h3 className="text-xl font-serif text-(--text-color)">
              {step.title}
            </h3>

            <p className="text-(--secondary-text) text-sm leading-relaxed">
              {step.desc}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
}