import { FriendListItem } from "../FriendListItem/FriendListItem";
import css from '../FriendListItem/FriendListItem.module.css'

export const FriendList = ({ friends }) => {
    return (
        <ul className={css.friend_list}>
	{friends.map(friend => ( 
          <li key={friend.id}>
		<FriendListItem friend={friend}/>
	</li>
          ))}
</ul>
    )
};