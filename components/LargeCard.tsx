import Image from "next/image";
import Link from "next/link";
import { Button, IconButton } from "components";
import { BsCloudDownload } from "react-icons/bs";
import { useTypewriter, Cursor } from "react-simple-typewriter";

function LargeCard() {

  const [text, count] = useTypewriter({
    words: [
      "Hi, This is Jass Bawa!",
      "A passionate web developer.",
      "Loves to develop solutions.",
    ],
    loop: true,
    delaySpeed: 2000,
    typeSpeed: 80,
  });

  return (
    <section
      className=" max-w-xs md:max-w-3xl lg:max-w-7xl xl:max-w-7xl mx-auto  
    py-6 shadow-md shadow-[#ABECD6] 
    bg-gradient-to-r from-[#FBED96] to-[#ABECD6] rounded-lg 
    animate-text
    "
    >
      <div className="flex flex-col items-center gap-6">
        <div className="bg-[#EFFFFA] shadow-md shadow-teal-100 rounded-full h-16 w-16 flex items-center justify-center">
          <Image
            src="/profilepictwo.png"
            alt="profile"
            width={58}
            height={58}
            className="object-contain rounded-full"
            priority
          />
        </div>
        <div className="w-3/4 text-xl text-center text-gray-900 name lg:text-3xl">
          {text}
          <Cursor cursorColor="#0b89ff" />
        </div>
        <h3 className="text-xl text-center text-gray-900 descript w-52 lg:text-2xl md:w-96 ">
          I develop
          <span className="mx-1 text-blue-400 lg:mx-2">ideas</span>
          and help build a better world through software.
        </h3>
        <div className="flex items-center gap-3 buttons">
          <Link
            href="https://www.linkedin.com/in/jaspreet-singh-bawa/"
            target="_blank"
          >
            <Button value="Contact" />
          </Link>

          <Link
            href="https://rxresu.me/jassibawa904/jaspreet-singh"
            target="_blank"
          >
            <IconButton
              icon={<BsCloudDownload />}
              outlined
              value="Resume"
              className="px-2 py-1 border-b-2 border-black/50"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default LargeCard;
