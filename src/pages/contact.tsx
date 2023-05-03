import Head from "next/head";

export default function Contact() {
  return (
    <>
      <Head>
        <title>{`Contact : <>{ V.S }</>`}</title>
      </Head>
      <div className="container flex h-full w-full flex-col justify-center p-4 text-center text-zinc-300">
        <h1 className="mb-2 text-2xl font-bold underline lg:text-3xl">
          Contact me by
        </h1>
        <p className="mx-6 mb-5 max-lg:text-sm lg:mb-10">
          You can contact me any time, whatever the cause might be
        </p>
        <div className="flex h-full w-full flex-wrap justify-center">
          <div className="mx-5 mb-4 basis-1/4">
            <h2 className="text-lg font-bold lg:text-2xl">Telegram</h2>
            <a
              href="https://t.me/vikidi"
              target="_blank"
              rel="noreferrer noopener"
              className="text-sm text-blue-600 underline decoration-transparent transition duration-300 ease-in-out visited:text-purple-600 hover:text-blue-800 hover:decoration-inherit lg:text-lg"
            >
              @vikidi
            </a>
          </div>
          <div className="mx-5 basis-1/4">
            <h2 className="text-lg font-bold lg:text-2xl">Email</h2>
            <a
              href="mailto:ville.saarinen9@gmail.com"
              target="_blank"
              rel="noreferrer noopener"
              className="text-sm text-blue-600 underline decoration-transparent transition duration-300 ease-in-out visited:text-purple-600 hover:text-blue-800 hover:decoration-inherit lg:text-lg"
            >
              ville.saarinen9@gmail.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
