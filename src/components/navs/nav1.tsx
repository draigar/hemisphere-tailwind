import Link from 'next/link';
import { Menu } from 'react-feather';
import React from "react";
import { useQueries } from "../../hooks/useQueries";
import { useRouter } from "next/router";
import { useDeviceSize } from "../../hooks/useDeviceSize";

export default function Navbar1() {
  const router = useRouter();
  const { fetchSiteConfig, fetchRefByData, fetchSlugFor } = useQueries();
  const { title, mainNavigation } =
    fetchSiteConfig.isFetched &&
    !fetchSiteConfig.isError &&
    fetchSiteConfig.data;
  const [navItems, setNavItems] = React.useState({});

  const [width, height] = useDeviceSize();

  const [stickyClass, setStickyClass] = React.useState(false);

  const isMobile = width <= 768;

  console.log(isMobile);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 200 ? setStickyClass(true) : setStickyClass(false);
    }
  };

  React.useEffect(() => {
    if (router.route !== "/") {
      setStickyClass(true);
    } else {
      window.addEventListener("scroll", stickNavbar);
    }

    if (fetchSiteConfig.isFetched) {
      fetchRefByData.mutate(
        {
          document: "navigation",
          ref: mainNavigation._ref,
          key: "_id",
          limit: "0",
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
                };
                console.log(payload);
                setNavItems(payload);
              },
            });
          },
        }
      );
      console.log("fetched");
    }
    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, [fetchSiteConfig.isFetched]);

  const Nav1 = (navItems: any) => {
    const { title, ctaButton, navigationCTA, nav } = navItems;

    const [navbarOpen, setNavbarOpen] = React.useState(true);

    const handleOpenNav = () => {
      console.log("here");
      setNavbarOpen(true);
    };

    return (
      <>
        <nav
          className={`${router.route === "/" && "fixed"} z-30 ${
            stickyClass && "bg-white drop-shadow-md"
          } w-full flex flex-wrap items-center justify-between px-9 py-3`}
        >
          <div>
            <Link href="/">
              <a
                className={`text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase ${
                  stickyClass ? "text-black" : "text-white"
                }`}
              >
                {title}
              </a>
            </Link>
          </div>
          <div>
            {isMobile ? (
              <button
                title="to open on mobile"
                className={`${
                  stickyClass ? "text-black" : "text-white"
                } cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block md:hidden outline-none focus:outline-none`}
                type="button"
                onClick={handleOpenNav}
              >
                <Menu color="black" size={38} />
              </button>
            ) : (
              <ul className="flex md:flex-row list-none md:ml-auto">
                {nav &&
                  nav.map((el: any, i: number) => (
                    <li className="nav-item mr-8 " key={i}>
                      <Link href={el.slug}>
                        <a
                          className={`px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:text-primary-600 hover:underline underline-offset-4 decoration-2 ${
                            stickyClass ? "text-black" : "text-white"
                          } hover:opacity-75`}
                        >
                          <span className="ml-2">{el.title}</span>
                        </a>
                      </Link>
                    </li>
                  ))}
              </ul>
            )}
          </div>
        </nav>
        <MobileContent
          navbarOpen={navbarOpen}
          setNavbarOpen={setNavbarOpen}
          nav={nav}
        />
      </>
    );
  };

  return <Nav1 {...navItems} />;
}

const MobileContent = ({ navbarOpen, setNavbarOpen, nav }: any) => {
  const style = {
    // position: "fixed",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.99)",
    zIndex: 2,
  };

  return (
    <>
      {navbarOpen && (
        <div style={style} className="p-6">
          <p
            className="text-white text-right text-xl"
            onClick={setNavbarOpen(false)}
          >
            X
          </p>
          <div className="text-center  mb-2">
            <Link href="/">
              <a className="text-white">Home</a>
            </Link>
          </div>
          <div>
            {nav &&
              nav.map((el: any, i: any) => {
                return (
                  <div className="text-center  mb-4">
                    <Link href={el.slug}>
                      <a className="text-white">{el.title}</a>
                    </Link>
                  </div>
                );
              })}
          </div>
        </div>
      )}
    </>
  );
};