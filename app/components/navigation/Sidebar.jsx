// import { AiFillHome, AiFillGithub } from 'react-icons/ai';
import { FiMusic, FiUsers, FiRadio, FiHeart, FiHome } from 'react-icons/fi';
import { GiMusicSpell } from 'react-icons/gi';
import NavLink from './NavLink';
import Link from 'next/link';

const Sidebar = () => {
    return (
        <div className='min-h-screen  md:w-[140px] transition-[margin-left] ease-in-out duration-500 fixed top-0 bottom-0 left-0 z-40 flex pt-[2.5em] pb-[2.5em] flex-col justify-center pr-[2.25vw] px-0 rounded-bl-[2em]'>


            <div>
                <h2 className='pl-[1.7em] text-mainpink hidden md:block'>DISCOVER</h2>

                <ul className='flex flex-col items-center md:block'>
                    <li>
                        <NavLink slug=''>
                            <FiHome className='hover:text-mainpink'/>
                            <span className='hidden md:block'>Home</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink slug='#'>
                            <FiMusic className='hover:text-mainpink' />
                            <span className='hidden md:block'>Songs</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink slug='#'>
                            <FiUsers className='hover:text-mainpink' />
                            <span className='hidden md:block'>Artists</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink slug='#'>
                            <FiRadio className='hover:text-mainpink'/>
                            <span className='hidden md:block'>Radio</span>
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div>
                <h2 className='pl-[1.7em] text-mainpink hidden md:block'>LIBRARY</h2>
                <ul>
                    <li>
                        <NavLink slug='#'>
                            <FiHeart className='hover:text-mainpink' />
                            <span className='hidden md:block'>Favorites</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
