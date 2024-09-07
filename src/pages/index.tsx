import { Image } from "@nextui-org/image";
import { Chip } from "@nextui-org/chip";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";

import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import ContactButton from "@/components/contact.tsx";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-8 py-8 md:py-12">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>I &#128150;&nbsp;</h1>
          <h1 className={title()}>Building things</h1>
          <br />
          <h1 className={title()}>on the internet.</h1>

          <h4 className={subtitle({ class: "mt-4" })}>
            Beautiful, fast and interesting is what I do.
          </h4>

          <Image
            alt="Selfie of Marison Sol"
            className="py-12 md:rotate-12 sm:rotate-0 sm:absolute sm:-bottom-0 md:-bottom-20 sm:right-56 md:right-3/4 sm:-z-10 sm:py-0"
            src="Marison.jpg"
            width={200}
          />
        </div>
      </section>
      <section className="static flex flex-col items-center justify-center gap-4 py-12 mt-16 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h2 className={title({ class: "mt-4" })}>About me</h2>
        </div>
        <div>
          <p className="text-center">
            I’m a passionate software development student, constantly evolving
            and expanding my knowledge in the field. With a solid foundation in
            programming languages like{" "}
            <span className="text-rose-600">Laravel</span>,{" "}
            <span className="text-cyan-500">React</span> and{" "}
            <span className="text-blue-500">Python</span>. I am eager to take on
            new challenges that push my skills further. As I continue to grow, I
            stay curious and committed to learning the latest technologies and
            best practices in software engineering. Whether it’s working on
            academic projects or personal development, I strive to create
            efficient, innovative, and user-friendly solutions. I’m excited to
            see where this journey takes me as I work towards becoming a
            professional software developer.
          </p>
        </div>
        <div className=" max-w-[1100px] gap-2 grid grid-cols-8 grid-rows-1 place-content-center px-8 mt-4">
          <Card isBlurred className="col-span-12 sm:col-span-4 h-[350px]">
            <CardHeader className="flex flex-col justify-center">
              <h3 className="text-xl font-bold">Internship</h3>
              <h4 className="text-center">
                Full stack PHP developer at Drukkerij Teeuwen & Zonen
              </h4>
            </CardHeader>
            <CardBody className="flex justify-center">
              <p>
                During my internship I was assigned to create a CRUD project for
                tracking inventory via the web browser. I learned a lot about
                dry-coding and JQuery. Around the end of my internship period I
                was given the opportunity to test it in a Cpanel server to test
                the project in reality.
              </p>
            </CardBody>
            <CardFooter className="flex gap-4 justify-center">
              <Chip color="primary" variant="shadow">
                PHP
              </Chip>
              <Chip color="primary" variant="shadow">
                JQuery
              </Chip>
            </CardFooter>
          </Card>
          <Card isBlurred className="col-span-12 sm:col-span-4 h-[350px]">
            <CardHeader className="flex flex-col justify-center">
              <h3 className="text-xl font-bold">Project</h3>
              <h4 className="text-center">Discord Bot</h4>
            </CardHeader>
            <CardBody className="flex justify-center">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Assumenda at consequatur, doloribus eligendi et facere fugiat
                molestiae, nesciunt officia placeat ullam, ut velit voluptates.
                A ad adipisci cupiditate deserunt distinctio dolore eos eum
                excepturi exercitationem fugiat illum ipsa iste iure laboriosam
                maxime nesciunt qui quidem recusandae repellat, rerum sequi
                vitae?
              </p>
            </CardBody>
            <CardFooter className="flex gap-4 justify-center">
              <Chip color="primary" variant="shadow">
                Python
              </Chip>
            </CardFooter>
          </Card>
        </div>
        <div className="flex flex-col gap-2 justify-center">
          <h2 className={title({ class: "mt-4" })}>Wanna talk?</h2>
          <ContactButton />
        </div>
      </section>
    </DefaultLayout>
  );
}
