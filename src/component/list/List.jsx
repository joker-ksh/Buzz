import "./list.css";
import Userinfo from "./userInfo/Userinfo";
import Chatlist from "./chatlist/Chatlist";
const List = () =>{
    return (
        <div className="list">
            <Userinfo />
            <Chatlist />
        </div>
    )
}

export default List;