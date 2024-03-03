import { LampDemo } from "@/components/lamp-about";

export default function About() {
  return (
    <>
      <div className="mx-8 my-24 sm:mx-12 sm:my-32 md:mx-56 object-cover border-transparent rounded-3xl bg-slate-100 bg-opacity-30">
        <h1 className="text-4xl pt-10  md:text-7xl font-semibold italic font-mono text-center bg-clip-text text-transparent bg-gradient-to-b from-yellow-100 to-yellow-500 bg-opacity-50">
          Naayra Travels
          <br />
        </h1>
        <p className="text-lg pt-5 md:text-3xl font-semibold font-mono text-center bg-clip-text text-transparent bg-gradient-to-b from-slate-100 to-slate-400 bg-opacity-50">
          Welcome to Naayra Travels, <br />
          Your go-to destination for hassle-free and dependable transportation.{" "}
          <br />
          Established with a mission to redefine your commuting experience,{" "}
          <br />
          We pride ourselves on providing a seamless and reliable taxi booking
          service. <br />
        </p>
      </div>
      <div className="items-center justify-center mx-20">
        <h1 className="mt-7 ml-7 text-3xl md:text-5xl bg-clip-text bg-opacity-50 font-bold font-mono text-transparent bg-gradient-to-b from-yellow-100 to-yellow-500">
          Our Story
        </h1>
        <p className="text-lg pt-3 md:text-3xl ml-10 font-semibold font-mono bg-clip-text text-transparent bg-gradient-to-b from-slate-100 to-slate-400 bg-opacity-50">
          At Naayra travels, <br />
          we understand the importance of getting from point A to point B with
          ease. <br />
          Our journey began with a vision to create a platform that prioritizes
          convenience, safety, and efficiency. <br />
          With a team of dedicated professionals, cutting-edge technology,{" "}
          <br />
          and a commitment to customer satisfaction, we've grown into a trusted
          name in the transportation industry. <br />
        </p>
        <h1 className="mt-4 ml-7 text-3xl md:text-5xl bg-clip-text md:mt-20 bg-opacity-50 font-bold font-mono text-transparent bg-gradient-to-b from-yellow-100 to-yellow-500">
          What Sets Us Apart From Other Businesses
        </h1>
        <p className="text-lg pt-3 md:text-3xl ml-10 font-light font-mono bg-clip-text text-transparent bg-gradient-to-b from-slate-100 to-slate-400 bg-opacity-50">
          <span className="font-extrabold text-2xl md:font-extrabold md:text-3xl">
            {" "}
            1 Reliable Fleet:{" "}
          </span>
          Our modern fleet of vehicles undergoes regular maintenance to ensure
          safety and comfort on every ride. <br />
          <span className="font-extrabold text-2xl md:font-extrabold md:text-3xl">
            {" "}
            2 Easy Booking:{" "}
          </span>{" "}
          We've simplified the booking process. Whether you prefer our
          user-friendly website or our mobile app, securing a ride with Naayra
          Travels is just a few clicks away. <br />
          <span className="font-extrabold text-2xl md:font-extrabold md:text-3xl">
            {" "}
            3 Professional Drivers{" "}
          </span>{" "}
          Our driversare not just experts on the road they are courteous and
          committed to providing the best possible experience for our
          passengers. 24/7 <br />
          <span className="font-extrabold text-2xl md:font-extrabold md:text-3xl">
            {" "}
            4 Availability:{" "}
          </span>{" "}
          Need a ride at any hour? We've got you covered. Our services are
          available round the clock to accommodate your schedule. <br />
        </p>
        <h1 className="mt-4 ml-7 text-3xl md:text-5xl bg-clip-text md:mt-20 bg-opacity-50 font-bold font-mono text-transparent bg-gradient-to-b from-yellow-100 to-yellow-500">
          Our Commitment
        </h1>
        <p className="text-lg pt-3 md:text-3xl ml-10 font-semibold font-mono bg-clip-text text-transparent bg-gradient-to-b from-slate-100 to-slate-400 bg-opacity-50">
          We strive to make every journey with us enjoyable and stress-free.{" "}
          <br />
          From airport transfers to daily commuting, we prioritize your comfort
          and safety. <br />
          Join the countless satisfied customers who have chosen Naayra Travels
          for their transportation needs. <br />
          Thank you for considering us as your preferred taxi service. <br />
          We look forward to being a reliable partner on your journeys. <br />
        </p>
        <h1 className="text-4xl pt-10 mx-4 md:text-7xl font-semibold italic font-mono text-center bg-clip-text text-transparent bg-gradient-to-b from-yellow-100 to-yellow-500 bg-opacity-50">
          Naayra Travels - Where Your Journey Matters!
        </h1>
      </div>
    </>
  );
}
