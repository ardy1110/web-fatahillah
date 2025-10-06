import About from "./components/About";
import Landing from "./components/Landing";

export default function Home() {
  return (
    <>
    <div>
      <Landing/>
    </div>
      <div>
        <About/>
      </div>
      {/* Isi Halaman About  */}
      <div className="flex items-center justify-center h-dvh bg-blue-900 m-2 rounded-2xl">
        <h1 className="text-3xl">About Content</h1>
      </div>
      {/* Isi Halaman Map  */}
      <div className="flex items-center justify-center h-dvh bg-green-900 m-2 rounded-2xl">
        <iframe
          className="w-full h-dvh p-8"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.2351077229428!2d95.30465977420894!3d5.532101994448091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30403b0003db853d%3A0x180858a4a9d2d4fa!2sWarkop%20Fatahillah!5e0!3m2!1sid!2sid!4v1759661072583!5m2!1sid!2sid"
          loading="lazy"
        ></iframe>
      </div>
    </>
  );
}
