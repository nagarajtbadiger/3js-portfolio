
import Image from "next/image";
import bg from '../../../../public/background/contact-background.png'
 
import Form from "@/components/contact/Form";

export default function Contact () {
  return (
    <>
      <Image src={bg} alt="background-image" className="-z-20 top-0 left-0 fixed w-full h-full object-cover object-center opacity-25" />

      <article className="relative w-full flex flex-col items-center justify-center space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 md:w-3/4">
          <h1 className="text-accent font-semibold text-center text-4xl">Summon the Wizard</h1>
          <p className="text-center font-light">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <Form/>
      </article>
    </>
  );
}
