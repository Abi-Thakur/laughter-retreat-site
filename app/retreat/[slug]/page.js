import { client } from "@/sanity/lib/client";
import { singleRetreatQuery } from "@/sanity/lib/queries";
import Image from "next/image";
import RetreatEnquiryForm from "@/app/components/RetreatEnquiryForm";

/* ─────────────────────────────────────────────
   TRUST BAR
───────────────────────────────────────────── */
function TrustBar() {
  const items = [
    "Small group · max 12 participants",
    "Certified Tantra facilitator",
    "Safe & nurturing space",
    "Pickup included",
  ];

  return (
    <div
      className="
      grid md:grid-cols-4 gap-4
      bg-white
      border border-black/5
      rounded-[28px]
      p-5 md:p-6
      shadow-sm
      "
    >
      {items.map((item, i) => (
        <div
          key={i}
          className="flex items-center gap-3 text-sm text-[#5f5b52]"
        >
          <div className="w-9 h-9 rounded-full bg-[#edf2ea] flex items-center justify-center">
            ✦
          </div>

          <span>{item}</span>
        </div>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────
   STICKY CTA
───────────────────────────────────────────── */
function StickyCTA({ title, currency, price }) {
  return (
    <div
      className="
      sticky top-0 z-50
      bg-[#f7f5f1]/90
      backdrop-blur-xl
      border-b border-black/5
      "
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">

        <p className="hidden md:block font-medium truncate">
          {title}
        </p>

        <div className="flex items-center gap-5 ml-auto">

          <p className="text-sm text-[#6d685f]">
            From{" "}
            <span className="font-semibold text-[#2b2b2b]">
              {currency} {price}
            </span>
          </p>

          <a
            href="#enquire"
            className="
            px-6 py-3
            rounded-full
            bg-[#97ab8b]
            text-white
            text-sm
            font-medium
            hover:scale-[1.02]
            transition-all
            duration-300
            "
          >
            Enquire now
          </a>

        </div>
      </div>
    </div>
  );
}


/* ─────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────── */
export default async function RetreatPage({ params }) {

  const { slug } = await params;

  const data = await client.fetch(
    singleRetreatQuery,
    { slug }
  );

  if (!data) {
    return <div>Not found</div>;
  }

  return (
    <>
      <StickyCTA
        title={data.title}
        currency={data.currency}
        price={data.price}
      />

      <main className="bg-[#f7f5f1] text-[#2b2b2b]">

        {/* HERO */}
        <section className="px-6 md:px-12 pt-16 md:pt-24 pb-20">

          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT */}
            <div>

              <p className="uppercase tracking-[0.25em] text-sm text-[#9a927f] mb-6">
                {data.tag}
              </p>

              <h1 className="text-5xl md:text-7xl leading-[1] tracking-tight font-serif mb-8">
                {data.title}
              </h1>

              <div className="flex flex-wrap gap-4 mb-8">

                {data.startDate && (
                  <div className="px-4 py-3 bg-white rounded-full border border-black/5 text-sm">
                    📅 {data.startDate}
                  </div>
                )}

                {data.location && (
                  <div className="px-4 py-3 bg-white rounded-full border border-black/5 text-sm">
                    📍 {data.location}
                  </div>
                )}

                <div className="px-5 py-3 bg-[#97ab8b] text-white rounded-full font-medium text-sm">
                  {data.currency} {data.price}
                </div>

              </div>

              <p className="text-[17px] leading-[1.9] text-[#5f5b52] max-w-xl mb-10">
                {data.excerpt}
              </p>

              <div className="flex gap-4 flex-wrap">

                <a
                  href="#enquire"
                  className="
                  px-8 py-4
                  rounded-full
                  bg-[#97ab8b]
                  text-white
                  font-medium
                  hover:scale-[1.02]
                  transition-all
                  duration-300
                  "
                >
                  Reserve your place
                </a>

                <a
                  href="#about"
                  className="
                  px-8 py-4
                  rounded-full
                  border border-black/10
                  bg-white
                  hover:bg-[#f2efe8]
                  transition-all
                  duration-300
                  "
                >
                  Learn more
                </a>

              </div>
            </div>

            {/* IMAGE */}
            <div className="relative">

              <div className="
              relative overflow-hidden rounded-[36px]
              shadow-[0_30px_80px_rgba(0,0,0,0.12)]
              ">

                <Image
                  src={data.image}
                  alt={data.title}
                  width={900}
                  height={1200}
                  className="
                  w-full
                  h-[500px] md:h-[700px]
                  object-cover
                  "
                  priority
                />

                <div className="
                absolute inset-0
                bg-gradient-to-t
                from-black/30
                to-transparent
                " />

              </div>

              <div className="
              absolute bottom-6 left-6
              bg-white/90 backdrop-blur-md
              rounded-full px-5 py-3
              shadow-lg
              text-sm font-medium
              ">
                🔥 Limited spots available
              </div>

            </div>
          </div>
        </section>

        {/* TRUST */}
        <section className="px-6 md:px-12 pb-20">
          <div className="max-w-7xl mx-auto">
            <TrustBar />
          </div>
        </section>

        {/* ABOUT */}
        <section
          id="about"
          className="px-6 md:px-12 pb-24"
        >
          <div className="max-w-5xl mx-auto">

            <div className="
            bg-white
            rounded-[40px]
            p-8 md:p-14
            border border-black/5
            shadow-[0_20px_60px_rgba(0,0,0,0.04)]
            ">

              <h2 className="text-4xl md:text-5xl font-serif mb-10">
                About the retreat
              </h2>

              <div className="space-y-6 text-[#5f5b52] leading-[1.9] text-[17px]">

                {data.description?.map((block, i) => (
                  <p key={i}>
                    {block.children?.[0]?.text}
                  </p>
                ))}

              </div>
            </div>
          </div>
        </section>

        {/* INCLUDED */}
        <section className="px-6 md:px-12 pb-24">

          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">

            <div className="
            bg-white
            rounded-[40px]
            p-10
            border border-black/5
            ">

              <h3 className="text-3xl font-serif mb-8">
                What's included
              </h3>

              <div className="space-y-5">

                {data.included?.map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-4"
                  >
                    <div className="
                    w-8 h-8
                    rounded-full
                    bg-[#edf2ea]
                    flex items-center justify-center
                    shrink-0
                    ">
                      ✔
                    </div>

                    <p className="text-[#5f5b52] leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}

              </div>
            </div>

            <div className="
            bg-white
            rounded-[40px]
            p-10
            border border-black/5
            ">

              <h3 className="text-3xl font-serif mb-8">
                Not included
              </h3>

              <div className="space-y-5">

                {data.notIncluded?.map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-4"
                  >
                    <div className="
                    w-8 h-8
                    rounded-full
                    bg-[#f8ecec]
                    flex items-center justify-center
                    shrink-0
                    ">
                      ✕
                    </div>

                    <p className="text-[#5f5b52] leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}

              </div>
            </div>

          </div>
        </section>

        {/* FORM */}
        <section className="px-6 md:px-12 pb-32">
          <div className="max-w-5xl mx-auto">
            <RetreatEnquiryForm retreatTitle={data.title} />
          </div>
        </section>

      </main>
    </>
  );
}