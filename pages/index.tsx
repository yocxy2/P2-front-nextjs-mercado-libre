import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

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

    <section className="main-div1-section4 debug">
        <div className="section4-div-arriba">
            <span className="section4-span-grande debug">Beneficios de Mercado Puntos</span>
            <span className="section4-span-pequeño debug">Ver todos los beneficios</span>
        </div>
        <div className="section4-div-abajo">
            <div className="imagenes-superpuestas1">
                <div className="div-interno">
                    <img className="imagen-interna" src="../public/media/disney-star.png"/>
                    <div className="spans-internos">
                        <span className="span-interno1">Sin cargo con el nivel 6</span>
                        <span className="span-interno2">Diseny+ y Star+</span>
                    </div>
                </div>
            </div>
            <div className="imagenes-superpuestas2">
                <div className="div-interno">
                    <img className="imagen-interna" src="../public/media/hbo-max.png"/>
                    <div className="spans-internos-2-3">
                        <span className="span-7dias">7 DÍAS GRATIS</span>
                        <span className="span-interno1">Hasta 50% OFF</span>
                        <span className="span-interno-hbo">HBO Max</span>
                    </div>
                </div>
            </div>
            <div className="imagenes-superpuestas3">
                <div className="div-interno">
                    <img className="imagen-interna" src="../public/media/paramount.png"/>
                    <div className="spans-internos-2-3">
                        <span className="span-7dias">7 DÍAS GRATIS</span>
                        <span className="span-interno1">Hasta 50% OFF</span>
                        <span className="span-interno2">Paramount+</span>
                    </div>
                </div>
            </div>
            
        </div>
    </section>

    <section className='debug w-[1200px] h-[400px] flex flex-col gap-[22px]'>
        <div className='debug flex gap-[25px] pt-10 pl-2'>
            <span className='font-sans text-2xl text-ml-gray debug'>Beneficios de Mercado Puntos</span>
            <span className='font-sans text-sm text-ml-blue pt-[10px] debug'>Ver todos los beneficios</span>
        </div>  

        <div className='flex gap-4 pr-2 pl-2'>

            <div className='relative h-[250px] w-[384px]'>
                <Image className= "rounded-md" src="/../public/media/homero.png" alt="películas-disney+star+" width={384} height={250}/>
                <div className='-mt-24 ml-4 flex gap-4 h-[80px]'>
                    <Image src="/../public/media/disney-star.png" alt="disney+" width={80} height={80}/>
                    <div className='flex flex-col gap-[5px] pt-4 pb-4'>
                        <span className='font-sans text-ml-white text-xl'>Sin cargo con el nivel 6</span>
                        <span className='font-sans text-ml-white'>Diseny+ y Star+</span>
                    </div>
                </div>
            </div>

            <div className='relative h-[250px] w-[384px]'>
                <Image className= "rounded-md" src="/../public/media/hbo.png" alt="películas-hbo-max" width={384} height={250}/>
                <div className='-mt-24 ml-4 flex gap-4 h-[80px]'>
                    <Image src="/../public/media/hbo-max.png" alt="hbo-max" width={80} height={80}/>
                    <div className='flex flex-col gap-[5px] pt-[5px] pb-[15px]'>
                        <span className='font-sans text-ml-white text-xs'>7 DÍAS GRATIS</span>
                        <span className='font-sans text-ml-white text-xl'>Hasta 50% OFF</span>
                        <span className='font-sans text-ml-white'>HBO Max</span>
                    </div>
                </div>
            </div>

            <div className='relative h-[250px] w-[384px]'>
                <Image className= "rounded-md" src="/../public/media/tom.png" alt="películas-paramount+" width={384} height={250}/>
                <div className='-mt-24 ml-4 flex gap-4 h-[80px]'>
                    <Image src="/../public/media/paramount.png" alt="paramount+" width={80} height={80}/>
                    <div className='flex flex-col gap-[5px] pt-[5px] pb-[15px]'>
                        <span className='font-sans text-ml-white text-xs'>7 DÍAS GRATIS</span>
                        <span className='font-sans text-ml-white text-xl'>Hasta 50% OFF</span>
                        <span className='font-sans text-ml-white'>Paramount+</span>
                    </div>
                </div>
            </div>

        </div> 

    </section>
  </>
);

export default Home;
