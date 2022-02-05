import Navbar1 from "@web/components/navs/nav1";
import React from "react";

const isServer = typeof window === 'undefined'
const WOW = !isServer ? require('wow.js') : null

interface DefaultLayoutProps {
    // navContent: navTypes;
    children?: any;
}

const DefaultLayout = (props: DefaultLayoutProps) => {
    const { children } = props;
    // const isFetching = useIsFetching()

    React.useEffect(() => {
        new WOW().init()
    },[])
    return (
        <div>
            <Navbar1 />
            {children}
        </div>
    )
}

export default DefaultLayout;