import React from "react";

type ContentText = {
  content: string;
  highlight?: string;
};

type BoxContent = {
  imgSrc: string;
  headTxt: string;
  bodyTxt: string;
};

type BottleContentItem = {
  imgSrc: string;
  bottleBody: string;
  highlighted: string;
};

// -------------------- CONTENT --------------------
const pageTextContent: ContentText[] = [
  {
    content:
      " is a premium excellence at a professional stangggdard. jjSourced exclusively from carefully selecjjjjjted farms across Greece, it reflects the country’s djjjjjjjijjjjjjjjjverse olive-growing regions while maintaining a and dependable character. The flavour profile is clean and well-balanced, with gentle fruitiness, subtle herbaceous notes,jjjjj and a smooth, controlled peppery finish. Its versatility ake cooking and finishing, enhancing dishes without ove",
    highlight: "Premium Greek Olive oil Oleaura",
  },
  {
    content:
      "Premium Greek Olive oil Oleaura is a premium excellence at a professional stangggdard. jjSourced exclusively from carefully selecjjjjjted farms across Greece, it reflects the country’s djjjjjjjijjjjjjjjjverse olive-growing regions while maintaining a and dependable character.",
  },
];

const contentInBox: BoxContent[] = [
  {
    imgSrc: "/assets/img/icon-1.png",
    headTxt: "Strict Selection",
    bodyTxt:
      "Premium Greek Olive oil Oleaura is a premium excellence at a professional stangggdard. jjSourced exclusively from carefully selecjjjjjted farms across Greece",
  },
  {
    imgSrc: "/assets/img/icon-2.png",
    headTxt: "Strict Selection",
    bodyTxt:
      "Premium Greek Olive oil Oleaura is a premium excellence at a professional stangggdard. jjSourced exclusively from carefully selecjjjjjted farms across Greece",
  },
  {
    imgSrc: "/assets/img/icon-3.png",
    headTxt: "Strict Selection",
    bodyTxt:
      "Premium Greek Olive oil Oleaura is a premium excellence at a professional stangggdard. jjSourced exclusively from carefully selecjjjjjted farms across Greece",
  },
  {
    imgSrc: "/assets/img/icon-4.png",
    headTxt: "Strict Selection",
    bodyTxt:
      "Premium Greek Olive oil Oleaura is a premium excellence at a professional stangggdard. jjSourced exclusively from carefully selecjjjjjted farms across Greece",
  },
];

const bottleContent: BottleContentItem[] = [
  {
    imgSrc: "/assets/img/oil.png",
    bottleBody:
      " is a premium excellence at a professional stangggdard. jjSourced exclusively from carefully selecjjjjjted farms across Greece, it reflects the country’s djjjjjjjijjjjjjjjjverse olive-growing regions while maintaining a and dependable character. The flavour profile is clean and well-balanced, with gentle fruitiness, subtle herbaceous notes,jjjjj and a smooth, controlled peppery finish. Its versatility ake cooking and finishing, enhancing dishes without ove",
    highlighted: "Premium Greek Olive oil Oleaura",
  },
  {
    imgSrc: "/assets/img/oil.png",
    bottleBody:
      " is a premium excellence at a professional stangggdard. jjSourced exclusively from carefully selecjjjjjted farms across Greece, it reflects the country’s djjjjjjjijjjjjjjjjverse olive-growing regions while maintaining a and dependable character. The flavour profile is clean and well-balanced, with gentle fruitiness, subtle herbaceous notes,jjjjj and a smooth, controlled peppery finish. Its versatility ake cooking and finishing, enhancing dishes without ove",
    highlighted: "Premium Greek Olive oil Oleaura",
  },
  {
    imgSrc: "/assets/img/oil.png",
    bottleBody:
      " is a premium excellence at a professional stangggdard. jjSourced exclusively from carefully selecjjjjjted farms across Greece, it reflects the country’s djjjjjjjijjjjjjjjjverse olive-growing regions while maintaining a and dependable character. The flavour profile is clean and well-balanced, with gentle fruitiness, subtle herbaceous notes,jjjjj and a smooth, controlled peppery finish. Its versatility ake cooking and finishing, enhancing dishes without ove",
    highlighted: "Premium Greek Olive oil Oleaura",
  },
];

// -------------------- FLOATING CONTACT --------------------
const FloatingContact: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[999]">
      {open && (
        <div className="mb-4 w-[320px] rounded-2xl shadow-2xl border border-white/20 overflow-hidden contact-pop">
          <div className="bg-greenBg px-4 py-3 flex items-center justify-between">
            <p className="text-white font-outfit font-semibold">Contact Us</p>
            <button
              onClick={() => setOpen(false)}
              className="text-white/90 hover:text-white text-xl leading-none"
              aria-label="Close contact form"
              type="button"
            >
              ×
            </button>
          </div>

          <form
            className="bg-white/90 backdrop-blur px-4 py-4"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Message sent! (Demo)");
              setOpen(false);
            }}
          >
            <label className="block text-sm font-outfit text-greenTextDark mb-1">
              Name
            </label>
            <input
              required
              className="w-full rounded-lg border border-greenTextDark/20 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-greenBg/40"
              placeholder="Your name"
            />

            <label className="block text-sm font-outfit text-greenTextDark mt-3 mb-1">
              Email
            </label>
            <input
              required
              type="email"
              className="w-full rounded-lg border border-greenTextDark/20 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-greenBg/40"
              placeholder="you@example.com"
            />

            <label className="block text-sm font-outfit text-greenTextDark mt-3 mb-1">
              Message
            </label>
            <textarea
              required
              rows={4}
              className="w-full rounded-lg border border-greenTextDark/20 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-greenBg/40"
              placeholder="How can we help?"
            />

            <button
              type="submit"
              className="mt-4 w-full rounded-xl bg-greenBg text-white font-outfit font-semibold py-2 hover:opacity-95 active:opacity-90 transition"
            >
              Send
            </button>

            <p className="mt-2 text-xs text-greenTextDark/70 font-outfit text-center">
              We’ll get back to you soon.
            </p>
          </form>
        </div>
      )}

      <button
        onClick={() => setOpen((v) => !v)}
        className="rounded-full bg-greenBg text-white shadow-xl px-5 py-3 font-outfit font-semibold hover:opacity-95 active:opacity-90 transition contact-fab"
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
        {/* Main Banner section */}
        <section className="relative w-full">
          {/* Green Line */}
          <div className="flex bg-greenPrimay h-44 z-10" />

          <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-greenPrimay rounded-full z-10 p-10">
            <img
              src="/assets/logo/logo.png"
              alt="logo"
              className="w-auto h-40 z-10 hover:scale-[1.02] transition-transform duration-500"
            />
          </div>

          <div className="relative z-0 flex justify-center w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
            <img
              src="/assets/img/Banner3.png"
              alt="banner"
              className="absolute flex mx-auto inset-0 w-full h-full object-cover banner-zoom"
            />
          </div>
        </section>
      </header>

      <main style={{ backgroundImage: "url(/assets/img/bg-red.png)" }}>
        {/* About Oleaura */}
        <section className="px-8 sm:px-16 lg:px-24 py-8 sm:py-16 lg:py-24 no-repeat center cover">
          <div className="flex max-w-7xl pt-10 mx-auto justify-between">
            <div className="w-full">
              <h2 className="font-funkyFont text-[#0c2000] text-4xl">
                Welcom to the true taste <br /> of the Mediterranean
              </h2>

              <p className="py-8 text-base font-outfit">
                {pageTextContent[0].highlight && (
                  <span className="font-semibold text-blue-800">
                    {pageTextContent[0].highlight}
                  </span>
                )}{" "}
                {pageTextContent[0].content}
                <br />
                <br />
                {pageTextContent[1].content}
              </p>
            </div>

            <div className="w-full flex items-center justify-center">
              <img
                src="/assets/logo/logo.png"
                alt="Oleaura Logo"
                className="w-[60%] hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>
        </section>

        {/* green box with image */}
        <section className="flex justify-end">
          <div className="justify-end flex ml-8 w-[25%]">
            <img
              src="/assets/img/olive.png"
              alt="olive image"
              className="w-full hover:rotate-[-1deg] hover:scale-[1.01] transition-transform duration-500"
            />
          </div>

          <div className="w-[80%] py-8 sm:py-16 lg:py-24 bg-greenBg my-8 flex flex-row items-start justify-center flex-col">
            <h2 className="font-funkyFont px-8 sm:px-16 lg:px-24 pb-4 text-white text-4xl">
              Freshness
            </h2>
            <p className="text-white px-8 text-base font-outfit sm:px-16 lg:px-24">
              {pageTextContent[0].content}
            </p>
            <p className="text-white px-8 text-base font-outfit sm:px-16 lg:px-24 mt-4">
              {pageTextContent[0].content}
            </p>
          </div>
        </section>

        {/* Extra special */}
        <section className="relative w-full flex flex-col items-center justify-center py-8 sm:py-16 lg:py-24 overflow-hidden">
          <h1 className="text-[180px] font-light text-greenTextDark font-serif uppercase tracking-tight fade-in">
            Extra Special
          </h1>

          <img
            src="/assets/img/abs-1.png"
            alt="abstract"
            className="absolute left-0 w-[50%] z-0 opacity-90"
          />
          <img
            src="/assets/img/abs-2.png"
            alt="abstract"
            className="absolute -right-16 -bottom-36 w-[40%] z-0 opacity-90"
          />

          <img
            src="/assets/img/two-bottle.png"
            alt="olive-bottles"
            className="w-[60%] z-10 hover:scale-[1.01] transition-transform duration-700 ease-out"
          />

          <div className="max-w-7xl py-10 z-10">
            <p className="w-[70%] font-outfit">{pageTextContent[1].content}</p>
          </div>
        </section>

        {/* The Range */}
        <section className="relative w-full">
          <h1 className="font-funkyFont text-9xl bg-greenBg flex justify-end py-10 px-8 text-white z-20">
            The Range
          </h1>

          <div className="flex flex-col items-center">
            <div className="pt-10">
              <img
                src="/assets/img/all-bottle.png"
                alt="all-bottles"
                className="hover:scale-[1.01] transition-transform duration-700"
              />
            </div>

            <p className="py-8 sm:py-16 w-1/2 mx-auto">
              {pageTextContent[0].highlight && (
                <span className="font-semibold text-blue-800">
                  {pageTextContent[0].highlight}
                </span>
              )}{" "}
              {pageTextContent[0].content}
              <br />
              <br />
              {pageTextContent[1].content}
            </p>
          </div>
        </section>

        {/* Boxes */}
        <section className="w-full py-16">
          <div className="flex flex-1 justify-between gap-3 px-8 sm:px-16 lg:px-24">
            {contentInBox.map((box, i) => (
              <div
                key={i}
                className="group flex flex-col items-center justify-center py-12 px-8 text-center w-full bg-white/80 rounded-sm shadow-lg border-1 border-white
                           hover:-translate-y-1 hover:shadow-xl transition-all duration-500"
              >
                <img
                  src={box.imgSrc}
                  alt="icon"
                  className="h-12 group-hover:scale-[1.04] transition-transform duration-500"
                />
                <h2 className="uppercase font-outfit font-semibold py-8 pb-5">
                  {box.headTxt}
                </h2>
                <p className="font-outfit">{box.bodyTxt}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Bottle page */}
        <section className="relative mx-auto py-20">
          <div className="relative flex px-10 z-20 max-w-7xl flex-col items-center gap-44 justify-center">
            {bottleContent.map((bot, i) => (
              <div
                key={i}
                className={`flex items-center gap-44 justify-center ${
                  i % 2 !== 0 ? "flex-row-reverse" : ""
                }`}
              >
                <img
                  src={bot.imgSrc}
                  alt="single-bottle"
                  className={`w-[20%] drop-shadow-xl transition-transform duration-700 ease-out hover:scale-[1.03] hover:-rotate-1 ${
                    i % 2 === 0 ? "float-slow" : "float-fast"
                  }`}
                />

                <p className="text-center text-base w-[40%]">
                  {bot.highlighted && (
                    <span className="font-semibold text-blue-800">
                      {bot.highlighted}
                    </span>
                  )}{" "}
                  {bot.bottleBody}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-greenBg w-full py-20 -translate-y-20 z-0 absolute inset-x-0" />
        </section>

        {/* Last section */}
        <section className="py-20 px-10 w-full overflow-hidden">
          <div className="flex">
            <div className="w-[60%]">
              <p className="text-center text-base px-8">
                {pageTextContent[0].highlight && (
                  <span className="font-semibold text-blue-800">
                    {pageTextContent[0].highlight}
                  </span>
                )}{" "}
                {pageTextContent[0].content}
                <br />
                <br />
                {pageTextContent[1].content}
              </p>
            </div>

            <div className="flex justify-end">
              <img
                src="/assets/img/oil.png"
                alt="oil-bottle"
                className="w-[80%] -rotate-[20deg] translate-x-10 drop-shadow-2xl float-slow hover:scale-[1.02] transition-transform duration-700"
              />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full bg-greenBg py-10">
        <div className="max-w-7xl mx-auto px-8 sm:px-16 lg:px-24 flex justify-center">
          <img
            src="/assets/logo/logo.png"
            alt="Oleaura Logo"
            className="h-16 w-auto hover:scale-[1.02] transition-transform duration-500"
          />
        </div>
      </footer>

      {/* Floating Contact */}
      <FloatingContact />

      {/* Tiny animations (subtle) */}
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
