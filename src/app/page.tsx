import { Instrument_Sans, Alfa_Slab_One } from "next/font/google";

const instrumentSans = Instrument_Sans();
const alfaSlabOne = Alfa_Slab_One({ weight: "400" });

export default function Page() {
  return (
    <>
      <div className={"flex flex-col w-full items-center gap-10"}>
        <h1 className={`${alfaSlabOne.className} text-8xl`}>Elevate your business</h1>
        <p className={`${instrumentSans.className} text-2xl instrument-sans-regular w-3xl text-center`}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi
          necessitatibus eveniet beatae nam molestiae sit inventore.
        </p>
        <div className="bg-neutral-500 hover:bg-neutral-700 hover:cursor-pointer transition text-neutral-200 font-semibold rounded-full px-12 py-4">
          GET IN TOUCH
        </div>
      </div>
    </>
  );
}
