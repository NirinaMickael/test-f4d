import Image from 'next/image';
import React, { useMemo ,useState,useEffect} from 'react'
import { useTheme } from "@/lib/ThemeContext";
import CubeComponent from "@/components/shared/Cube"
import { Button } from "@/components/shared/Moving";
import { motion } from 'framer-motion';
const HeroSection = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Set mounted to true after the component has mounted
    setMounted(true);
  }, []);

  // If not mounted, don't render the theme-specific content

  const F4D_IMAGE = useMemo(() => theme === 'dark' ? "/images/logos/f4d-black.svg" : "/images/logos/f4d-white.svg", [theme]);
  const NEXT_LOGO = useMemo(() => theme === 'dark' ? "/images/Next-JS-logo-white.png" : "/images/Next-JS-logo-black.png", [theme]);
  const STRIPE_LOGO = useMemo(() => theme === 'dark' ? "/images/Strapi-logo-white.png" : "/images/Strapi-logo-black.png", [theme]);
  if (!mounted) {
    return null;
  }
  return (
    <div className='w-full py-3'>
      <div className='block'>
        <CubeComponent></CubeComponent>
      </div>
      <div className=' relative w-full xl:w-11/12  mx-auto flex justify-center flex-col items-center gap-y-10 z-[5]' >
        <div className='hidden md:block'>
        <motion.div
        className="absolute bg-blur w-[100px] md:w-[600px] h-[200px] md:h-[700px] -top-[100px] z-[6] left-0"
        animate={{ x: [0,60,0] }}
        transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse', ease: "linear"  }}
      />
      <motion.div
        className="absolute bg-blur w-[600px] h-[700px] -top-[200px] z-[6] -left-[200px]"
        animate={{ x: [0,60,0] }}
        transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse', ease: "linear"  }}
      />
      <motion.div
        className="absolute bg-blur w-[100px] md:w-[600px] h-[200px] md:h-[700px] -top-[100px] z-[6] right-0"
        animate={{ x: [0,60,0] }}
        transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse', ease: "linear"  }}
      />
      {/* <motion.div
        className="absolute bg-blur hidden md:block w-[600px] h-[700px] top-[100px] z-[6] -right-[150px]"
        animate={{ x: [0,60,0] }}
        transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse', ease: "linear"  }}
      /> */}
        </div>
        <div className='relative'>
          <Image src={F4D_IMAGE} width={450} height={450} alt='f4d' className='!w-[250px] md:!w-[450px]  ' />
        </div>
        <div className='text-2xl md:text-4xl xl:text-6xl text-center'>
          <span className='font-semibold' >Solutions</span> de développement <br></br>
          <span className='font-semibold'>rapides</span>  et <span className='font-semibold'>flexibles</span> avec  <br></br>
        </div>
               <Button
               containerClassName="w-[250px]  lg:w-[500px]"
               duration={3000}
        borderRadius="0.4rem"
        className="w-[250px]  lg:w-[500px] dark:bg-gradient-to-b from-[#070b14] to-[#07071b] bg-white text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
                <div className='border w-[250px]  lg:w-[500px]  flex justify-center dark:border-slate-800 rounded gap-x-2 items-center px-10 py-5'>
               <Image src={STRIPE_LOGO} width={120} height={150} alt='f4d' />
               <span className='text-base'>&</span>
               <Image src={NEXT_LOGO} width={100} height={30} alt='f4d' />
               </div>
      </Button>
        <div className='text-center w-full xl:w-9/12 px-3'>
          <p className='text-sm md:text-base'>Nous créons des applications web sur mesure, rapides et évolutives grâce à Strapi pour une gestion de contenu flexible et Next.js pour des performances optimales et un SEO renforcé.</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 pl-6 pr-2  text-sm md:text-base rounded-full flex items-center ">
          Demander une développement
          <div className='ml-4 p-2 rounded-full bg-white'>
          <Image src={'/images/go.svg'} width={10} height={10} alt='f4d' />
          </div>
         
        </button>
      </div>

    </div>
  )
}

export default HeroSection