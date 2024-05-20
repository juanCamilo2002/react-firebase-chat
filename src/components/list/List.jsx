import Userinfo from './userinfo/Userinfo';
import ChatList from './chatList/ChatList';
import './list.css';

const List = () => {
  return (
    <div className='list'>
      <Userinfo />
      <ChatList />
    </div>
  )
}

export default List
