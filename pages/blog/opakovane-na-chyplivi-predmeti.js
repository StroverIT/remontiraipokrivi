import Head from "next/head";
import Image from "next/image";
import React from "react";
import Title from "../../components/Title";

const OpakovaneNaChypliviPredmeti = () => {
  return (
    <>
      <Head>
        <title>временно - Опаковане на чупливи предмети</title>
        <meta
          name="description"
          content={`Опаковането на чупливи предмети може да бъде трудна задача, но страницата ни в блога е тук, за да Ви помогне!
           Нашите експертни съвети относно опаковането на чупливи артикули ще Ви дадат увереността да транспортирате вашите деликатни предмети безопасно и сигурно. 
        
         `}
        />
      </Head>
      <main className="mt-40 mb-14">
        <section className="container">
          <div className="flex-center">
            <Title title="Опаковане на чупливи предмети" size="text-3xl" />
          </div>
          <section className="flex-col mt-5 flex-center">
            <section className="max-w-3xl">
              <section className="grid md:grid-cols-2 gap-x-5">
                <p className="pb-5">
                  Преместването на всякакви чупливи и деликатни предмети без да
                  бъдат опаковани е неправилно. Не опакованите чупливи предмети
                  имат риск за целостта им. Затова сме ви приготвили няколко
                  съвета за опаковане на чупливи предмети…
                </p>
                <div className="relative w-full h-44 ">
                  <Image
                    src="/blog/fragileInside.webp"
                    alt="5 съвета за преместване и опаковане"
                    fill
                    className="object-contain rounded-md"
                  />
                </div>
              </section>

              <div className="relative float-left mb-2 -ml-14 w-96 h-96 image-circle ">
                <Image
                  src="/blog/buble-wrap.webp"
                  alt="buble wrap"
                  fill
                  className="object-contain image-circle "
                />
              </div>
              <section className="">
                <h2 className="text-lg font-semibold">Материали</h2>

                <p className="pb-5 shape-circle">
                  Използвайте правилните опаковъчни материали, за да защитите
                  вашите чупливи предмети. Най добрите опции включват аерофолио
                  / бъбъл фолио, кутии, листове от пяна, опаковъчна хартия и
                  въздушни възглавници.
                </p>
                <p className="pb-5">
                  Използвайте достатъчно опаковъчен материал, не спестявайте в
                  защитата на вашите чупливи предмети. По – добре да ви останат
                  в излишък опаковъчни материали, които винаги ще ви послужат
                  при нужда, отколкото да съжалявате след това.
                </p>
                <p className="pb-5">
                  При използване на кутии уверете се, че са достатъчно здрави,
                  издръжливи и предназначени за преместване. Съветваме ви да
                  използвате 5 пластни кашони/ кутии за по тежки чупливи
                  предмети.
                </p>
                <p className="pb-5">
                  Използвайте специална опаковъчна лента издържаща на суровите
                  движения, особено при по тежки предмети, за да избегнете
                  изсипването от дъното на кутията. Този тип лента е по –
                  усилена от обикновената.
                </p>
              </section>
            </section>
          </section>
        </section>
      </main>
    </>
  );
};

export default OpakovaneNaChypliviPredmeti;
