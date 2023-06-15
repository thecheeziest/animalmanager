import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const PeopleItem = ( {item, onLike} ) => {
    const {id, name, job, tel, pic, like} = item;

    return (
        <li>
            <div className="pic">
                <img src={pic} alt={name} />
            </div>
            <div className="pro">
                <p><strong> {name} </strong></p>
                <p> {job} </p>
                <p> {tel} </p>
            </div>
            <i className="like" onClick={()=>onLike(id)}>
                {
                    like ? <AiFillHeart /> : <AiOutlineHeart />
                }
            </i>
        </li>
    );
};

export default PeopleItem;