import { useEffect, useState } from "react";

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState<{
        width: number | undefined;
        height: number | undefined;
    }>({
        width: undefined,
        height: undefined,
    });

    const [isMobile, setIsMobile] = useState<boolean>(true);

    useEffect(() => {
        if (typeof window !== "undefined") {
        const handleResize = () => {
            setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
            });

            if (window.innerWidth && window.innerWidth < 768)
            setIsMobile((prev) => true);
            if (window.innerWidth && window.innerWidth >= 768)
            setIsMobile((prev) => false);
        };

        window.addEventListener("resize", handleResize);

        handleResize();

        return () => window.removeEventListener("resize", handleResize);
        }
    }, []);

    return {
        windowSize,
        isMobile,
    };
};

export default useWindowSize;
