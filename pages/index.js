export default function Home() {
  return (
    <>
      <section className="mt-xl flex flex-col flex-wrap items-center">
        <h1 className="font-thin text-xl text-darkBlue leading-xl inline-block">
          Kolorystka
        </h1>
        <h3 className="font-thin text-md text-gray leading-md sub-heading inline-block">
          Ilona Brzozowska
        </h3>
      </section>
      <section>
        <h2 className="mt-lg font-light text-lg text-center pl-72">
          Styl, kolor, biznes
        </h2>
      </section>
      <section className="flex justify-center flex-wrap pt-44">
        <div className="w-3/12 bottom-/4">
          <img src="/assets/kolorystka2.png" className="transform translate-y-1/4" alt="Kolorystka2" />
        </div>
        <div className="w-5/12 justify-center flex mx-4">
          <img src="/assets/kolorystka3.png"  alt="Kolorystka3" />
        </div>
        <div className="w-3/12">
          <img src="/assets/kolorystka4.png" className="transform -translate-y-1/4" alt="Kolorystka4" />
        </div>  
      </section>
    </>
  );
}
