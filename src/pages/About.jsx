import Button from "../components/Button";
import Footer from "../components/footer";

function About() {
  return (
    <main >
      {/* <Navbar />
      <div className="mx-auto max-w-6xl px-6 py-10"></div> */}
      {/* hero */}
      <section class="py-10 px-5 bg-green-700 text-white">
        <h1 className="uppercase text-sm tracking-widest p-2 rounded-lg bg-white/10 inline-block px-3 py-1">About Us </h1>
        <h1 className="text-2xl font-bold mt-5 md:text-3xl">
          Two Core Services. One Goal: Clarity & Growth
        </h1>
        <div class="mt-10 space-x-4">
          <Button text="Get Started" />
        <Button text="View Projects" variant="secondary" />
        </div>
        
      </section>
      {/* aboutmain */}
      <section class="bg-green-600/20 rounded-xl text-white py-15 mt-20" data-aos="fade-up" >
        <div class="max-w-3xl mx-auto px-6 space-y-6">
        <h1 class="font-extrabold text-xl">Our Story</h1>
        <p class="leading-relaxed text-white/90  text-lg">
          MJK Solutions was founded because we believe people shouldn’t struggle
          to understand what you offer. Whether it’s a website or a training
          program, clarity changes everything.
        </p>
        <p class="leading-relaxed text-white/90 text-lg">
          At MJK Solutions, we believe that clarity is the foundation of growth.
          Whether it’s a website or a learning experience, your message should
          be easy to understand, purposeful, and designed to deliver results. We
          partner with businesses, educators, and teams to build digital
          solutions that are not only beautiful, but functional, structured, and
          outcome-driven. Because good design isn’t decoration — it’s
          communication.
        </p> </div>
      </section>
      {/* approach */}
     <section className="py-16">
  <div className="max-w-3xl mx-auto px-6 space-y-6" data-aos="zoom-in"> 

    <h1 className="text-2xl md:text-3xl font-bold ">
      How we help
    </h1>

    <p className=" leading-relaxed text-white text-lg " >
      We don’t believe in random design or guesswork. We ask the right
      questions first, then design solutions that truly fit.
    </p>

    <p className="font-medium">
      Every project we take on is built on:
    </p>

  <ul className="grid gap-4 sm:grid-cols-2">
  <li className="bg-green-500 font-bold text-white p-4 rounded-lg">Clear goals</li>
  <li className="bg-green-500 font-bold text-white p-4 rounded-lg">Thoughtful structure</li>
  <li className="bg-green-500 font-bold text-white p-4 rounded-lg">User-focused decisions</li>
  <li className="bg-green-500 font-bold text-white p-4 rounded-lg">Measurable outcomes</li>
</ul>


  </div>
</section>

      {/* mission-vision  */}
      <section className="py-16 ">
  <div className="max-w-5xl mx-auto px-6 grid gap-8 md:grid-cols-2">

    <div className="border-2 border-green-600 p-8 rounded-xl space-y-4 bg-white/20 text-white">
      <h2 className="text-xl font-bold ">Mission</h2>
      <p className="leading-relaxed ">
        To help businesses and teams communicate clearly, operate efficiently,
        and grow through purposeful digital and learning solutions.
      </p>
    </div>

    <div className="border-2 border-green-600 p-8 rounded-xl space-y-4 bg-white/20 text-white">
      <h2 className="text-xl font-bold">Vision</h2>
      <p className="leading-relaxed">
        To become a trusted partner for organizations seeking clarity,
        structure, and meaningful impact in the digital and learning space.
      </p>
    </div>

  </div>
</section>

      <Footer/>
    </main>
  );
}

export default About;
