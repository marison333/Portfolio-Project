import { Image } from "@nextui-org/image";
import { Chip } from "@nextui-org/chip";

import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import ContactButton from "@/components/contact.tsx";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-8 py-8 md:py-12">
        <div className="inline-block max-w-lg text-center relative">
          <h1 className={title()}>I &#128150;&nbsp;</h1>
          <h1 className={title()}>Building things&nbsp;</h1>
          <br />
          <h1 className={title()}>on the internet.</h1>

          <h4 className={subtitle({ class: "mt-4" })}>
            Beautiful, fast and interesting is what I do
          </h4>

          <Image
            alt="Selfie of Marison Sol"
            className="flex items-center md:-z-10 sm:rotate-0 md:rotate-12 sm:static md:absolute md:-bottom-20 md:right-3/4 sm:right-1/2"
            src="Marison.jpg"
            width={200}
          />
        </div>
      </section>
      <section className="static flex flex-col items-center justify-center gap-4 py-12 md:mt-16">
        <div className="inline-block max-w-lg text-center justify-center">
          <h2 className={title({ class: "mt-4" })}>About me</h2>
        </div>
        <div className="flex items-center">
          <p>
            I’m a passionate software development student, constantly evolving
            and expanding my knowledge in the field. With a solid foundation in
            programming languages like Laravel React and Python. I am eager to
            take on new challenges that push my skills further. As I continue to
            grow, I stay curious and committed to learning the latest
            technologies and best practices in software engineering. Whether
            it’s working on academic projects or personal development, I strive
            to create efficient, innovative, and user-friendly solutions. I’m
            excited to see where this journey takes me as I work towards
            becoming a professional software developer.
          </p>
        </div>
        <div className="gap-2 place-content-center px-8 mt-4">
          <div className="flex flex-col items-center mb-3">
            <h3 className="text-3xl font-bold">Internship</h3>
            <h4 className="text-lg">
              Full stack PHP developer at Drukkerij Teeuwen & Zonen
            </h4>
          </div>
          <div className="mb-2">
            <p>
              During my internship I was assigned to create a CRUD project for
              tracking inventory via the web browser. I learned a lot about
              dry-coding and JQuery. Around the end of my internship period I
              was given the opportunity to test it in a Cpanel server to test
              the project in reality.
            </p>
          </div>
          <div className="flex justify-center">
            <Chip color="primary" variant="shadow">
              PHP
            </Chip>
            <Chip color="primary" variant="shadow">
              JQuery
            </Chip>
          </div>
        </div>
        <div className="flex flex-col gap-2 justify-center items-center mt-3">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <h2 className={title({ class: "mt-4" })}>Let's get in Touch!</h2>
          <div className="mt-3">
            <ContactButton />
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
