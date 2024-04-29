import { PiListDuotone, PiXDuotone } from "react-icons/pi";
import { useStore } from '@nanostores/react';
import { isMenuOpen } from '../utils/store';
import { Dialog } from "@headlessui/react";

const navLinks = [
    {
        name: "Home",
        href: "#homeSection",
    },
    {
        name: "Features",
        href: "#featuresSection",
    },
    {
        name: "Use Cases",
        href: "#useCasesSection",
    },
    {
        name: "Team",
        href: "#teamSection",
    },
    {
        name: "Contact",
        href: "#contactSection",
    },
];

export default function Navbar() {
    const $isMenuOpen = useStore(isMenuOpen);

    return (
        <header className="fixed top-0 z-50 mt-16 bg-axol-coral rounded-full shadow border-l-2 border-t-2 border-crypto-frost/75">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-[32px] py-[8px] lg:px-8 gap-8" aria-label="Global">
                <a href="#heroSection" className="-m-1.5 p-1.5">
                    <span className="sr-only">Axol.io</span>
                    <img className="h-8 w-auto" src="/Logo.svg" alt="Axol.io" />
                </a>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => isMenuOpen.set(!$isMenuOpen)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <PiListDuotone className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-4">
                    {navLinks.map((item) => (
                        <a key={item.name} href={item.href} data-target={item.href} className="text-nav font-display leading-6 rounded-[4px] text-node-indigo lowercase hover:border-b-4 hover:border-node-indigo transition-all duration-300">
                            {item.name}
                        </a>
                    ))}
                </div>
            </nav>
            <Dialog as="div" className="lg:hidden" open={$isMenuOpen} onClose={() => isMenuOpen.set(!$isMenuOpen)}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                className="h-8 w-auto"
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                alt=""
                            />
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => isMenuOpen.set(!$isMenuOpen)}
                        >
                            <span className="sr-only">Close menu</span>
                            <PiXDuotone className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {navLinks.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header >
    );
}

