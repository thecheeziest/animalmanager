import React, { useRef, useState } from 'react';

const PeopleForm = ( {onAdd} ) => {
    const nameRef = useRef(null);

    // input 입력 기본값 세팅
    const [user, setUser] = useState({
        name: '', job: '', tel: '', pic: ''
    })
    const {name, job, tel, pic} = user;

    // 입력된 input 값을 배열에 담기
    const changeInput = e => {
        const {value, name} = e.target;
        setUser({
            ...user,
            [name]: value
            // name에는 name value, job에는 job vlaue
        })
    }

    // form 전송
    const onSubmit = e => {
        e.preventDefault(); // submit이라서
        onAdd(user);
        setUser({
            name: '', job: '', tel: '', pic: ''
        })
        nameRef.current.focus();
    }

    return (
        <form onSubmit={onSubmit}>
            <p>
                <label htmlFor="">이름 : </label>
                <input type="text" name="name" value={name} onChange={changeInput} ref={nameRef}/>
            </p>
            <p>
                <label htmlFor="">직업 : </label>
                <input type="text" name="job" value={job} onChange={changeInput} />
            </p>
            <p>
                <label htmlFor="">연락처 : </label>
                <input type="text" name="tel" value={tel} onChange={changeInput} />
            </p>
            <p>
                <label htmlFor="">사진 : </label>
                <input type="text" name="pic" value={pic} onChange={changeInput} />
            </p>
            <button onClick={onAdd}>추가</button>
        </form>
    );
};

export default PeopleForm;