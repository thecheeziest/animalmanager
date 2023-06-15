import React from 'react';
import PeopleList from './PeopleList';

const Viewleft = ( {data, localData, onDel, onShow, onLike} ) => {
    return (
        <>
            <div className="btn">
                <button onClick={onDel}>명단 삭제</button>
                <button onClick={onShow}>기본 명단</button>
            </div>
            <PeopleList data={data} localData={localData} onLike={onLike} />
        </>
    );
};

export default Viewleft;