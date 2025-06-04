import ContactForm from "@/components/ContactForm";
import { Metadata, Viewport } from "next";
import { Instrument_Sans, Alfa_Slab_One } from "next/font/google";

const instrumentSans = Instrument_Sans();
const alfaSlabOne = Alfa_Slab_One({ weight: "400" });

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
  ]
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1
};

export default function Page() {
  return (
    <>
      <div className="flex flex-col w-full mt-15">
        <div className={"flex flex-col w-full items-center gap-12 pb-30 px-1"}>
          <h1 className={`${alfaSlabOne.className} text-5xl sm:text-6xl text-center`}>
            Elevate your business
          </h1>
          <p
            className={`${instrumentSans.className} text-2xl text-center`}
          >
            Technical solutions for businesses of all sizes. Leave it to us.
          </p>
          <div className="flex flex-col justify-start mt-4">
            <div className="mx-auto text-center bg-neutral-500 hover:bg-neutral-700 hover:cursor-pointer transition text-neutral-200 font-semibold rounded-full px-12 py-4 select-none">
              GET IN TOUCH
            </div>
            <span className="text-sm font-semibold mt-5">
              Let&apos;s have a chat. No expectations, no obligations.
            </span>
          </div>
          {/* We do websites, software, system integrations, web apps, automation, consulting, cloud, mobile apps*/}
        </div>
        <div className={"flex flex-col w-full items-center gap-10 py-30 px-1"}>
          <span
            className={`${alfaSlabOne.className} text-5xl sm:text-6xl text-center`}
          >
            What we do
          </span>
          <div
            className={`${instrumentSans.className} w-full flex flex-col sm:flex-row sm:gap-15 justify-center text-xl leading-10`}
          >
            <ul className="text-center">
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
          <span className="text-2xl font-semibold">Anything else? Just ask!</span>
        </div>
        <div id="contact-us" className="flex flex-col items-center bg-neutral-700 text-neutral-200 py-30 px-1">
          <span
            className={`${alfaSlabOne.className} text-5xl sm:text-6xl text-center`}
          >
            Let&apos;s do big things
          </span>
          <ContactForm />
        </div>
      </div>
    </>
  );
}
