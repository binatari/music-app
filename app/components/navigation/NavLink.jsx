'use client';
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

const NavLink = ({ slug, children }) => {
    const segment = useSelectedLayoutSegment() || '';
    const isActive = segment === slug;

    return (
        <Link href={ `/${ slug }` } className={ `hover:text-mainpink active:text-mainpink text-[1em] text-[#fafafe] flex pl-[1.7em] items-center gap-[1ch] bg-no-repeat transition-[background-position] duration-[0.4s] ease-[ease-in-out] pr-0 py-[1em] ${isActive ? 'active' : ''}` }>
            { children }
        </Link>
    );
};

export default NavLink;