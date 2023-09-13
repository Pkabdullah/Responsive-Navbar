import NavBar from "@/components/navbar";

export default function page() {
  return (
    <div>
      <NavBar />
      <section
        id="about"
        className="text-white h-screen bg-black text-center flex justify-center "
      >
        <h1 className="  m-auto font-serif text-7xl text-purple-500 font-bold">
          Hero
        </h1>
      </section>

      <section
        id="blog"
        className="text-white h-screen bg-purple-500 text-center flex justify-center"
      >
        <h1 className="m-auto font-serif text-7xl text-whitefont-bold">Blog</h1>
      </section>

      <section
        id="contact"
        className="text-white h-screen bg-black text-center flex justify-center"
      >
        <h1 className="m-auto font-serif text-7xl text-purple-500 font-bold">
          Contact
        </h1>
      </section>

      <section
        id="projects"
        className="text-white h-screen bg-purple-500 text-center flex justify-center"
      >
        <h1 className="m-auto font-serif text-7xl text-white font-bold">
          Projects
        </h1>
      </section>
    </div>
  );
}
