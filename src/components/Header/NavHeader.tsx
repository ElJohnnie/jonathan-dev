'use client';
import { useMemo } from 'react';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Logo from '../../../public/JF.png';
import { usePathname } from 'next/navigation';

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

export default function NavHeader() {
  const t = useTranslations('Header');
  const pathname = usePathname();

  const links = useMemo(() => {
    return [
      {
        label: t('home'),
        href: '/',
        current: pathname === '/',
      },
      {
        label: t('about'),
        href: '/about',
        current: pathname === '/about',
      },
      {
        label: t('projects'),
        href: '/projects',
        current: pathname === '/projects',
      },
    ];
  }, [t, pathname]);

  return (
    <Disclosure as='nav' className='bg-slate-950'>
      {({ open }: any) => (
        <>
          <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 '>
            <div className='relative flex h-16 items-center justify-between'>
              <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                {/* Mobile menu button*/}
                <Disclosure.Button className='relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                  <span className='absolute -inset-0.5' />
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
              <div className='flex justify-center sm:items-stretch sm:justify-start'>
                <div className='flex items-center'>
                  <Image src={Logo} alt='Your Company' width={40} height={40} />
                </div>
                <div className='flex hidden sm:ml-6 sm:block'>
                  <div className='flex items-center space-x-4'>
                    {links.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? 'bg-gray-900 text-white'
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className='sm:hidden'>
            <div className='space-y-1 px-2 pb-3 pt-2'>
              {links.map((item) => (
                <Disclosure.Button
                  key={item.label}
                  as='a'
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.label}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
