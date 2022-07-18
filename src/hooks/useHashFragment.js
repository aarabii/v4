import { useEffect } from "react";

export function useHashFragment(offset = 0, trigger = true) {
    useEffect(() => {
        const scrollToHashElement = () => {
            const { hash } = window.location;
            const elementTOScroll = document.getElementById(hash?.replace("#", ""));
    
            if(!elementTOScroll) {
                return;
            };
    
            window.scrollTo({
                top: elementTOScroll.offsetTop - offset,
                behavior: "smooth"
            });
        };

        if (!trigger) {
            return;
        };

        scrollToHashElement();

        window.addEventListener("hashchange", scrollToHashElement);

        return () => window.removeEventListener("hashchange", scrollToHashElement);
    }, [trigger]);
}