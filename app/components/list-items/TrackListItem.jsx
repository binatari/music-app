'use client';
import React from 'react';
import Link from 'next/link';
import { formatDuration } from '@/utils/formatters';
;

const TrackListItem = ({ index, playlist, track: { id, title, duration, artist, album, type } }) => {

    const formattedDuration = formatDuration(duration);

    return (
        <li
            className='track-list-item'
        >
            <img src={ album.cover_medium } alt="" />

            <div className='song-details'>
                <div>
                    <strong className='overflow-hidden'>{ title }</strong>

                    <Link
                        href={ `/artist/${ artist.id }` }
                        className='artist-name overflowing-text'
                        onClick={ (e) => e.stopPropagation() }
                    >
                        { artist.name }
                    </Link>
                </div>

                <span>{ formattedDuration }</span>
                
            </div>
        </li>
    );
};

export default TrackListItem;