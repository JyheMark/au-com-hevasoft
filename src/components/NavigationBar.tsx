/* eslint-disable @next/next/no-img-element */
import { Instrument_Sans } from "next/font/google";

const instrumentSans = Instrument_Sans();

export default function Navigation() {
  return (
    <div className="px-4">
      <img src={"/logo.svg"} alt="Hevasoft Logo" className="h-16 absolute top-2"/>
      <nav className={`${instrumentSans.className} bg-neutral-200 w-full pt-8`}>
        <ul className="flex justify-center gap-10">
          <li>
            <a
              href="#"
              className=" hover:text-neutral-900 hover:cursor-pointer font-bold text-lg"
            >
              SERVICES
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-neutral-900 hover:cursor-pointer font-bold text-lg"
            >
              PRICING
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-neutral-900 hover:cursor-pointer font-bold text-lg"
            >
              FAQ
            </a>
          </li>
        </ul>
      </nav>
      <div className="p-4">{/* Content will go here */}</div>
    </div>
  );
}
