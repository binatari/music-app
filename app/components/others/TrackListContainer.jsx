import React from 'react';
import TrackListItem from '../list-items/TrackListItem';

const TrackListContainer = ({ header, tracks }) => {
    return (
        <div className='w-full overflow-hidden text-offwhite flex flex-col h-full overflow-y-auto'>
            { !! header && <h2>{ header }</h2> }

            <ul>
                {
                    tracks.map((track, index) =>
                        <TrackListItem
                            key={ track.id }
                            index={ index }
                            playlist={ tracks }
                            track={ track }
                        />
                    )
                }
            </ul>
        </div>
    );
};

export default TrackListContainer;