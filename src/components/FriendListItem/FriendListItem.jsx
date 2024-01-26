import css from './FriendListItem.module.css';
// import clsx from 'clsx';

export const FriendListItem = ({ friend: {avatar, name, isOnline}}) => {
  // const statusClasses = clsx(css.status, {
  //   [css.online]: isOnline,
  //   [css.offline]: !isOnline,
  // });
   const statusClass = isOnline ? css.online : css.offline;
    return (
      <div className={css.item}>
         <img className={css.avatar} src={avatar} alt={name} width="48" />
         <p className={css.name}>{name}</p>
         <p className={statusClass} >{isOnline ? 'Online' : 'Offline'}</p>
      </div>
    )
}