export default function Home() {
  return (
    <>
      <div className="flex sm:justify-center fhd:justify-start">
        <section className="mt-sm xl:mt-lg z-30 fhd:mt-fhdxl fhd-offset">
          <h1 className="font-thin text-darkBlue max-w-full break-all text-mobile-xl sm:text-tablet-xl xl:text-desktop-xl leading-mobile-xl sm:leading-tablet-xl xl:leading-desktop-xl">
            Kolorystka
          </h1>
          <h3 className="font-thin text-gray relative sub-heading text-mobile-md sm:text-tablet-md xl:text-desktop-md leading-mobile-md sm:leading-tablet-md xl:leading-desktop-md">
            Ilona Brzozowska
          </h3>
        </section>
      </div>
      <section className="mt-sm xl:mt-md relative z-30 ">
        <h2 className="font-light text-center text-darkBlue last-text-offset text-mobile-lg sm:text-tablet-lg xl:text-desktop-lg leading-mobile-lg sm:leading-tablet-lg xl:leading-desktop-lg fhd:text-left">
          Styl, kolor, biznes
        </h2>
      </section>
      <section className="hidden xl:block xl-offest-kolorystka-1 fhd:absolute">
        <div className="h-full relative flex justify-center w-full fhd:justify-start fhd:absolute fhd:h-auto">
          <img
            src="/assets/kolorystka1.png"
            alt="Kolorystka1"
            className="sm-h-500 x-minus-50 kolorystka-1"
          />
          <div className="rect-1 z-minus-10" />
        </div>
      </section>

      <section className="hidden xl:flex xl-offest-kolorystka-2-3-4 gap-8 middle-pictures-offset fhd:justify-start fhd:ml-sm z-30 fhd:relative fhd:mt-md">
        <div className="flex justify-center gap-8">
          <img
            src="/assets/kolorystka2.png"
            alt="Kolorystka2"
            className="kolorystka-2"
          ></img>
          <img
            src="/assets/kolorystka3.png"
            alt="Kolorystka3"
            className="kolorystka-3"
          ></img>
          <img
            src="/assets/kolorystka4.png"
            alt="Kolorystka4"
            className="kolorystka-4"
          ></img>
          <div className="rect-5 block z-minus-30">
            <div>
              <div className="relative xl-video-wrapper">
                <img src="/assets/video_thumbnail.png" alt="play" />
                <div className="absolute left-0 top-0 flex w-full h-full items-center justify-center">
                  <span>
                    <img
                      src="/assets/play-button.png"
                      className="inline"
                      alt="play"
                    />
                    <span className="inline text-white">zobacz film</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="rect-4 block z-minus-20" />
        </div>
      </section>

      <section className="flex flex-col items-center gap-4 mt-sm overflow-hidden xl:hidden">
        <div className="h-full relative">
          <img
            src="/assets/kolorystka1.png"
            alt="Kolorystka1"
            className="sm-h-500"
          />
          <div className="rect-1 z-minus-10" />
          <div className="rect-3 z-minus-20 hidden sm:block" />
        </div>

        <img src="/assets/kolorystka2.png" alt="Kolorystka2" />

        <img src="/assets/kolorystka3.png" alt="Kolorystka3" />

        <div className="h-full relative">
          <img
            src="/assets/kolorystka4.png"
            alt="Kolorystka4"
            className="sm-h-500"
          />
          <div className="rect-2 z-10" />
        </div>

        <div className="relative">
          <img src="/assets/video_thumbnail.png" alt="play" />
          <div className="absolute left-0 top-0 flex w-full h-full items-center justify-center">
            <span>
              <img
                src="/assets/play-button.png"
                className="inline"
                alt="play"
              />
              <span className="inline text-white">zobacz film</span>
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
