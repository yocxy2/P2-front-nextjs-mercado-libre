import Image from 'next/image';

interface CardBeneficionsProps{
  backImage: string; 
  backName: string;
  forwardImage: string;
  forwardName: string;
  text1?: string;
  text2: string;
  text3: string;
}
const CardBeneficions = ({backImage, backName, forwardName, forwardImage, text1, text2, text3}: CardBeneficionsProps) => {
  return (
    <>
      <div className='relative h-[330px] w-[335px] debug'>
          <Image className= "rounded-md" src={backImage} alt={backName} width={335} height={250}/>
          <div className='-mt-24 ml-4 flex gap-4 h-[60px] '>
              <Image src={forwardImage} alt={forwardName} width={60} height={60}/>
              <div className='flex flex-col gap-[5px] pt-[5px] pb-[15px]'>
                  <span className='font-sans text-white text-xs'>{text1}</span>
                  <span className='font-sans text-white text-xl'>{text2}</span>
                  <span className='font-sans text-white'>{text3}</span>
              </div>
          </div>
      </div>
    </>
  );
};



export {CardBeneficions};