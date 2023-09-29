"use client"

import {Fragment, useEffect, useState} from 'react'
import {Dialog, Disclosure, Popover, Transition} from '@headlessui/react'
import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import {ChevronDownIcon, PhoneIcon, PlayCircleIcon} from '@heroicons/react/20/solid'
import LanguageDropdown from "@/app/[locale]/components/languageDropdown";
import {ThemeSwitcher} from "@/app/[locale]/components/themeSwitcher";
import Link from "next/link";
import {useTheme} from "next-themes";

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const theme = useTheme();
    const [logoSrc, setLogoSrc] = useState("./logo_black.svg");

    useEffect(() => {
        setLogoSrc(theme.resolvedTheme === "custom-dark" ? "./logo_white.svg" : "./logo_black.svg");
    }, [theme.resolvedTheme]);

    return (
        <header className="bg-transparent">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Kinnaj Films</span>
                        <img className="h-8 w-auto" src={logoSrc} alt=""/>
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true"/>
                    </button>
                </div>
                <Popover.Group className="hidden lg:flex lg:gap-x-12">
                    <Link href="/about" className="text-sm font-semibold leading-6 text-foreground">
                        About
                    </Link>
                    <Link href="/project" className="text-sm font-semibold leading-6 text-foreground">
                        Projects
                    </Link>
                    <Link
                        href="/drone" className="text-sm font-semibold leading-6 text-foreground">
                        FPV
                    </Link>
                    <Link href="/post" className="text-sm font-semibold leading-6 text-foreground">
                        Posts
                    </Link>
                </Popover.Group>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <LanguageDropdown/>
                    <div className="mx-2">
                        <ThemeSwitcher/>
                    </div>
                </div>
            </nav>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10"/>
                <Dialog.Panel
                    className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
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
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true"/>
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <Link
                                    href="/about"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-foreground hover:bg-gray-500"
                                >
                                    About
                                </Link>
                                <Link
                                    href="/projects"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-foreground hover:bg-gray-500"
                                >
                                    Projects
                                </Link>
                                <Link
                                    href="/drone"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-foreground hover:bg-gray-500"
                                >
                                    FPV
                                </Link>
                                <Link
                                    href="/post"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-foreground hover:bg-gray-500"
                                >
                                    Posts
                                </Link>
                            </div>
                            <div className="py-6">
                                <LanguageDropdown/>
                                <div className="my-2">
                                    <ThemeSwitcher/>
                                </div>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}
