import React from 'react';
import PeopleForm from './PeopleForm';

const ViewRight = ({ data, onList, listShow, onAdd }) => {
    return (
      <>
        <button onClick={onList}>
          {
            listShow ? "작성 닫기" : "명단 작성"
          }
        </button>
          <div className={`show ${listShow ? "on" : ""}`}>
            <PeopleForm data={data} onAdd={onAdd} />
            <strong>사진 주소</strong>
            <ul>
              <li>https://zrr.kr/jXgQ</li>
              <li>https://zrr.kr/GoSF</li>
              <li>https://zrr.kr/4ycm</li>
              <li>https://zrr.kr/9o57</li>
              <li>https://zrr.kr/vD1g</li>
            </ul>
        </div>
      </>
    );
  };

export default ViewRight;