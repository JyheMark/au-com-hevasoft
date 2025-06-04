/* eslint-disable @next/next/no-img-element */
import { Instrument_Sans } from "next/font/google";

const instrumentSans = Instrument_Sans({ subsets: ["latin"] });

export default function Navigation() {
  return (
    <div className="px-4">
      <nav className={`${instrumentSans.className} bg-neutral-200 w-full pt-8`}>
        <ul className="flex justify-center gap-10">
          <li>
            <a
              href="#services"
              className=" hover:text-neutral-900 hover:cursor-pointer font-bold text-lg"
            >
              SERVICES
            </a>
          </li>
          <li>
            <a
              href="#about-us"
              className="hover:text-neutral-900 hover:cursor-pointer font-bold text-lg"
            >
              ABOUT US
            </a>
          </li>
          <li>
            <a
              href="#contact-us"
              className="hover:text-neutral-900 hover:cursor-pointer font-bold text-lg"
            >
              CONTACT
            </a>
          </li>
        </ul>
      </nav>
      <div className="p-4">{/* Content will go here */}</div>
    </div>
  );
}
