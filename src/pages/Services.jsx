import Button from "../components/Button";
import CheckItem from "../components/Check";
import Footer from "../components/footer";

function Services() {
  return (
    <main>
      {/* hero */}
      {/* hero */}
      <section className="py-20 px-6" dara-aos="zoom-in">
        <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-linear-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl shadow-2xl px-8 py-12 md:px-14 md:py-16 text-center text-white">
          <span className="inline-block rounded-full bg-white/10 px-4 py-2 text-sm text-white/70">
            Our Services
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
            Create Performance-Focused Solutions
          </h1>

          <p className="mt-5 mx-auto max-w-2xl text-white/80 leading-relaxed">
            We design digital experiences and learning solutions that help
            businesses communicate clearly, operate efficiently, and achieve
            measurable results.
          </p>
          <Button text="Get in Touch" variant="secondary" />
        </div>
      </section>

      {/* service card */}
      <section className="grid gap-8 md:grid-cols-2 mt-5" data-aos="fade-up">
        {/* card1 */}
        <div className="bg-white/10 p-6 rounded-xl shadow-lg ">
          <h1 className="text-2xl font-bold md:text-3xl">Web Development</h1>
          <p className="mt-4 text-white/80 leading-relaxed">
            We design and build modern, responsive websites that help your
            business look professional, build trust, and convert visitors into
            clients. Our focus isn’t just design. It’s performance, usability,
            and clarity. Every page is structured to guide users toward action
            and deliver real results.
          </p>
          <ul className=" mt-6 space-y-3 text-sm tex-white/90">
            <CheckItem> Business and corporate websites</CheckItem>
            <CheckItem> Landing pages that convert</CheckItem>
            <CheckItem> Mobile-first responsive design</CheckItem>
            <CheckItem> Speed and performance optimization</CheckItem>
            <CheckItem> Ongoing updates and support</CheckItem>
          </ul>
        </div>
        {/* card2 */}
        <div className="bg-white/10 p-6 rounded-xl shadow-lg ">
          <h1 className="text-2xl font-bold md:text-3xl">
            Instructional Design
          </h1>
          <p className="mt-4 text-white/80 leading-relaxed">
            We design structured learning experiences using proven models such
            as ADDIE and backward design. From needs analysis to evaluation,
            every solution is systematic, measurable, and performance-focused.
          </p>
          <ul className="mt-6 space-y-3 text-sm tex-white/90">
            <CheckItem>
              Comprehensive needs analysis & learner profiling
            </CheckItem>
            <CheckItem> Learning objectives & outcome mapping</CheckItem>
            <CheckItem> Learning materials design and development</CheckItem>
            <CheckItem> Assessments and performance evaluation</CheckItem>
            <CheckItem> Review, iteration & continuous improvement</CheckItem>
          </ul>
        </div>
      </section>
      <section className="mt-20" data-aos="fade-up">
  <div className="text-center">
    <p className="uppercase text-sm tracking-widest text-white/70">Why Choose Us</p>
    <h2 className="mt-3 text-2xl font-bold md:text-3xl">
Real Partnership Beyond Delivery    </h2>
    <p className="mx-auto mt-4 max-w-2xl text-white/80">
      We combine clarity, structure, and care to create solutions that don’t just
      look good — they actually work for your business and your learners.
    </p>
  </div>

  <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
    {[
      {
        title: "Clarity first",
        text: "We simplify complex ideas so your message is easy to understand and act on.",
      },
      {
        title: "Results-driven",
        text: "Every project is designed with measurable outcomes, not guesswork.",
      },
      {
        title: "Detail-oriented",
        text: "Thoughtful structure, clean design, and organized execution every time.",
      },
      {
        title: "People-centered",
        text: "Friendly communication, collaboration, and support you can rely on.",
      },
    ].map((item) => (
      <div
        key={item.title}
        className="rounded-2xl bg-white/10 p-7 border border-white/10 shadow-lg"
      >
        <h3 className="text-lg font-semibold">{item.title}</h3>
        <p className="mt-3 text-sm text-white/80 leading-relaxed">{item.text}</p>
      </div>
    ))}
  </div>
</section>

      {/* approach */}
  <section className="mt-20" data-aos="fade-up">
  <div className="text-center">
    <h2 className="text-2xl font-bold md:text-3xl">Our Approach</h2>
    <p className="mx-auto mt-3 max-w-2xl text-white/80">
      Every project we take on follows a clear process to ensure quality and results.
    </p>
  </div>

  {/* approach cards */}
  <div className="mt-10 grid gap-6 md:grid-cols-2">
    {[
      {
        title: "Discovery",
        text: "We work with you to understand your goals, audience, and challenges.",
      },
      {
        title: "Planning",
        text: "We structure the best solution and define clear outcomes.",
      },
      {
        title: "Building",
        text: "We design and develop with precision and clarity.",
      },
      {
        title: "Support",
        text: "We refine, improve, and support you after launch.",
      },
    ].map((item) => (
      <div
        key={item.title}
        className="rounded-2xl bg-white/10 p-8 text-white shadow-lg border border-white/10"
      >
        <h3 className="text-xl font-semibold">{item.title}</h3>
        <p className="mt-3 text-white/80 leading-relaxed">{item.text}</p>
      </div>
    ))}
  </div>
</section>
{/* CTA */} 
        <section className="mt-16 text-center" data-aos="zoom-in">
          <h2 className="text-2xl font-bold md:text-3xl">
            Ready for growth ? 
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/80">
           Reach out to discuss your needs and let's get started on creating solutions 
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button text="Book a Call" />
            <Button text="Send a Message" />
          </div>
        </section>
      <Footer />
    </main>
  );
}
export default Services;
