import { Image } from "@nextui-org/image";
import { Card, CardBody, CardHeader } from "@nextui-org/card";

import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

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
            className="py-12 rotate-12 sm:absolute sm:-bottom-0 md:-bottom-20 sm:right-56 md:right-3/4 sm:-z-10 sm:py-0"
            src="Marison.jpg"
            width={200}
          />
        </div>
      </section>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <Card>
          <CardHeader className="flex justify-center">
            <h1 className={title({ class: "mt-4" })}>Projects</h1>
          </CardHeader>
          <CardBody className="text-center">
            <p className={subtitle()}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias
              aliquid at dolor dolorem earum eum, ex fugit impedit incidunt ipsa
              ipsum iste itaque labore minus modi molestiae natus nesciunt non
              numquam optio pariatur porro quam qui quis ratione sapiente
              tempore totam unde ut voluptas voluptate voluptates voluptatibus.
              Animi assumenda enim error esse est eum excepturi explicabo magni
              numquam perferendis, repudiandae, ullam, ut veniam. Accusamus aut
              cumque, et explicabo, hic minus molestias nulla optio provident
              quaerat rem sunt veritatis. Cum deleniti dignissimos dolorem fuga
              numquam quasi quia, quis saepe? Aperiam cumque dolor eum, impedit
              itaque porro quidem quisquam velit voluptas!
            </p>
          </CardBody>
        </Card>
      </section>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <Card>
          <CardHeader className="flex justify-center">
            <h1 className={title({ class: "mt-4" })}>About me</h1>
          </CardHeader>
          <CardBody className="text-center">
            <p className={subtitle()}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
              esse ipsum provident qui quibusdam, quod saepe! Aliquam debitis ea
              eius neque numquam quisquam sunt voluptates. Cum deleniti
              dignissimos dolores est expedita in nemo quidem suscipit ut.
              Accusantium ad ducimus recusandae. Aspernatur error eum ipsam
              magnam numquam odio optio porro. Ad adipisci amet asperiores
              consequuntur culpa debitis delectus, dignissimos dolor doloremque
              eius, excepturi expedita fuga id iste iure minima natus nesciunt
              nostrum odit officia officiis omnis, perferendis placeat quaerat
              quasi quibusdam quidem quod repellat repudiandae sapiente sint
              suscipit tempora temporibus totam vitae voluptas voluptates. A
              doloremque labore minus? Deserunt, dolores soluta?
            </p>
          </CardBody>
        </Card>
      </section>
    </DefaultLayout>
  );
}
