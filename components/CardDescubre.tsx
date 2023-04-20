import Image from 'next/image';

interface CardDescubreProps{
    text1: string;
    text2: string;
    text3: string;
    image: string;
    imageName: string;
    buttonName: string;
}

const CardDescubre = ({text1, text2, text3 ,image ,imageName, buttonName}: CardDescubreProps) => (
    <>
        <div className='w-[320px] flex flex-row justify-between lg:w-[505px] debug'>
            <div className='w-[155px] h-[120px] flex flex-col pt-10 pb-6 pl-8 gap-3 lg:w-[250px] lg:h-full  debug'>
                <span className='font-mono'>{text1}</span>
                <div className='flex flex-col font-serif font-bold'>
                    <span>{text2}</span>
                    <span>{text3}</span>
                </div>
                <button className='w-[120px] h-[40px] rounded-sm bg-ml-blue text-white debug'>{buttonName}</button>
            </div>
            <div className='w-[155px] h-[120px] lg:w-[250px] lg:h-full debug'>
                <Image src={image} alt={imageName} width={250} height={210}/>
            </div>
        </div>
    </>
  );

export {CardDescubre};
