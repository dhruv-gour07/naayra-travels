import yellowCab from "@/assets/yellow-cab.png";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <div className="mx-8 my-24 sm:mx-12 sm:my-32 object-cover border-transparent rounded-3xl bg-slate-100 bg-opacity-30">
        <h1 className="text-4xl pt-10  md:text-7xl font-semibold italic font-mono text-center bg-clip-text text-transparent bg-gradient-to-b from-yellow-100 to-yellow-600 bg-opacity-50">
          WELCOME TO <br />
          <p className="font-bold text-slate-100">Naayra Travels</p>
        </h1>
        <p className="text-lg pt-5 md:text-3xl font-semibold font-mono text-center bg-clip-text text-transparent bg-gradient-to-b from-slate-100 to-slate-400 bg-opacity-50">
          Book Your Cab On <br />
          +91 7069798065
        </p>
        <div className="items-center justify-center flex">
          <Image src={yellowCab} alt="Yello color cab" className="pb-26" />
        </div>
      </div>
      <div className="pb-36">
        <p className="text-lg pt-40 md:text-3xl md:pt-0 font-mono text-center bg-clip-text text-transparent bg-gradient-to-b from-slate-100 to-slate-400 bg-opacity-50">
          BEST IN CITY TRUSTED CAB SERVIES IN GUJARAT <br />
          Wanna book a cab call us on:
          <Link href="tel:+917069798065">+91 7069798065</Link>
          <br />
          Or directly send us your details via
          <p>
            <Link href="/contact" className="font-bold text-yellow-400">
              Contact
            </Link>
          </p>
        </p>
      </div>
    </>
  );
}
