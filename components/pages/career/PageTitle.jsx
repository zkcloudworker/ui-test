import Image from "next/image";

export default function PageTitle() {
  return (
    <section className="relative py-32">
      <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
        <Image
          width={1920}
          height={900}
          src="/img/gradient.jpg"
          alt="gradient"
          className="h-full w-full"
        />
      </picture>
      <picture className="pointer-events-none absolute inset-0 -z-10 hidden dark:block">
        <Image
          width={1920}
          height={900}
          src="/img/gradient_dark.jpg"
          alt="gradient dark"
          className="h-full w-full"
        />
      </picture>
      <div className="container relative z-10">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="mb-6 text-center font-display text-4xl font-medium text-jacarta-700 dark:text-white">
            Join the Xhibiter Team!
          </h1>
          <p className="text-lg leading-normal dark:text-jacarta-200">
            Be part of our young and innovative team, and we build trust,
            embrace feedback, grow rapidly, and love our work.
          </p>
        </div>
      </div>
    </section>
  );
}
