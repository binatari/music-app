// import { AiFillHome, AiFillGithub } from 'react-icons/ai';
import { FiMusic, FiUsers, FiRadio, FiHeart, FiHome } from 'react-icons/fi';
import { GiMusicSpell } from 'react-icons/gi';
import NavLink from './NavLink';
import Link from 'next/link';

const Sidebar = () => {
    return (
        <div className='min-h-screen w-[100px] transition-[margin-left] ease-in-out duration-500 fixed top-0 bottom-0 left-0 z-40 flex pt-[2.5em] pb-[2.5em] flex-col justify-center pr-[2.25vw] px-0 rounded-bl-[2em]'>
            <Link className='app-logo' href='/' >
                {/* <GiMusicSpell /> */}
                <span>Music App</span>
            </Link>

            <div>
                <h2 className='pl-[1.7em] text-yellow'>DISCOVER</h2>

                <ul className=''>
                    <li>
                        <NavLink slug=''>
                            <FiHome className='hover:text-yellow'/>
                            <span>Home</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink slug='top_tracks'>
                            <FiMusic className='hover:text-yellow' />
                            <span>Songs</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink slug='top_artists'>
                            <FiUsers className='hover:text-yellow' />
                            <span>Artists</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink slug='radio'>
                            <FiRadio className='hover:text-yellow'/>
                            <span>Radio</span>
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div>
                <h2 className='pl-[1.7em] text-yellow'>LIBRARY</h2>
                <ul>
                    <li>
                        <NavLink slug='favorites'>
                            <FiHeart className='hover:text-yellow' />
                            <span>Favorites</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
