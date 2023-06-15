import React from 'react';
import PeopleItem from './PeopleItem'

const PeopleList = ( {data, localData, onLike} ) => {
    return (
        <ul className='Peoplelist'>
            {
                data.map(item => <PeopleItem key={item.id} item={item} onLike={onLike} />)
            }
            {
                localData.map(item => <PeopleItem key={item.id} item={item} onLike={onLike} />)
            }
        </ul>
    );
};

export default PeopleList;