import { FriendListItem } from "../FriendListItem/FriendListItem"

export const FriendList = ({ friends }) => {
    return (
        <ul className="friend-list">
	{friends.map(({id, avatar, name}) => ()
    )}
	<li>
		<FriendListItem />
	</li>
</ul>
    )
}