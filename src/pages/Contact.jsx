import Footer from "../components/Footer";
import Button from "../components/Button";

export default function Contact() {
  return (
    <main className="min-h-screen bg-green-900 text-white">

      {/*  HERO  */}
      <section className="py-20 px-6 text-center">
        <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl px-8 py-14 shadow-2xl">
          <h1 className="text-4xl font-bold md:text-5xl">Let’s work together</h1>
          <p className="mt-5 text-white/80 max-w-2xl mx-auto">
            Have a project in mind or need help clarifying your ideas?
            We’d love to hear from you. Send a message and we’ll discuss the best
            way forward.
          </p>
        </div>
      </section>

      {/*  CONTACT GRID  */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-10 md:grid-cols-2">

          {/*  FORM  */}
          <div className="rounded-2xl border border-white/10 bg-white/10 p-8 shadow-lg">
            <h2 className="text-xl font-semibold">Send a message</h2>

            <form className="mt-6 space-y-5">
              <div>
                <label className="text-sm text-white/70">Name</label>
                <input
                  type="text"
                  className="mt-2 w-full rounded-lg bg-black/20 px-4 py-3 outline-none border border-white/10 focus:border-green-400"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="text-sm text-white/70">Email</label>
                <input
                  type="email"
                  className="mt-2 w-full rounded-lg bg-black/20 px-4 py-3 outline-none border border-white/10 focus:border-green-400"
                  placeholder="you@email.com"
                />
              </div>

              <div>
                <label className="text-sm text-white/70">Message</label>
                <textarea
                  rows="4"
                  className="mt-2 w-full rounded-lg bg-black/20 px-4 py-3 outline-none border border-white/10 focus:border-green-400"
                  placeholder="Tell us about your project..."
                />
              </div>

              <Button text="Send Message" />
            </form>
          </div>

          {/*  CONTACT INFO  */}
          <div className="rounded-2xl border border-white/10 bg-white/10 p-8 shadow-lg">
            <h2 className="text-xl font-semibold">Contact details</h2>

            <div className="mt-6 space-y-6 text-white/85">
              <div>
                <p className="text-sm text-white/60">Email</p>
                <p className="font-medium">contact@mjk.com</p>
              </div>

              <div>
                <p className="text-sm text-white/60">Phone</p>
                <p className="font-medium">+2348148309053</p>
              </div>

              <div>
                <p className="text-sm text-white/60">Location</p>
                <p className="font-medium">Ogun, Nigeria</p>
              </div>

              <div className="pt-4 border-t border-white/10 text-sm text-white/70">
                Typically respond within 24 hours.
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
