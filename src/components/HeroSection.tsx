import Image from 'next/image';
import React ,{useMemo} from 'react'
import { useTheme } from "@/lib/ThemeContext";
import CubeComponent  from "@/components/shared/Cube"
const HeroSection = () => {
  const { theme } = useTheme();
  const F4D_IMAGE = useMemo(() => theme === 'dark' ? "/images/logos/f4d-black.gif" : "/images/logos/f4d-white.gif", [theme]);
  const NEXT_LOGO = useMemo(() => theme === 'dark' ? "/images/Next-JS-logo-white.png" : "/images/Next-JS-logo-black.png", [theme]);
  const STRIPE_LOGO = useMemo(() => theme === 'dark' ? "/images/Strapi-logo-white.png" : "/images/Strapi-logo-black.png", [theme]);
  return (
    <div className='w-full py-10'>
          <div className='hidden md:block'>
          <CubeComponent></CubeComponent>
          </div>
          <div className=' relative w-full xl:w-11/12  mx-auto flex justify-center flex-col items-center gap-y-10 z-40' >
               <div className='relative z-10'>
               <Image src={F4D_IMAGE} width={350} height={350} alt='f4d'/>
               </div>
               <div  className='text-2xl md:text-4xl xl:text-6xl text-center'>
                  <span className='font-bold' >Solutions</span> de développement <br></br>
                    <span className='font-bold'>rapides</span>  et <span>flexibles</span> avec  <br></br>
               </div>
               <div className='border rounded-md border-blue-500 flex gap-x-10 items-center px-10 py-5'>
               <Image src={STRIPE_LOGO} width={120} height={150} alt='f4d' />
               <span className='text-base'>&</span>
               <Image src={NEXT_LOGO} width={100} height={30} alt='f4d' />
               </div>
               <div className='text-center w-full xl:w-9/12 px-3'>
                  <p>Nous créons des applications web sur mesure, rapides et évolutives grâce à Strapi pour une gestion de contenu flexible et Next.js pour des performances optimales et un SEO renforcé.</p>
               </div>
          </div>
    </div>
  )
}

export default HeroSection