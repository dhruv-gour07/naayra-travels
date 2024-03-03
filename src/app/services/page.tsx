import { HoverEffect } from "@/components/ui/card-hover-effect";
import Link from "next/link";

export default function Services() {
  const projects = [
  {
    title: "Rapid City Transfer",
    description:
      "Rapid city transfer is a term used by some taxi or cab services to describe their service of bringing",
    link: "",
  },
  {
    title: "Online Booking",
    description:
      "You can share us your details we will contact you regarding the booking.",
    link: "",
  },
  {
    title: "Airport Transport",
    description:
      "It can include different types of vehicles, such as taxis, car hire, airport pickup etc.",
    link: "",
  },
  {
    title: "Event Transport",
    description:
      "You can advance book and reserve a car for yourself  or your group with our Event Car Service.",
    link: "",
  },
  {
    title: "Regular Transport",
    description:
      "Regular transports refers to routine and scheduled transportation services .",
    link: "",
  },
  {
    title: "Tour Transport",
    description:
      "Tour transports refers to transportation services specifically designed to cater needs of tourists.",
    link: "",
  },
];

  return (
    <>
      <div className="mx-8 my-12 sm:mx-12 sm:my-32 md:mx-56 object-cover border-transparent rounded-3xl bg-slate-100 bg-opacity-30">
        <h1 className="text-4xl pt-10  md:text-7xl font-semibold italic font-mono text-center bg-clip-text text-transparent bg-gradient-to-b from-yellow-100 to-yellow-600 bg-opacity-50">
          Services We Provide <br />
          <p className="hidden">Here At</p>
        </h1>
        <div className="max-w-5xl mx-auto px-8">
          <HoverEffect items={projects} />
        </div>
      </div>

      <div className="mx-8 my-12 sm:mx-12 sm:my-32 md:mx-56 flex object-cover justify-center">
        <div className="mt-6 justify-center text-gray-100 bg-neutral-800 shadow-md bg-clip-border rounded-xl w-96 px-10 mx-10">
          <div className="p-6 flex flex-col">
            <h1 className="text-xl md:text-2xl font-semibold font-mono text-center bg-clip-text text-transparent bg-gradient-to-b from-yellow-100 to-yellow-600 bg-opacity-50">
              Address
            </h1>
            <Link href="https://www.google.com/maps/dir//Nayra+Trvels+Naroda+Rd+Krishna+Nagar,+Saijpur+Bogha+Ahmedabad,+Gujarat+382345/@23.0591101,72.6386149,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x395e87a1338ab867:0xedb56aa50757e814!2m2!1d72.6386233!2d23.059108?entry=ttu">
              <p className="text-sm pt-4 md:text-xl hover:text-yellow-400 md:pt-0 font-mono text-center bg-clip-text text-transparent bg-gradient-to-b from-slate-100 to-slate-400 bg-opacity-50">
                107, shailganga complex, near IP english school, ONGC colony,
                chandkedha, ahmedabad, gujarat 382424
              </p>
            </Link>
            <br />
            <h1 className="text-xl md:text-2xl font-semibold font-mono text-center bg-clip-text text-transparent bg-gradient-to-b from-yellow-100 to-yellow-600 bg-opacity-50">
              Email
            </h1>
            <Link href="mailto:naayratravels@gmail.com">
              <p className="text-sm pt-4 md:text-xl md:pt-0 hover:text-yellow-400  font-mono text-center bg-clip-text text-transparent bg-gradient-to-b from-slate-100 to-slate-400 bg-opacity-50">
                naayratravels@gmail.com
              </p>
            </Link>
            <br />
            <h1 className="text-xl md:text-2xl font-semibold font-mono text-center bg-clip-text text-transparent bg-gradient-to-b from-yellow-100 to-yellow-600 bg-opacity-50">
              Phone
            </h1>
            <Link href="tel:+917069798065,+919327873472">
              <p className="text-sm pt-4 md:text-xl md:pt-0 hover:text-yellow-400  font-mono text-center bg-clip-text text-transparent bg-gradient-to-b from-slate-100 to-slate-400 bg-opacity-50">
                +91 7069798065,
                <br />
                +91 9327873472
              </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
