import { useStore } from '@nanostores/react';
import { isMenuOpen } from '../utils/store';
import { Dialog } from "@headlessui/react";
import { motion, useInView } from "framer-motion";
import { useRef } from 'react';
import Ticker from 'framer-motion-ticker';

const announcement = {
    text: "Now running infra for Lido, Gnosis, Origin!",
    icon: "/images/icon-announcement.svg",
    url: "#"
}

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
    // {
    //     name: "Blog",
    //     href: "/blog",
    // },
    {
        name: "Faucet",
        href: "https://faucet.axol.io",
    },
];

const navContainer = {
    visible: {
        // y: 0,
        opacity: 1,
        transition: {
            x: { velocity: 100 },
            duration: 0.3
        }
    },
    hidden: {
        // y: -250,
        opacity: 0,
        transition: {
            x: { velocity: 100 },
            duration: 0.3
        }
    }
};

export default function Navbar() {
    const $isMenuOpen = useStore(isMenuOpen);
    const ref = useRef<HTMLElement>(document.getElementById("homeSection"));
    const isInView = useInView(ref, { once: false });

    return (
        <>
            <a className={`fixed z-20 hidden md:flex flex-row mt-0 px-6 py-1 bg-axol-coral border-transparent md:border-l-2 md:border-b-2 md:border-crypto-frost/75 hover:border-node-indigo transition-all duration-300 rounded-bl-full rounded-br-full justify-center items-center shadow-md gap-2 ` + (isInView ? "md:hidden -translate-y-32" : "md:visible")} href={announcement.url}
            >
                <img src={announcement.icon} alt="Announcement" />
                <p className="text-node-indigo text-body-sm font-body">{announcement.text}</p>
            </a>
            <header className="fixed z-20 mt-12 md:mt-12 w-full md:w-auto inline-flex flex-col items-center justify-start">
                <a className={`hidden md:inline-flex w-fit h-auto px-6 py-1 bg-axol-coral border-x-2 border-t-2 border-transparent hover:border-node-indigo transition-all duration-300 rounded-tl-full rounded-tr-full justify-center items-center gap-2 ` + (isInView ? "md:visible" : "md:invisible -translate-y-32")} href={announcement.url}
                >
                    <img src={announcement.icon} alt="Announcement" />
                    <p className="text-node-indigo text-body-sm font-body ">{announcement.text}</p>
                </a>
                <nav className="w-full md:w-auto flex rounded-full md:border-l-2 md:border-t-2 md:border-crypto-frost/75 md:bg-axol-coral items-center justify-between px-4 md:px-8 md:pb-2 md:pt-[10px] gap-12 md:shadow-md" aria-label="Global">
                    <a href="/" className="px-4 py-2 rounded-full md:rounded-none bg-axol-coral border-x border-t border-b-4 border-node-indigo md:border-0 md:bg-transparent md:px-0 md:pt-0 md:pb-[4px]">
                        <span className="sr-only">Axol.io</span>
                        <img className="h-[36px] md:h-10 w-auto" src="/images/logo-primary-node-indigo.svg" alt="Axol.io Logo" />
                    </a>
                    <div className="flex md:hidden items-start justify-end">
                        <button
                            type="button"
                            className="flex md:hidden p-2 rounded-[6px] bg-axol-coral border-x border-t border-b-4 border-node-indigo"
                            aria-label="Menu button"
                            onClick={() => isMenuOpen.set(!$isMenuOpen)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <img src="/images/icon-menu.svg" className="h-8 w-8" aria-hidden="true" alt="Menu icon" />
                        </button>
                    </div>
                    <div className="hidden md:flex md:gap-x-6">
                        {navLinks.map((item) => (
                            <a key={item.name} href={item.href} data-target={item.href} className="text-nav font-display rounded-[4px] text-node-indigo lowercase border-b-4 border-transparent hover:border-node-indigo transition-all duration-300">
                                {item.name}
                            </a>
                        ))}
                    </div>
                </nav>
                <Dialog as="div" className="md:hidden" open={$isMenuOpen} onClose={() => isMenuOpen.set(!$isMenuOpen)}>
                    <Dialog.Panel className="fixed inset-y-0 right-0 z-30 w-full overflow-y-auto px-4 py-[50px] flex flex-col items-end justify-start gap-4">
                        <div className="w-full flex items-start justify-end">
                            <button
                                type="button"
                                className="flex p-2 rounded-[6px] bg-axol-coral border-x border-t border-b border-node-indigo"
                                aria-label="Close button"
                                onClick={() => isMenuOpen.set(!$isMenuOpen)}
                            >
                                <span className="sr-only">Close menu</span>
                                <img src="/images/icon-close.svg" className="h-8 w-8" aria-hidden="true" alt="Close menu icon" />
                            </button>
                        </div>
                        <motion.div className=" bg-axol-coral px-24 py-6 items-center justify-center text-center border-x border-t border-b-6 border-node-indigo rounded-[6px] flex flex-col gap-6"
                            initial="hidden"
                            animate={$isMenuOpen ? "visible" : "hidden"}
                            exit="hidden"
                            variants={navContainer}>
                            {navLinks.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="flex w-fit text-nav font-display rounded-[4px] text-node-indigo lowercase border-b-4 border-transparent hover:border-node-indigo transition-all duration-300"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </motion.div>
                    </Dialog.Panel>
                </Dialog>
            </header >
            <div className="fixed md:static z-20 md:z-0 w-full md:w-0 flex md:block md:h-0 flex-row mt-0 py-2 md:py-0 bg-axol-coral shadow-md gap-2">
                <Ticker duration={20} >
                    <a className="flex flex-row gap-2 mx-2" href={announcement.url}
                    >
                        <img src={announcement.icon} alt="Announcement" />
                        <p className="text-node-indigo text-body-sm font-body">{announcement.text}</p>
                    </a>
                    <a className="flex flex-row gap-2 mx-2" href={announcement.url}
                    >
                        <img src={announcement.icon} alt="Announcement" />
                        <p className="text-node-indigo text-body-sm font-body">{announcement.text}</p>
                    </a>
                </Ticker>
            </div>
        </>
    );
}

