import { Image } from "@nextui-org/image";

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
      <section className="static flex flex-col items-center justify-center gap-4 py-12 mt-16 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h2 className={title({ class: "mt-4" })}>Projects</h2>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            aliquid asperiores aspernatur commodi eligendi explicabo, facilis
            fugiat in ipsam maiores non nostrum numquam obcaecati odio odit quam
            qui quibusdam quidem quis reprehenderit, rerum, sunt vel velit? Ab
            aliquid, at corporis enim ex exercitationem in necessitatibus nobis
            quaerat quam qui quis soluta, veritatis vitae voluptate. Alias
            blanditiis consectetur deserunt dolore, doloremque ea eos error
            eveniet excepturi fuga, impedit iste iure laborum modi molestias
            mollitia, nulla odit omnis quaerat ratione tempora tempore totam
            voluptatem! Assumenda molestias non, reiciendis repudiandae sint
            voluptatibus? Aspernatur blanditiis consequatur eaque enim error et
            eveniet ipsum, iusto magnam, magni maxime nam nesciunt nostrum
            obcaecati perferendis quaerat quasi reiciendis sed tempore
            voluptatem. Adipisci aspernatur at cum distinctio excepturi, harum
            ipsum iure nostrum pariatur, quasi soluta tenetur totam voluptatem!
            Cumque error est expedita fuga, illo laboriosam nobis nulla possimus
            qui quia quidem sapiente sunt suscipit ullam unde vitae voluptatem.
            Ab consequuntur eligendi inventore quo tempore! Adipisci autem dolor
            eaque quas! Aliquid architecto aspernatur consequuntur corporis cum
            eius eos, est eum expedita inventore iure laboriosam maiores modi
            necessitatibus non officia perspiciatis porro quia, quibusdam quidem
            quo ratione rem repudiandae saepe suscipit temporibus vel veniam.
            Deserunt, enim exercitationem laudantium placeat quasi sequi?
          </p>
        </div>
      </section>
      <section className="static flex flex-col items-center justify-center gap-4 py-12 mt-16 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h2 className={title({ class: "mt-4" })}>About me</h2>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            aliquid asperiores aspernatur commodi eligendi explicabo, facilis
            fugiat in ipsam maiores non nostrum numquam obcaecati odio odit quam
            qui quibusdam quidem quis reprehenderit, rerum, sunt vel velit? Ab
            aliquid, at corporis enim ex exercitationem in necessitatibus nobis
            quaerat quam qui quis soluta, veritatis vitae voluptate. Alias
            blanditiis consectetur deserunt dolore, doloremque ea eos error
            eveniet excepturi fuga, impedit iste iure laborum modi molestias
            mollitia, nulla odit omnis quaerat ratione tempora tempore totam
            voluptatem! Assumenda molestias non, reiciendis repudiandae sint
            voluptatibus? Aspernatur blanditiis consequatur eaque enim error et
            eveniet ipsum, iusto magnam, magni maxime nam nesciunt nostrum
            obcaecati perferendis quaerat quasi reiciendis sed tempore
            voluptatem. Adipisci aspernatur at cum distinctio excepturi, harum
            ipsum iure nostrum pariatur, quasi soluta tenetur totam voluptatem!
            Cumque error est expedita fuga, illo laboriosam nobis nulla possimus
            qui quia quidem sapiente sunt suscipit ullam unde vitae voluptatem.
            Ab consequuntur eligendi inventore quo tempore! Adipisci autem dolor
            eaque quas! Aliquid architecto aspernatur consequuntur corporis cum
            eius eos, est eum expedita inventore iure laboriosam maiores modi
            necessitatibus non officia perspiciatis porro quia, quibusdam quidem
            quo ratione rem repudiandae saepe suscipit temporibus vel veniam.
            Deserunt, enim exercitationem laudantium placeat quasi sequi?
          </p>
        </div>
      </section>
    </DefaultLayout>
  );
}
