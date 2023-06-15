import { useEffect, useState } from "react";

export default function useMousePosition() {
    const [mousePosition, setMousePosition] = useState({ x: null, y: null });

    useEffect(() => {
        const mouseMove = (event) => {
            const { clientX, clientY } = event;
            setMousePosition({ x: clientX, y: clientY });
        }
        document.addEventListener("mousemove", mouseMove);

        return () => {
            document.removeEventListener("mousemove", mouseMove);
        }
    }, [])
    return mousePosition;
}