import css from './FriendListItem.module.css'

export const FriendListItem = ({avatar, name, isOnline}) => {
    return (
      <div className="item">
         <img className={css.avatar} src={avatar} alt={name} width="48" />
         <p className={css.name}>{name}</p>
         <p className={css.status}>{isOnline}</p>
      </div>
    )
}