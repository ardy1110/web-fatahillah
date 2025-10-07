import About from "./components/About";
import ContactMap from "./components/ContactMap";
import Landing from "./components/Landing";

export default function Home() {
  return (
    <>
      <div>
        <Landing />
      </div>

      <div>
        <About />
      </div>

      <div>
        <ContactMap />
      </div>
    </>
  );
}
