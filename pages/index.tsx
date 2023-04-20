import { CardBeneficions } from '@components/cardBeneficions';
import { NextPage } from 'next';
import Head from 'next/head';

const cardBeneficiosInfo = {
    cards: [
        {
            backImage: "/../public/media/homero.png",
            backName: "películas-disney+star+",
            forwardImage: "/../public/media/disney-star.png",
            forwardName: "disney+",
            text1: "",
            text2: "Sin cargo con el nivel 6",
            text3: "Diseny+ y Star+"
        },
        {
            backImage: "/../public/media/hbo.png",
            backName: "películas-hbo-max",
            forwardImage: "/../public/media/hbo-max.png",
            forwardName: "hbo-max",
            text1: "7 DÍAS GRATIS",
            text2: "Hasta 50% OFF",
            text3: "HBO Max"
        },
        {
            backImage: "/../public/media/tom.png",
            backName: "películas-paramount+",
            forwardImage: "/../public/media/paramount.png",
            forwardName: "paramount+",
            text1: "7 DÍAS GRATIS",
            text2: "Hasta 50% OFF",
            text3: "Paramount+"
        }
    ]
}

const Home: NextPage = () => (
  <>
    <Head>
      <title>Mercado Libre</title>
      <meta
        name='description'
        content='Proyecto 2 Ingenieria Web UdeA Jovan Alejandro Zambrano Bello - Santiago Bedoya Diaz - Victor Manuel Osorio Garcia'
      />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='icon' href='/favicon.svg' />
    </Head>
    <div className='text-3xl font-bold underline'>Proyecto 2</div>

    <section className='flex w-screen justify-center items-center'>
      <div className='w-[320px] lg:w-[1024px] flex flex-col gap-[22px]'>
        <div className='flex gap-[25px] pt-10 pl-2'>
          <span className='font-sans text-2xl text-ml-gray'>
            Beneficios de Mercado Puntos
          </span>
          <span className='font-sans text-sm text-ml-blue pt-[10px]'>
            Ver todos los beneficios
          </span>
        </div>
        <div className='flex gap-4 pr-2 pl-2 flex-col lg:flex-row'>
          {cardBeneficiosInfo.cards.map((card, index) => (
            <CardBeneficions
              key={`${card.forwardName}_${index}`}
              backImage={card.backImage}
              backName={card.backName}
              forwardImage={card.forwardImage}
              forwardName={card.forwardName}
              text1={card.text1}
              text2={card.text2}
              text3={card.text3}
            />
          ))}
        </div>
      </div>
    </section>

  </>
);

export default Home;
