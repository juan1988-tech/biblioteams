import { useEffect, useRef, useState } from "react";
import type { FilterElementProps,FilterParameterProps } from "./types";

const FilterElement:React.FC<FilterElementProps> = ({value,name}) =>{
    return (
        <label className="flex mt-4" htmlFor={name}>
            <input type="checkbox" value={value} name={name} className="w-4.5 h-4.5 border-2 border-black rounded-sm"/>
            <span className="ml-3.5">{value}</span>
        </label>
    )
}

export const FilterParameter: React.FC<FilterParameterProps> = ({ children, label }) => {
    // Cambia collapsed a false para que inicie expandido
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const [maxHeight, setMaxHeight] = useState<string>("0px");
    const filterReference = useRef<HTMLDivElement | null>(null);

    // y después de montar el componente
    // Así la transición es fluida en ambos sentidos
    useEffect(() => {
        const filternode = filterReference.current;
        if (filternode) {
            if (collapsed) {
                setMaxHeight("24px");
            } else {
                setMaxHeight(`${filternode.scrollHeight}px`);
            }
        }
    }, [collapsed, children]);

    // Para evitar salto en filternode primer render, expandido por defecto
    useEffect(() => {
        const filternode = filterReference.current;
        if (filternode && !collapsed) {
            setMaxHeight(`${filternode.scrollHeight}px`);
        }
    }, []);

    return (
        <section
            style={{ maxHeight }}
            className="overflow-hidden transition-[max-height] duration-700 ease-in-out"
            ref={filterReference}
        >
            <article
                className="flex justify-between cursor-pointer"
                onClick={() => setCollapsed((prev) => !prev)}
            >
                <h2 className="text-tittle-blue font-bold">{label}</h2>
                <img
                    src="/assets/ep_arrow-blue-bold.svg"
                    className="duration-700 ease-in-out"
                    style={{
                        transform: collapsed ? "rotate(0deg)" : "rotate(180deg)"
                    }}
                />
            </article>
            {children.map((element) => (
                <FilterElement
                    key={element.value}
                    value={element.value}
                    name={element.name}
                />
            ))}
        </section>
    );
}