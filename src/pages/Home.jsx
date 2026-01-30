import Button from "../components/Button";
import Strip from "../components/Strip";
import Footer from "../components/footer";

function Home() {
  return (
    <main className="min-h-screen bg-green-900 text-white">
      {/* container */}
      <div className="mx-auto max-w-6xl px-6 py-14">
        {/* hero section */}

        <section className="text-center" data-aos="fade-up">
          <p className="bg-white/10 rounded-4xl mx-auto inline-block px-4 py-2 text-sm">
            MJK Solutions &bull; Web Development & Instructional design
          </p>
          <h1 className=" mt-5 text-4xl font-bold leading-tight md:text-5xl">
            Build Websites that Convert.{" "}
            <span className="block">Create Learning that Drives Results.</span>
          </h1>
          <p className="mx-auto max-w-2xl mt-5">
            We help businesses and teams communicate clearly, look
            professional,and get measurable outcomes through modern web builds
            and instructional design
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Strip text="Responsive Builds" />

            <Strip text="Outcome-driven Learning" />
            <Strip text="Clear Structure" />
            <Strip text="Continuous Support" />
          </div>
          <div className="flex justify-center gap-4 mt-5">
            {" "}
            <Button text="Get Started" />{" "}
            <Button text="View Projects" variant="secondary" />{" "}
          </div>
        </section>
        {/* aboutus */}
        <section
          className=" mt-16 rounded-xl bg-white/10 p-8 md:p-16  "
          data-aos="fade-up"
          data-aos-delay="700"
        >
          <h1 className="uppercase text-sm tracking-widest">About Us </h1>
          <h1 className="text-2xl font-bold mt-5 md:text-3xl">
            Two Core Services. One Goal: Clarity & Growth
          </h1>
          <p className=" mt-5 mx-auto max-w-2xl leading-relaxed">
            Whether you are launching a business, upgrading your online presence
            or building training content for a team, MJK Solutions helps you
            communicate better and convert more.
          </p>
        </section>
        {/* services */}
        <section className="mt-16" data-aos="fade-up">
          <div className="text-center">
            <h1 className="uppercase text-sm tracking-widest ">Services</h1>
            <h1 className="text-2xl font-bold mt-5 md:text-3xl">
              What we can help you build
            </h1>{" "}
          </div>
          <div className="grid md:grid-cols-2 gap-6 mt-10">
            <div
              className="rounded-2xl bg-white/10 p-8"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h1>Web Development</h1>
              <p>
                We create responsive, visually appealing websites designed to
                convert visitors into clients.
              </p>
              <ul className="space-y-2 mt-5">
                <li>• Landing Pages & Business Websites</li>
                <li>• Mobile-first Responsive Websites</li>
                <li>• Clean UI + Fast Performance</li>
              </ul>
            </div>
            <div
              className="rounded-2xl bg-white/10 p-8"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h1>Instructional Design</h1>
              <p>
                {" "}
                We design courses, training materials, and learning experiences
                that improve performance and drive results.
              </p>
              <ul className="space-y-2 mt-5">
                <li>• Course Design and Storyboarding</li>
                <li>• Training Decks & Learning Resources</li>
                <li>• Assessments and Evaluation Alignment</li>
              </ul>
            </div>
          </div>
        </section>
        {/* why mjk */}
        <section className="bg-white/10 p-8 md:p-10  mt-16">
          <div className="text-center">
            <h1 className="uppercase text-sm tracking-widest">Why MJK</h1>
            <h1 className="mt-3 text-2xl md:text-3xl font-bold">
              Why Clients Choose MJK Solutions
            </h1>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Clear, easy-to-understand solutions",
              "Results-focused execution",
               "Structured process & timely delivery",
              "Reliable long-term support",
            ].map((item, i) => (
              <div
                key={item}
                data-aos="fade-up"
                data-aos-delay={i * 120}
                className="rounded-xl bg-black/20 p-5 text-center text-white/90"
              >
                {item}
              </div>
            ))}
          </div>
        </section>
        {/* CTA */}
        <section className="mt-16 text-center" data-aos="zoom-in">
          <h2 className="text-2xl font-bold md:text-3xl">
            Ready to build something solid?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/80">
            Let’s discuss what you’re building and the best way to bring it to
            life clearly, professionally, and effectively.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button text="Book a Call" />
            <Button text="Send a Message" />
          </div>
        </section>
      </div>
      <Footer />

    </main>
  );
}
export default Home;
