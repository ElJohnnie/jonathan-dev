import Image from 'next/image';
import AnimateButton from '../../Buttons/AnimateButton';
import { HeroProps } from './types';

const Hero: React.FC<HeroProps> = ({
  title,
  description,
  solutions,
  linkButton,
  image,
}) => {
  return (
    <section className='mt-8 h-auto pt-8'>
      <div className='max-w-screen mx-auto grid justify-center px-4 py-12'>
        <div className='mr-auto mt-[10vh] place-self-center md:col-span-12'>
          <h1 className='mb-4 max-w-2xl text-3xl font-extrabold leading-none tracking-tight md:text-6xl dark:text-white'>
            <span className='leading-12 block w-full bg-gradient-to-r from-indigo-700 to-fuchsia-500 bg-clip-text py-2 text-transparent lg:inline'>
              {title}
            </span>
          </h1>
          {/* <!-- Sliding Text animation --> */}
          {description && (
            <div className='md:inline-flex'>
              <h1 className='text-1xl bg-gradient-to-r from-slate-100 to-slate-200 to-50% bg-clip-text font-extrabold tracking-tight text-transparent [text-wrap:balance] md:text-4xl'>
                {description}{' '}
              </h1>
              <span className='text-1xl inline-flex h-[calc(theme(fontSize.base)*theme(lineHeight.tight))] flex-col overflow-hidden font-extrabold text-indigo-500 md:ml-1 md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] md:text-4xl'>
                <ul
                  className={`block animate-text-slide-4 text-left leading-tight [&_li]:block`}
                >
                  {solutions &&
                    solutions.map((solution) => (
                      <li key={solution}>{solution}</li>
                    ))}
                  <li aria-hidden='true'>{solutions && solutions[0]}</li>
                </ul>
              </span>
            </div>
          )}
          {/* <!-- End: Sliding Text animation --> */}

          <div className='mt-4 flex flex-row justify-center'>
            <AnimateButton title={linkButton ?? ''} route='/about' />
          </div>
        </div>
        {image && (
          <div className='hidden lg:col-span-3 lg:mt-0 lg:flex'>
            <Image
              className='filter-grayscale'
              src={'/images/jonatha.jpg'}
              alt=''
              width={400}
              height={400}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
