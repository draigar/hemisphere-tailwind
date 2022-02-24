import Link from 'next/link';
import { Menu } from 'react-feather';
import React from "react";
import { useQueries } from "../../hooks/useQueries";
import { useRouter } from "next/router";

export default function Navbar1() {
    const router = useRouter();
    const { fetchSiteConfig, fetchRefByData, fetchSlugFor } = useQueries();
    const { title, mainNavigation } = fetchSiteConfig.isFetched && !fetchSiteConfig.isError && fetchSiteConfig.data
    const [navItems, setNavItems] = React.useState({});

    const [navbarOpen, setNavbarOpen] = React.useState(false);

    const [stickyClass, setStickyClass] = React.useState(false);

    const Nav1 = (navItems: any) => {
        const { title, ctaButton, navigationCTA, nav } = navItems;

        return (
            <nav className={`${router.route === '/' && 'fixed' } z-30 lg:bg-transparent ${stickyClass && 'lg:bg-white drop-shadow-md'} w-full bg-white flex flex-wrap items-center justify-between px-2 py-3`}>
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <Link href="/">
                            <a
                                className={`text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase ${stickyClass ? 'text-black' : 'lg:text-white text-black'}`}
                            >
                                {title}
                            </a>
                        </Link>
                        <button
                            title="to open on mobile"
                            className={`${stickyClass ? 'text-black' : 'text-white'} cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none`}
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            {/* <i className="fas fa-bars"></i> */}
                            <Menu color="black" size={38} />
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                        <ul className="flex flex-col bg-white lg:bg-transparent lg:flex-row list-none lg:ml-auto transition-all duration-500 ">
                            {nav && nav.map((el: any, i: number) => (
                                <li className="nav-item mr-8 " key={i}>
                                    <Link href={el.slug}>
                                        <a
                                            className={`py-1 hover-underline-animation flex items-center text-xs uppercase font-bold leading-snug transition delay-150 hover:ease-in duration-300 hover:text-primary-600 ${stickyClass ? 'text-black' : 'text-black md:text-white'} hover:opacity-75`}
                                        >
                                            <span>{el.title}</span>
                                        </a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }

    const stickNavbar = () => {
        if (window !== undefined) {
            let windowHeight = window.scrollY;
            windowHeight > 200 ? setStickyClass(true) : setStickyClass(false);
        }
    };

    React.useEffect(() => {
        if (router.route !== '/') {
            setStickyClass(true)
        } else {
            window.addEventListener('scroll', stickNavbar);
        }

        if (fetchSiteConfig.isFetched) {
            fetchRefByData.mutate(
                {
                    document: 'navigation',
                    ref: mainNavigation._ref,
                    key: '_id',
                    limit: '0'
                },
                {
                    onSuccess: (val) => {
                        const { items, ctaButton, type, navigationCTA } = val;
                        fetchSlugFor.mutate(items, {
                            onSuccess: (val) => {
                                const payload = {
                                    title,
                                    ctaButton,
                                    type,
                                    navigationCTA,
                                    nav: val,
                                }
                                console.log(payload)
                                setNavItems(payload);
                            }
                        })
                    }
                }
            )
            console.log('fetched')
        }
        return () => {
            window.removeEventListener('scroll', stickNavbar);
        };
    }, [fetchSiteConfig.isFetched])

    return <Nav1 {...navItems} />
}
