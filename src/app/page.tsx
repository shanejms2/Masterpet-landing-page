import NavBar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full">
      <NavBar />
      <section className="w-screen h-[90vh] flex justify-center items-center">
        <div className="w-screen  md:w-[500px] h-[300px] md:relative" >
          <span className="headline corner TL block md:inline-block">YOUR</span>
          <span className="headline corner  TR">PET&apos;s</span>
          <br />
          <span className="headline corner  BL">HAPPY</span>
          <span className="headline corner  BR">PLACE</span>
          <Image src={"./mascot.svg"} width={500} height={300} alt="Chill dog" />
        </div>
      </section>

    </main>
  );
}
