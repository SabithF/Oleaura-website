import React from "react";
import { motion } from "framer-motion";

type ContentText = {
  content: string;
  highlight?: string;
};

type BoxContent = {
  imgSrc: string;
  headTxt: string;
  bodyTxt: string;
};

// ✅ CHANGE: bottleBody is now React.ReactNode (so it can contain <strong> etc.)
type BottleContentItem = {
  imgSrc: string;
  bottleBody: React.ReactNode;
  highlighted: string;
};

// -------------------- CONTENT --------------------
const pageTextContent: ContentText[] = [
  {
    content:
      " crafted for consistency, balance, and everyday culinary excellence at a professional standard. Sourced exclusively from carefully selected farms across Greece, it reflects the country’s diverse olive-growing regions while maintaining a unified and dependable character.",
    highlight: "Oleaura is a premium olive oil",
  },
  {
    content:
      "The flavour profile is clean and well-balanced, with gentle fruitiness, subtle herbaceous notes, and a smooth, controlled peppery finish. Its versatility makes it ideal for both cooking and finishing, enhancing dishes without overpowering them.",
  },
  {
    content:
      "By combining generations of Greek olive-growing tradition with modern production techniques, Oleaura delivers an olive oil defined by purity, reliability, and performance. Whether in a professional kitchen or a refined home, it serves as a trusted foundation consistent in quality, expressive in taste, and unmistakably premium",
  },
];

const contentInBox: BoxContent[] = [
  {
    imgSrc: "/assets/img/icon-1.png",
    headTxt: "Strict Selection",
    bodyTxt:
      "At Oleaura, we carefully select olives from the finest Mediterranean groves, preserving their terroir and natural character. Every harvest follows traditional practices and sustainable cultivation, ensuring the foundation of exceptional olive oil.",
  },
  {
    imgSrc: "/assets/img/icon-2.png",
    headTxt: "TRACEABILITY",
    bodyTxt:
      "From orchard to bottle, we maintain full traceability. We know our growers, the unique qualities of their land, and handpick each olive to guarantee purity, consistency, and integrity in every drop.",
  },
  {
    imgSrc: "/assets/img/icon-3.png",
    headTxt: "FRESHNESS & QUALITY",
    bodyTxt:
      "Oleaura is committed to excellence. Our producers uphold diverse olive varieties, safeguard their natural freshness, and maintain rigorous standards—delivering oil that is both vibrant and refined.",
  },
];


const bottleContent: BottleContentItem[] = [
  {
    imgSrc: "/assets/img/3.png",
    bottleBody: (
      <>
        <strong className="font-semibold text-neutral-900">A fragrant expression of Greece.</strong>{" "} A refined blend of premium extra virgin
        olive oil infused with the aromatic essence of Greek oregano.{" "}

        Carefully crafted, this flavourful oil brings herbal depth and earthy
        freshness to your dishes,

        evoking sun-drenched hillsides and the timeless spirit of Greek cuisine.
        Ideal for drizzling, finishing, and elevating everyday meals with
        authentic Mediterranean character.
      </>
    ),
    highlighted: "Oleaura Oregano Extra Virgin Olive Oil ",
  },
  {
    imgSrc: "/assets/img/4.png",
    bottleBody: (
      <>
        <strong className="font-semibold text-neutral-900">A savoury symphony of flavours.</strong>{" "}

        A masterful blend of premium extra virgin
        olive oil and the bold essence of raw garlic.

        This exquisite flavoured olive oil adds depth and richness to any dish,
        transforming everyday meals into true culinary highlights.

        Perfect for those following a low-FODMAP diet—or anyone seeking the full
        flavour of garlic without the preparation.
      </>
    ),
    highlighted: "Oleaura Black Garlic Extra Virgin Olive Oil",
  },
  {
    imgSrc: "/assets/img/2.png",
    bottleBody: (
      <>
        <strong className="font-semibold text-neutral-900">A spicy culinary adventure. </strong> A harmonious blend of premium extra virgin
        olive oil and the vibrant heat of chilli peppers.{" "}

        Expertly crafted, this flavourful oil adds a lively kick to your cooking,
        awakening the palate with every drop.

      </>
    ),
    highlighted: "Oleaura Chilli Extra Virgin Olive Oil",
  },
  {
    imgSrc: "/assets/img/1.png",
    bottleBody: (
      <>
        <strong className="font-semibold text-neutral-900">A bright and zesty experience. </strong> Premium extra virgin olive oil meets the
        refreshing essence of sun-ripened lemons in this skillfully crafted oil.{" "}

        It adds a vibrant citrus dimension to your dishes, infusing every meal
        with a burst of sunny flavour.

      </>
    ),
    highlighted: "Oleaura Lemon Extra Virgin Olive Oil",
  },
];

// -------------------- FLOATING CONTACT --------------------
const FloatingContact: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);

  const [status, setStatus] = React.useState<{
    type: "success" | "error" | null;
    msg: string;
  }>({ type: null, msg: "" });

  const WEB3FORMS_ACCESS_KEY = "50407d8f-7426-4a8f-b602-3769cb3a82d1";

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[999]">
      {open && (
        <div className="mb-3 sm:mb-4 w-[280px] sm:w-[320px] rounded-2xl shadow-2xl border border-white/20 overflow-hidden contact-pop">
          <div className="bg-greenBg px-4 py-3 flex items-center justify-between">
            <p className="text-white font-outfit font-semibold">Contact Us</p>
            <button
              onClick={() => {
                setOpen(false);
                setStatus({ type: null, msg: "" });
              }}
              className="text-white/90 hover:text-white text-xl leading-none"
              aria-label="Close contact form"
              type="button"
            >
              ×
            </button>
          </div>

          <form
            className="bg-white/90 backdrop-blur px-4 py-4"
            onSubmit={async (e) => {
              e.preventDefault();
              if (submitting) return;

              setSubmitting(true);
              setStatus({ type: null, msg: "" });

              try {
                const formEl = e.currentTarget;

                const formData = new FormData(formEl);
                formData.append("access_key", WEB3FORMS_ACCESS_KEY);

                const res = await fetch("https://api.web3forms.com/submit", {
                  method: "POST",
                  body: formData,
                });

                const data = await res.json();

                if (data?.success) {
                  formEl.reset();

                  setStatus({
                    type: "success",
                    msg: "✅ Thanks! Your message has been sent successfully. We’ll get back to you shortly.",
                  });

                  setTimeout(() => {
                    setOpen(false);
                    setStatus({ type: null, msg: "" });
                  }, 1800);
                } else {
                  setStatus({
                    type: "error",
                    msg:
                      data?.message ||
                      "⚠️ Sorry, we couldn’t send your message right now. Please try again.",
                  });
                }
              } catch {
                setStatus({
                  type: "error",
                  msg: "⚠️ Network error. Please check your connection and try again.",
                });
              } finally {
                setSubmitting(false);
              }
            }}
          >
            <label className="block text-sm font-outfit text-greenTextDark mb-1">
              Name
            </label>
            <input
              required
              name="name"
              className="w-full rounded-lg border border-greenTextDark/20 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-greenBg/40"
              placeholder="Your name"
            />

            <label className="block text-sm font-outfit text-greenTextDark mt-3 mb-1">
              Email
            </label>
            <input
              required
              type="email"
              name="email"
              className="w-full rounded-lg border border-greenTextDark/20 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-greenBg/40"
              placeholder="you@example.com"
            />

            <label className="block text-sm font-outfit text-greenTextDark mt-3 mb-1">
              Message
            </label>
            <textarea
              required
              name="message"
              rows={4}
              className="w-full rounded-lg border border-greenTextDark/20 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-greenBg/40"
              placeholder="How can we help?"
            />

            <button
              type="submit"
              disabled={submitting}
              className="mt-4 w-full rounded-xl bg-greenBg text-white font-outfit font-semibold py-2 hover:opacity-95 active:opacity-90 transition disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {submitting ? "Sending..." : "Send"}
            </button>

            {status.type && (
              <div
                className={`mt-3 rounded-xl px-3 py-2 text-xs font-outfit leading-relaxed border ${status.type === "success"
                  ? "bg-green-50/80 border-green-200 text-green-900"
                  : "bg-red-50/80 border-red-200 text-red-900"
                  }`}
              >
                {status.msg}
              </div>
            )}

            <p className="mt-2 text-xs text-greenTextDark/70 font-outfit text-center">
              We’ll get back to you soon.
            </p>
          </form>
        </div>
      )}

      <button
        onClick={() => {
          setOpen((v) => !v);
          setStatus({ type: null, msg: "" });
        }}
        className="rounded-full bg-greenBg text-white shadow-xl px-4 py-3 sm:px-5 font-outfit font-semibold hover:opacity-95 active:opacity-90 transition contact-fab"
        type="button"
        aria-label="Open contact form"
      >
        {open ? "Close" : "Contact"}
      </button>
    </div>
  );
};

// -------------------- PAGE --------------------
const MainPage: React.FC = () => {
  return (
    <>
      <header>
        <section className="relative w-full">
          <div className="flex bg-greenPrimay h-32 sm:h-44 z-10" />

          <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-greenPrimay rounded-full z-10 p-6 sm:p-10">
            <img
              src="/assets/logo/logo.png"
              alt="logo"
              className="w-auto h-28 sm:h-40 z-10 hover:scale-[1.02] transition-transform duration-500"
            />
          </div>

          <div className="relative z-0 flex justify-center w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
            <img
              src="/assets/img/Banner3.png"
              alt="banner"
              className="absolute flex mx-auto inset-0 w-full h-full object-cover banner-zoom"
            />
          </div>
        </section>
      </header>

      <main style={{ backgroundImage: "url(/assets/img/bg-red.png)" }}>
        <section id="about" className="px-6 transition-all sm:px-16 lg:px-24 py-8 sm:py-16 lg:py-24 no-repeat center cover">
          <div className="flex max-w-7xl pt-10 mx-auto justify-between flex-col lg:flex-row gap-10 lg:gap-0">
            <div className="w-full">
              <h2 className="font-funkyFont text-[#0c2000] pb-3 md:pb text-3xl sm:text-4xl">
                Welcome to the true taste <br /> of the Mediterranean
              </h2>

              <p className="md:py-8 text-[17px] leading-relaxed font-outfit text-neutral-800">
                {pageTextContent[0].highlight && (
                  <span className="font-semibold text-blue-900 text-lg">
                    {pageTextContent[0].highlight}
                  </span>
                )}{" "}
                {pageTextContent[0].content}
                <br />
                <br />
                {pageTextContent[1].content}
                <br />
                <br />
                {pageTextContent[2].content}.
              </p>
            </div>

            <div className="w-full py-10 flex items-center justify-center">
              <img
                src="/assets/logo/logo.png"
                alt="Oleaura Logo"
                className="w-[65%] sm:w-[50%] lg:w-[60%] hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>
        </section>

        <section className="flex justify-end flex-col lg:flex-row">
          <div className="justify-end flex ml-0 lg:ml-8 w-full lg:w-[25%] px-6 sm:px-16 lg:px-0">
            <img
              src="/assets/img/olive-about.jpeg"
              alt="olive image"
              className="w-full hover:rotate-[-1deg] hover:scale-[1.01] transition-transform duration-500"
            />
          </div>

          <div className="w-full lg:w-[80%] py-8 sm:py-16 lg:py-24 bg-greenBg my-8 flex flex-col items-start justify-center">
            <h2 className="font-funkyFont px-6 sm:px-16 lg:px-24 pb-4 text-white text-3xl sm:text-4xl">
              Freshness
            </h2>

            <p className="text-white/95 px-6 sm:px-16 lg:px-24 text-lg leading-relaxed font-outfit max-w-3xl">
              Oleaura is more than olive oil — it’s a daily taste experience. Crafted for everyday cooking, it brings the freshness of the Mediterranean and the authentic taste of Greece to your kitchen, inspiring meals meant to be cooked, shared, and savoured.
            </p>
          </div>
        </section>

        <section className="relative w-full flex flex-col items-center justify-center 
        py-8 sm:py-16 lg:py-24 overflow-hidden">
          <div className="relative flex items-center justify-center text-center overflow-hidden">

            {/* Extra Special (Base Layer) */}
            <h1
              className="
      font-light text-greenTextDark font-serif uppercase tracking-tight fade-in
      text-[42px]
      sm:text-[70px]
      md:text-[110px]
      lg:text-[170px]
      leading-none
    "
            >
              Extra Special
            </h1>


            <p
              className="
      absolute
      font-newCursive text-[#dcc07c]
      text-[70px]
      sm:text-[120px]
      md:text-[140px]
      lg:text-[160px]
      leading-none
      z-20
      opacity-90
    "
            >
              premium
            </p>

          </div>



          <img
            src="/assets/img/abs-1.png"
            alt="abstract"
            className="absolute left-0 w-[60%] sm:w-[50%] z-0 opacity-90"
          />
          <img
            src="/assets/img/abs-2.png"
            alt="abstract"
            className="absolute -right-16 -bottom-36 w-[55%] sm:w-[45%] lg:w-[40%] z-0 opacity-90"
          />

          <img
            src="/assets/img/two-bottle.png"
            alt="olive-bottles"
            className="w-[90%] sm:w-[70%] lg:w-[60%] z-10 hover:scale-[1.01] mt-[2rem] transition-transform duration-700 ease-out"
          />

          <div className="max-w-7xl z-10 py-10 sm:pt-16 lg:pt-24 px-6 sm:px-16 lg:px-24">
            <p className="w-full lg:w-[70%] text-lg leading-relaxed font-outfit text-neutral-800">
              <p className="font-semibold text-blue-900 mb-[0.5rem] text-lg">
                Extra Virgin Olive Oil{" "} <br />
              </p>
              Oleaura Premium Extra Special Extra Virgin Olive Oil is cold-extracted
              from carefully selected olives to deliver a clean, balanced profile with
              gentle fruitiness and a refined peppery finish. Creatively designed and
              specially packed, each bottle is crafted to protect freshness and elevate
              the oil’s unique  character.
              <br />
              <br />
              <p className="font-semibold text-blue-900 mb-[0.5rem]    text-lg">Virgin Olive Oil <br /> </p>
              Oleaura Premium Extra Special Virgin Olive Oil offers a softer, rounded
              flavour suited for everyday cooking, with dependable quality and smooth
              performance. Thoughtfully designed packaging complements its subtle taste,
              ensuring both freshness and a refined presentation.
            </p>
          </div>
        </section>

        <section className="relative w-full" id="range">
          <h1 className="font-funkyFont bg-greenBg flex justify-end py-10 px-6 sm:px-16 text-white z-20 text-5xl sm:text-7xl lg:text-9xl">
            Available Formats
          </h1>

          <div className="flex flex-col items-center">
            <div className="pt-10 px-6 sm:px-0">
              <img
                src="/assets/img/all-bottle.png"
                alt="all-bottles"
                className="hover:scale-[1.01] transition-transform duration-700 max-w-full"
              />
            </div>

            <p className="py-8 sm:py-16 w-[92%] sm:w-[70%] lg:w-1/2 mx-auto text-[17px] leading-relaxed text-neutral-800">
              {pageTextContent[0].highlight && (
                <span className="font-semibold font-outfit text-blue-900 text-lg">
                  {pageTextContent[0].highlight}
                </span>
              )}{" "}
              {pageTextContent[0].content}
              <br />
              <br />
              {pageTextContent[1].content}
            </p>

            <img
              src="/assets/logo/trans-logo.png"
              alt="Logo"
              className="absolute h-[50%] right-0 bottom-0"
            />
          </div>
        </section>

        <section className="w-full  flex items-center ">
          <div className="w-full items-center justify-center flex px-6 sm:px-16 lg:px-24">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {contentInBox.map((box, i) => (
                <div
                  key={i}
                  className="
                    group flex flex-col items-center justify-center
                    py-12 px-8 text-center w-full
                    bg-white/80 backdrop-blur-sm
                    rounded-sm
                    shadow-lg
                    border border-white/40
                    hover:-translate-y-1 hover:shadow-xl
                    transition-all duration-500
                  "
                >
                  <img
                    src={box.imgSrc}
                    alt="icon"
                    className="h-20 group-hover:scale-[1.04] transition-transform duration-500"
                  />

                  <h2 className="uppercase font-outfit font-semibold text-lg pt-8 pb-4">
                    {box.headTxt}
                  </h2>

                  <p className="font-outfit text-[15.5px] leading-relaxed text-neutral-700">
                    {box.bodyTxt}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>


        <section className="relative ">
          <motion.img
            src="/assets/img/infused-range.png"
            alt="Infused Range"
            className="w-[50%] relative z-0"
            initial={{ x: -150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.4 }}
          />

          <h1 className="font-funkyFont bg-[#a63f16] flex justify-end py-10 px-6 sm:px-16 text-white z-20 text-5xl sm:text-7xl lg:text-9xl">
            Artisan Edition
          </h1>
        </section>

        <section className="relative mx-auto py-16 md:py-20 overflow-hidden">
          <div
            className="
              relative z-20 max-w-7xl mx-auto
              flex flex-col items-center justify-center
              px-6 sm:px-10
              gap-10 sm:gap-12 lg:gap-12
            "
          >
            <p className="text-center text-lg leading-relaxed w-full sm:w-[90%] lg:w-[90%]  text-neutral-800">

              <p className="font-semibold font-outfit text-blue-900 mb-[0.5rem] text-xl">
                Oleaura Infused Extra Virgin Olive Oil
                <br />
              </p>
              A harmonious blend of premium extra virgin olive oil and carefully selected natural flavors, crafted to elevate every dish with freshness and finesse. Our oil is combined with naturally derived extracts, allowing the flavors to meld beautifully while preserving their heart-healthy benefits and exceptional taste. Thanks to this meticulous process, the Oleaura Artisan Edition maintains its quality and can be enjoyed by those following a low FODMAP diet.

            </p>


            {bottleContent.map((bot, i) => (
              <div
                key={i}
                className={`flex items-center justify-center w-full gap-6 sm:gap-8 lg:gap-0 
                  flex-col lg:flex-row ${i % 2 !== 0 ? "lg:flex-row-reverse" : ""
                  }`}
              >
                <img
                  src={bot.imgSrc}
                  alt="single-bottle"
                  className={`w-[75%] sm:w-[40%] lg:w-[60%] drop-shadow-xl 
                    transition-transform duration-700 ease-out hover:scale-[1.03] 
                    hover:-rotate-1 ${i % 2 === 0 ? "float-slow" : "float-fast"
                    }`}
                />

                <p className="text-center text-lg leading-relaxed w-full sm:w-[75%] lg:w-[40%]  text-neutral-800">
                  {bot.highlighted && (
                    <p className="font-semibold font-outfit mb-[0.5rem] text-blue-900 text-xl">
                      {bot.highlighted}
                      <br />
                    </p>
                  )}{" "}
                  {bot.bottleBody}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="relative w-full hidden md:block">
          {/* Image */}
          <img
            src="/assets/img/bottle-last.png"
            alt="olive oil desktop"
          />

          {/* Text Overlay */}
          <div
            className="
    w-full z-10 absolute left-1/2 -translate-x-1/2
    md:top-[270px] sm:top-[360px] lg:top-[380px] xl:top-[500px]
    px-5 sm:px-6
    text-left text-white
    max-w-lg sm:max-w-2xl
  "
          >
            {/* Heading */}
            <h2 className="text-xl sm:text-2xl md:text-2xl mb-[1.5rem] lg:text-3xl font-semibold font-outfit leading-snug">
              THE OLEAURA OLIVE OIL PROCESS
            </h2>

            {/* Intro paragraph */}
            <p className="text-[15px] mb-[1.5rem] sm:text-base md:text-base lg:text-lg leading-relaxed text-white/95">
              At Oleaura, every drop of our olive oil reflects dedication, tradition,
              and care. Sourced exclusively from select Greek groves, our process
              ensures the purest, most flavorful oil reaches your table.
            </p>

            {/* Steps */}
            <ol className=" ">
              <li className="text-[14px] sm:text-[15px] md:text-[15px] mb-[1rem] lg:text-[17px] leading-relaxed">
                <span className="font-semibold text-blue-200">
                  1. Hand-Picked Olives <br />
                </span>
                Our olives are carefully harvested at peak ripeness to preserve their
                aroma, flavor, and nutrients.
              </li>

              <li className="text-[14px] sm:text-[15px] md:text-[15px] mb-[1rem] lg:text-[17px] leading-relaxed">
                <span className="font-semibold text-blue-200">
                  2. Cold Pressed Extraction <br />
                </span>
                Using traditional cold-press methods, we extract the oil without heat or
                chemicals, ensuring maximum freshness and health benefits.
              </li>

              <li className="text-[14px] sm:text-[15px] md:text-[15px] mb-[1rem] lg:text-[17px] leading-relaxed">
                <span className="font-semibold text-blue-200">
                  3. Filtration & Quality Control <br />
                </span>
                Each batch is filtered and rigorously tested for purity, acidity, and
                taste to meet our premium standards.
              </li>

              <li className="text-[14px] sm:text-[15px] md:text-[15px] mb-[1rem] lg:text-[17px] leading-relaxed">
                <span className="font-semibold text-blue-200">
                  4. Bottled with Care <br />
                </span>
                From grove to bottle, Oleaura olive oil is stored in dark glass bottles
                to maintain its rich flavor, golden color, and natural antioxidants.
              </li>
            </ol>
          </div>
        </section>

        <section className="relative w-full block md:hidden">
          {/* Image */}
          <img
            src="/assets/img/bottle-last-mobile.png"
            alt="olive oil"
          />

          {/* Text Overlay */}
          <div
            className="
      w-full z-10 absolute top-44 sm:top-32 left-1/2 -translate-x-1/2
      px-5 sm:px-6
      text-left text-white
      max-w-lg sm:max-w-2xl
    "
          >
            {/* Heading */}
            <h2 className="text-xl sm:text-2xl font-semibold  mb-[1rem] font-outfit leading-snug">
              THE OLEAURA OLIVE OIL PROCESS <br />
            </h2>

            {/* Intro paragraph */}
            <p className="pt-3 sm:pt-4 text-[15px] mb-[1rem] leading-relaxed text-white/95">
              At Oleaura, every drop of our olive oil reflects dedication, tradition,
              and care. Sourced exclusively from select Greek groves, our process
              ensures the purest, most flavorful oil reaches your table.
            </p>

            {/* Steps */}
            <ol className="mt-1 sm:mt-2 space-y-2 sm:space-y-3">
              <li className="text-[14px] mb-[1.5rem] leading-relaxed">
                <span className="font-semibold text-blue-200">
                  1. Hand-Picked Olives <br />
                </span>{" "}
                Our olives are carefully harvested at peak ripeness to preserve their
                aroma, flavor, and nutrients.
              </li>

              <li className="text-[14px] mb-[1.5rem] leading-relaxed">
                <span className="font-semibold text-blue-200">
                  2. Cold Pressed Extraction <br />
                </span>{" "}
                Using traditional cold-press methods, we extract the oil without heat or
                chemicals, ensuring maximum freshness and health benefits.
              </li>

              <li className="text-[14px] mb-[1rem] leading-relaxed">
                <span className="font-semibold text-blue-200">
                  3. Filtration & Quality Control <br />
                </span>{" "}
                Each batch is filtered and rigorously tested for purity, acidity, and
                taste to meet our premium standards.
              </li>

              <li className="text-[14px] mb-[1rem] leading-relaxed">
                <span className="font-semibold text-blue-200">
                  4. Bottled with Care <br />
                </span>{" "}
                From grove to bottle, Oleaura olive oil is stored in dark glass bottles
                to maintain its rich flavor, golden color, and natural antioxidants.
              </li>
            </ol>
          </div>
        </section>




      </main>

      <footer className="relative w-full bg-greenBg pt-12 pb-8"> {/* lifted logo */}
        <div className="absolute -top-6 left-6 sm:left-16 lg:left-24">
          <div className="bg-greenBg rounded-full p-3 shadow-xl">
            <img src="/assets/logo/logo.png" alt="Oleaura Logo" className="h-12 sm:h-14 w-auto hover:scale-[1.02] 
            transition-transform duration-500" /> </div> </div> <div className="max-w-7xl mx-auto px-6 sm:px-16 lg:px-24 pt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-white font-outfit">
            {/* Company */} <div> <h3 className="font-semibold uppercase tracking-wide mb-3">Company</h3>
              <p className="text-white/80 text-[13.5px] leading-relaxed font-outfit">
                Oleaura brings the true taste of the Mediterranean with premium Greek olive oil, sourced from
                carefully selected farms and crafted for everyday excellence. </p> </div> {/* Quick Links */}
            <div> <h3 className="font-semibold uppercase tracking-wide mb-3">Quick Links</h3>
              <ul className="space-y-2 text-[13.5px] text-white/85 leading-relaxed">
                <li> <a className="hover:text-white transition" href="#about"> About </a> </li>
                <li> <a className="hover:text-white transition" href="#range"> The Range </a> </li>
                {/* <li> <a className="hover:text-white transition" href="#contact"> Contact </a> </li>  */}
              
              </ul> </div>

            {/* Contact */} <div> <h3 className="font-semibold uppercase tracking-wide mb-3">
              Get in touch</h3> <ul className="space-y-2 text-[13.5px] text-white/85 leading-relaxed">
                <li> <span className="text-white/70">Email:</span> hello@oleaura.com </li>
                <li> <span className="text-white/70">Phone:</span> +61 478 666 813 | +94 773 065 999 | <br />

                  +30 694 020 8916 </li>
              </ul> </div> </div>
          <div className="mt-10 border-t border-white/20 pt-6 flex flex-col sm:flex-row items-center 
                  justify-between gap-4 text-white/75 text-[13.5px] leading-relaxed">
            <p>© {new Date().getFullYear()} Oleaura. All rights reserved.</p>

            {/* Developer credit */} <div className="flex items-center gap-2 text-white/60">
              <span>Website developed by</span> <a href="#" className="flex items-center gap-2 hover:opacity-90
                   transition" > <img src="/assets/logo/hai-logo-2.png" alt="Hai Creations"
                  className="h-9 sm:h-9 w-auto object-contain" /> <span className="text-white hover:underline 
                   underline-offset-4"> Hai Creations </span> </a> </div> </div> </div> </footer>

      {/* Floating Contact */}
      <FloatingContact />

      <style>{`
        @keyframes floaty {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .float-slow { animation: floaty 5.5s ease-in-out infinite; }
        .float-fast { animation: floaty 4.2s ease-in-out infinite; }

        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0px); }
        }
        .fade-in { animation: fadeInUp .8s ease-out both; }

        @keyframes zoomSlow {
          0% { transform: scale(1); }
          100% { transform: scale(1.03); }
        }
        .banner-zoom { animation: zoomSlow 8s ease-in-out alternate infinite; }

        @keyframes popIn {
          0% { opacity: 0; transform: translateY(10px) scale(.98); }
          100% { opacity: 1; transform: translateY(0px) scale(1); }
        }
        .contact-pop { animation: popIn .25s ease-out both; }

        @keyframes fabPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.03); }
        }
        .contact-fab { animation: fabPulse 3.5s ease-in-out infinite; }
      `}</style>
    </>
  );
};

export default MainPage;
