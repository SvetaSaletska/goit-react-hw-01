import css from '../TransactionHistory/TransactionHistory.module.css'

export const TransactionHistory = ({items}) => {
    return (
        <table className={css.transaction__history}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    {items.map(({id, type, amount, currency})=> (
    <tr className={css.table__row} key={id}>
      <td className={css.table__col}>{type}</td>
      <td className={css.table__col}>{amount}</td>
      <td className={css.table__col}>{currency}</td>
    </tr>))}
  </tbody>
</table>
    )
}