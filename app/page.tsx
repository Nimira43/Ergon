import Image from 'next/image'
// import Logo from './assets/logo.png'
import LandingImg from './assets/hero-image.jpg'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
export default function Home() {
  return (
    <main>
      {/* <header className='max-w-6xl mx-auto px-4 sm:px-8 py-6 '>
        <Image src={Logo} alt='logo' />
      </header> */}
      <section className='max-w-6xl mx-auto px-4 sm:px-8 h-screen -mt-20 grid lg:grid-cols-[1fr,400px] items-center'>
        <div>
          <h1 className='logo text-4xl font-light md:text-7xl font-medium'>
            Ergon
          </h1>
          <p className='leading-loose max-w-md mt-4 '>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ab ex assumenda quas excepturi, quam consequuntur, debitis dolores quia sed nemo, similique dolore libero rerum animi dolorum repellendus corrupti natus? Voluptate laborum corporis soluta veniam vel quibusdam ipsum vitae iure?
          </p>
          <Button asChild className='mt-4'>
            <Link 
              href='/add-job'
              className='uppercase'
            >
              Find Out More
            </Link>
          </Button>
        </div>
        <Image src={LandingImg} alt='landing' className='hidden lg:block ' />
      </section>
    </main>
  )
}