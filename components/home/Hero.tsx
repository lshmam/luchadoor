import clientLogo1 from '@public/images/icons/client-logo-1.svg';
import clientLogo2 from '@public/images/icons/client-logo-2.svg';
import clientLogo3 from '@public/images/icons/client-logo-3.svg';
import clientLogo4 from '@public/images/icons/client-logo-4.svg';
import clientLogo5 from '@public/images/icons/client-logo-5.svg';
import clientLogoDark1 from '@public/images/icons/client-logo-dark-1.svg';
import clientLogoDark2 from '@public/images/icons/client-logo-dark-2.svg';
import clientLogoDark3 from '@public/images/icons/client-logo-dark-3.svg';
import clientLogoDark4 from '@public/images/icons/client-logo-dark-4.svg';
import clientLogoDark5 from '@public/images/icons/client-logo-dark-5.svg';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const clientLogos = [
  { id: 1, light: clientLogo1, dark: clientLogoDark1 },
  { id: 2, light: clientLogo2, dark: clientLogoDark2 },
  { id: 3, light: clientLogo3, dark: clientLogoDark3 },
  { id: 4, light: clientLogo4, dark: clientLogoDark4 },
  { id: 5, light: clientLogo5, dark: clientLogoDark5 },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-[100px] pb-[100px] lg:pt-[120px] bg-background-2 dark:bg-background-8">
      <div className="main-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-4 text-left md:space-y-6">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-blur-v2 mb-4 inline-block">Professional garage door solutions</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h1 className="text-black dark:text-black inline-block bg-accent/20 dark:bg-secondary/20 backdrop-blur-ns-badge-blur rounded-2xl px-6 py-3">
                Expert garage door installation, repair & maintenance.
              </h1>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="text-black dark:text-black max-w-[600px] inline-block bg-accent/20 dark:bg-secondary/20 backdrop-blur-ns-badge-blur rounded-xl px-5 py-2">
                Rolling steel doors, parking gates, dock levelers & more. Serving strata, commercial, and residential properties across the region.
              </p>
            </RevealAnimation>

            <RevealAnimation delay={0.4}>
              <div className="relative z-30 pt-4">
                <LinkButton
                  href="/contact"
                  className="btn btn-secondary hover:btn-white dark:btn-accent dark:hover:btn-white-dark btn-lg md:btn-xl">
                  Get a free quote
                </LinkButton>
              </div>
            </RevealAnimation>
          </div>

          {/* Right side - Hero image */}
          <RevealAnimation delay={0.3}>
            <div className="relative w-full h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/garage-door-hero.jpeg"
                alt="Property management"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </RevealAnimation>
        </div>

        {/* Client Logos */}
        <div className="before:to-background-2 dark:before:to-background-8 after:to-background-2 dark:after:to-background-8 mt-16 lg:mt-24 mx-auto overflow-hidden before:absolute before:top-0 before:-left-5 before:z-40 before:h-10 before:w-40 before:bg-gradient-to-l before:from-transparent before:content-[''] after:absolute after:top-0 after:right-0 after:z-20 after:h-10 after:w-40 after:bg-gradient-to-r after:from-transparent after:content-[''] relative lg:!max-w-[740px]">
          <RevealAnimation delay={0.5} instant={true}>
            <Marquee speed={40} autoFill={true}>
              <div className="flex items-center justify-center gap-8">
                {clientLogos.map((logo) => (
                  <figure key={logo.id} className="ml-8 max-w-max min-w-36">
                    <Image src={logo.light} alt="Client logo" className="block lg:w-auto dark:hidden" />
                    <Image src={logo.dark} alt="Client logo" className="hidden lg:w-auto dark:block" />
                  </figure>
                ))}
              </div>
            </Marquee>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Hero;
