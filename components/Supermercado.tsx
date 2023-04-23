import Image from 'next/image';

const imagesSupermercado = {
    images : [
        {
            image: '/../public/media/supermercado1.png',
            imageName: 'loción'
        },
        {
            image: '/../public/media/supermercado2.png',
            imageName: 'cicatricure'
        },
        {
            image: '/../public/media/supermercado3.png',
            imageName: 'crema'
        },
        {
            image: '/../public/media/supermercado4.png',
            imageName: 'cicatricure'
        },
        {
            image: '/../public/media/supermercado5.png',
            imageName: 'nissin'
        },
        {
            image: '/../public/media/supermercado6.png',
            imageName: 'la lico'
        },
        {
            image: '/../public/media/supermercado7.png',
            imageName: 'eucerin'
        },
        {
            image: '/../public/media/supermercado8.png',
            imageName: 'tio nacho'
        },
    ]
}
//flex w-screen justify-center items-center debug
//w-[1200px] h-[440px] flex flex-col gap-6 debug
const Supermercado = () => (
    <>
        <section className='flex flex-col gap-6 w-screen items-center debug'>
        
            <div className='w-full flex flex-row gap-2 debug'>
                <span className='text-2xl text-ml-gray'>Colecciones:</span>
                <span className='text-2xl text-ml-gray font-bold'>Supermercado</span>
            </div>

            <div className='flex flex-row w-[1200] h-[382px]  gap-4 debug'>
                <div className='w-[384px] h-[384px] debug'>
                    <div className='bg-white rounded w-[384px]'>
                        <Image src='/../public/media/supermercado.png' alt='supermercado' width={384} height={280} className='rounded'/>
                    </div>
                    <div className='flex flex-col pt-6 pl-6 gap-1'>
                        <span className='text-xs text-ml-black-light'>Descubre</span>
                        <span className='text-2xl text-ml-black-light'>SUPERMERCADO</span>
                    </div>
                </div>
                <div className='w-[800px] h-[384px] grid grid-cols-4 gap-4 pb-2 debug'>
                    
                    {imagesSupermercado.images.map((image, index) => (
                        <Image
                        className='debug'
                        key={`${image.imageName}_${index}`}
                        src={image.image}
                        alt={image.imageName}
                        width={164}
                        height={164}
                        />
                    ))}
                </div>
            </div>
    </section>

    </>
  );

export {Supermercado};