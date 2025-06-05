import ContactForm from "@/components/ContactForm";
import { Metadata, Viewport } from "next";
import { Instrument_Sans, Alfa_Slab_One } from "next/font/google";

const instrumentSans = Instrument_Sans({ subsets: ["latin"] });
const alfaSlabOne = Alfa_Slab_One({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Hevasoft",
  description:
    "Technical solutions for businesses of all sizes. Leave it to us.",
  keywords: [
    "Hevasoft",
    "make a website",
    "software development",
    "web development",
    "system integration",
    "automation",
    "cloud solutions",
    "consulting",
    "mobile apps",
    "technology services",
    "IT consulting",
  ],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function Page() {
  return (
    <>
      <div className="flex flex-col w-full mt-15">
        <div className={"flex flex-col w-full items-center gap-12 pb-30 px-1"}>
          <h1
            className={`${alfaSlabOne.className} text-5xl sm:text-6xl text-center`}
          >
            Elevate your business
          </h1>
          <img
            src={"/img/stepping-up.svg"}
            alt="hero"
            className="w-full max-w-xl"
          />
          <p className={`${instrumentSans.className} text-2xl text-center`}>
            Technical solutions for businesses of all sizes. Leave it to us.
          </p>
          <div
            className={`${instrumentSans.className} flex flex-col justify-start`}
          >
            <a
              href="#contact-us"
              className="mx-auto text-center bg-neutral-500 hover:bg-neutral-700 hover:cursor-pointer transition text-neutral-200 font-semibold rounded-full px-12 py-4 select-none"
            >
              GET IN TOUCH
            </a>
            <span
              className={`${instrumentSans.className} text-sm font-semibold mt-5`}
            >
              Let&apos;s have a chat. No expectations, no obligations.
            </span>
          </div>
        </div>
        <div
          id="services"
          className={"flex flex-col w-full items-center gap-10 py-30 px-1"}
        >
          <span
            className={`${alfaSlabOne.className} text-5xl sm:text-6xl text-center`}
          >
            What we do
          </span>
          <div
            className={`${instrumentSans.className} w-full flex flex-col sm:flex-row sm:gap-15 justify-center text-xl leading-10`}
          >
            <ul className={`text-center`}>
              <li>Websites</li>
              <li>Software</li>
              <li>System Integrations</li>
              <li>Web Apps</li>
            </ul>
            <ul className="text-center">
              <li>Automation</li>
              <li>Consulting</li>
              <li>Cloud Solutions</li>
              <li>Mobile Apps</li>
            </ul>
          </div>
          <span
            className={`${instrumentSans.className} text-2xl font-semibold`}
          >
            Not on the list? Just ask!
          </span>
        </div>
        <div
          id="about-us"
          className={
            "flex flex-col w-full items-center gap-10 py-30 px-1 sm:px-20"
          }
        >
          <div className="flex flex-col max-w-3xl gap-10 items-center">
            <span
              className={`${alfaSlabOne.className} text-5xl sm:text-6xl text-center`}
            >
              Who we are
            </span>
            <p className={`${instrumentSans.className} text-xl text-center`}>
              New on the scene, but with a wealth of experience. We are a team
              of passionate professionals dedicated to delivering top-notch
              technical solutions. Our mission is to empower businesses of all
              sizes with innovative software, seamless integrations, and
              exceptional support.
            </p>
            <p className={`${instrumentSans.className} text-xl text-center`}>
              Based out of Werribee VIC, we serve clients across Australia and
              beyond. Our team is committed to understanding your unique needs
              and providing tailored solutions that drive success.
            </p>
            <p className={`${instrumentSans.className} text-xl text-center`}>
              Whether you&apos;re a small business looking for your first
              website or a large enterprise dealing with complex system
              integrations, we&apos;re here to help you achieve your goals.
            </p>
            <span
              className={`${instrumentSans.className} text-2xl font-semibold`}
            >
              Just leave it to us.
            </span>
          </div>
        </div>
        <div
          id="contact-us"
          className="flex flex-col items-center bg-neutral-700 text-neutral-200 py-30 px-1 gap-20"
        >
          <span
            className={`${alfaSlabOne.className} text-5xl sm:text-6xl text-center`}
          >
            Let&apos;s do big things
          </span>
          <img
            src={"/img/powerful.svg"}
            alt="powerful"
            className="w-full max-w-xl"
          />
          <ContactForm />
        </div>
        <div className="bg-neutral-700 text-neutral-200 pb-5 px-10">
          <div
            className={`${instrumentSans.className} flex flex-row justify-between max-w-md mx-auto`}
          >
            <span>Hevasoft 2025 ❤️</span>
            <span>ABN 278 9969 5961</span>
          </div>
        </div>
      </div>
    </>
  );
}
