import {Fragment} from 'react'
import {Menu, Transition} from '@headlessui/react'
import {ChevronDownIcon} from '@heroicons/react/20/solid'
import {useLocale, useTranslations} from "next-intl";
import Link from "next-intl/link";
import {usePathname} from "next/navigation";

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function LanguageDropdown() {
    const t = useTranslations('Home');
    const locale = useLocale();
    let pathname: string;
    if (locale === "de") {
        pathname = usePathname();
    } else {
        pathname = "/" + usePathname().split("/").slice(2).join("/");
    }
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button
                    className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-primary-400 px-3 py-2 text-xs font-semibold text-foreground shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-primary-500">
                    {t("language")}
                    <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true"/>
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items
                    className="absolute right-0 z-10 mt-2 w-28 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        <Menu.Item>
                            {({active}) => (
                                <Link
                                    href={pathname}
                                    locale="de"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    <div className="flex justify-between">
                                        <div className="text-left">Deutsch</div>
                                        <span className="fi fi-de ms-1 rounded-full"></span>
                                    </div>
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({active}) => (
                                <Link
                                    href={pathname}
                                    locale="en"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    <div className="flex justify-between">
                                        <div className="text-left">English</div>
                                        <span className="fi fi-gb ms-1 rounded-full"></span>
                                    </div>
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({active}) => (
                                <Link
                                    href={pathname}
                                    locale="fr"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    <div className="flex justify-between">
                                        <div className="text-left">Français</div>
                                        <span className="fi fi-fr ms-1 rounded-full"></span>
                                    </div>
                                </Link>
                            )}
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}
