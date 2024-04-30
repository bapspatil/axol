import { useStore } from '@nanostores/react';
import { isMenuOpen } from '../utils/store';
import { Dialog } from "@headlessui/react";

const navLinks = [
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
    {
        name: "Blog",
        href: "/blog",
    },
    {
        name: "Faucet",
        href: "https://faucet.axol.io",
    },
];

export default function Navbar() {
    const $isMenuOpen = useStore(isMenuOpen);

    return (
        <header className="fixed z-20 mt-8 md:mt-12 inline-flex flex-col items-center justify-start">
            <a className="hidden md:inline-flex w-fit h-auto px-6 py-1 bg-axol-coral border-x-2 border-t-2 border-transparent hover:border-node-indigo transition-colors duration-300 rounded-tl-full rounded-tr-full justify-center items-center gap-2  group" href="#">
                <img src="/images/icon-announcement.svg" alt="Announcement" />
                <p className="text-node-indigo text-body-sm font-body ">Now running infra for Lido, Gnosis, Origin!</p>
            </a>
            <nav className="rounded-full border-l-2 border-t-2 border-crypto-frost/75 bg-axol-coral mx-auto flex max-w-7xl items-center justify-between px-8 pb-2 pt-[10px] lg:px-8 gap-12 shadow-md" aria-label="Global">
                <a href="/" className="pb-[4px]">
                    <span className="sr-only">Axol.io</span>
                    <img className="h-10 w-auto" src="/images/logo-primary-node-indigo.svg" alt="Axol.io Logo" />
                </a>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => isMenuOpen.set(!$isMenuOpen)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <img src="/images/icon-menu.svg" className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-6">
                    {navLinks.map((item) => (
                        <a key={item.name} href={item.href} data-target={item.href} className="text-nav font-display rounded-[4px] text-node-indigo lowercase border-b-4 border-transparent hover:border-node-indigo transition-all duration-300">
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
                                alt="Axol.io Logo"
                            />
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => isMenuOpen.set(!$isMenuOpen)}
                        >
                            <span className="sr-only">Close menu</span>
                            <img src="/images/icon-close.svg" className="h-6 w-6" aria-hidden="true" />
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

