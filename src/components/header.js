import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'

import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import MedtimeLogo from '../img/MeditimeLogo.png'
import { Link } from 'react-router-dom'

const products = [
  { name: 'Sports Medicine',  href: 'https://www.conmed.com/en/specialties-and-techniques/specialties/orthopedics' },
  { name: 'Powered Instruments',href: 'https://www.conmed.com/en/products/surgical-power-tools' },
  { name: 'VWELL Products', href: 'https://www.vwell.care/footcare' },
  
]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white xl:h-[120px] px-4">
      <nav className="flex max-w-[1290px] h-[120px] mx-auto items-center justify-between lg:px-0" aria-label="Global">
        <div className="flex lg:flex-1 h-full items-center">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="w-[166px] xl:w-[269px] h-auto" src={MedtimeLogo} alt="" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <svg fill="#026B3F" width="20" height="20" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg"><path class="clr-i-outline clr-i-outline-path-1" d="M32 29H4a1 1 0 0 1 0-2h28a1 1 0 0 1 0 2Z"/><path class="clr-i-outline clr-i-outline-path-2" d="M32 19H4a1 1 0 0 1 0-2h28a1 1 0 0 1 0 2Z"/><path class="clr-i-outline clr-i-outline-path-3" d="M32 9H4a1 1 0 0 1 0-2h28a1 1 0 0 1 0 2Z"/><path fill="none" d="M0 0h36v36H0z"/></svg>
          </button>
        </div>
        <Popover.Group className="hidden lg:flex h-full lg:gap-x-12">
          <Popover className="relative h-full flex justify-center items-center px-3 hover:bg-[#006B3D] hover:text-white">
            <Popover.Button className="flex items-center gap-x-1 text-[18px] font-bold leading-6 text-[#2a3d53] uppercase h-full hover:text-white">
            สินค้าทั้งหมด
              <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-[300px] max-w-md overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-2 text-sm leading-6"
                    >
                      
                      <div className="flex-auto">
                        <a href={item.href} className="block text-[18px] font-normal text-[#333333]">
                          {item.name}
                          
                        </a>
                      
                      </div>
                    </div>
                  ))}
                </div>
                
              </Popover.Panel>
            </Transition>
          </Popover>

          <Link to="/บริการหลังการขาย/" className="text-[18px] font-bold text-[#2a3d53] px-3 hover:bg-[#006B3D] hover:text-white uppercase h-full flex items-center justify-center ">
          บริการหลังการขาย
          </Link>
          <Link to="/about-us/" className="text-[18px] font-bold text-[#2a3d53] px-3 hover:bg-[#006B3D] hover:text-white uppercase h-full flex items-center justify-center">
          เกี่ยวกับ MediTime
          </Link>
        </Popover.Group>
      
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src={MedtimeLogo}
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                      สินค้าทั้งหมด
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {products.map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  บริการหลังการขาย
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                 เกี่ยวกับ MediTime
                </a>
                
              </div>
             
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}