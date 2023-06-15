import React, { useEffect, useRef, useState } from 'react';
import './Members.scss'
import ViewLeft from './ViewLeft';
import ViewRight from './ViewRight';
import dataList from '../assets/api/MembersData'

const Members = () => {
    const [data, setData] = useState(dataList);

    // 로컬 데이터에 저장될 형식
    const [localData, setLocalData] = useState(
        () => JSON.parse(localStorage.getItem('localData')) || []
    );
    
    const [heart, setHeart] = useState(false);
    const [listShow, setListshow] = useState(false);
    const no = useRef(localData.length + 1);

    useEffect( () => {
        // 로컬데이터 값이 변할 때마다 자동 실행(값 가지고 오기)
        localStorage.setItem('localData', JSON.stringify(localData))
    }, [localData]);

    // 명단 전체 삭제
    const onDel = () => {
        setData(data.filter(item => !item));
        setLocalData(localData.filter(item => !item));
        localStorage.clear();
    }

    // 명단 전체 보기
    const onShow = () => {
        setData(dataList);
    }
    
    // 좋아요 체크
    const onLike = (id) => {
        setData(data.map(item=> item.id === id ? {...item, like: heart} : item));
        setHeart(!heart);
    }

    // 명단 작성 열기-닫기
    const onList = () => {
        setListshow(!listShow)
    }

    // 작성한 명단 추가
    const onAdd = (user) => {
        const {id, name, job, tel, pic} = user;
        if (!name.trim() || !job.trim() || !tel.trim() || !pic.trim()) return;
        // 공백 값 넣으면 Add 안 됨

        user.id = no.current++;
        user.like = false;
        setLocalData([...localData, user]);
        // 로컬데이터에 user 저장
    }

    return (
        <div className='wrap'>
            <div className="left">
                <ViewLeft data={data} localData={localData} onDel={onDel} onShow={onShow} onLike={onLike}/>
            </div>
            <div className="right">
                <ViewRight data={data} onList={onList} listShow = {listShow} onAdd={onAdd} />
            </div>
        </div>
    );
};

export default Members;