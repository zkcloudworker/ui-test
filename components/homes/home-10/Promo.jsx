import { features2 } from "@/data/service";
import Image from "next/image";

export default function Promo() {
  return (
    <section className="relative py-24 dark:bg-jacarta-800">
      <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
        <Image
          width={1920}
          height={789}
          src="/img/gradient_light.jpg"
          priority
          alt="gradient"
          className="h-full w-full"
        />
      </picture>
      <div className="pr-[calc((100%_-_1170px)/2)]">
        <div className="lg:flex lg:justify-between">
          <div className="relative mb-8 pr-6 lg:w-[63%]">
            <Image
              width={932}
              height={636}
              src="/img/crypto-app/promo_crypto_app.png"
              alt="image"
              loading="lazy"
            />
          </div>

          <div className="py-10 px-6 lg:w-[37%] lg:pl-28">
            <h2 className="mb-6 font-display text-3xl text-jacarta-700 dark:text-white">
              The safest most secure crypto app like never before
            </h2>
            <p className="mb-12 text-lg leading-normal dark:text-jacarta-300">
              Xhibiter security is unlike every other. It’s better. No more
              complex passwords or long phrases to store, browser extensions, or
              special hardware required. Your account is secured by private
              facial biometrics and industry-leading encryption to keep you safe
              from account
            </p>
            {features2.map((elm, i) => (
              <div
                key={i}
                className={`${
                  i + 1 != features2.length ? "mb-3" : ""
                } flex space-x-4`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  className="h-8 w-8 shrink-0 fill-accent"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-.997-4L6.76 11.757l1.414-1.414 2.829 2.829 5.656-5.657 1.415 1.414L11.003 16z" />
                </svg>
                <div>
                  <span className="mb-3 mt-2 block font-display text-base font-semibold text-jacarta-700 dark:text-white">
                    {elm.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
