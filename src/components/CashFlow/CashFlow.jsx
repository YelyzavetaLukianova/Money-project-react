import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import s from './CashFlow.module.css';

const classsTabRight = s.tab + ' ' + s.right_tab;
const classsTabLeft = s.tab + ' ' + s.left_tab;

const CashFlow = ({ arey }) => {
  return (
    <div>
      <table className={s.table23}>
        <thead>
          <tr>
            <th className={classsTabLeft}>ДАТА</th>
            <th className={s.tab}>ОПИСАНИЕ</th>
            <th className={s.tab}>КАТЕГОРИЯ</th>
            <th className={s.tab}>СУММА</th>
            <th className={classsTabRight}>УДАЛЕНИЕ</th>
          </tr>
        </thead>
        <tbody>
          {!!arey.length &&
            arey.map(({ date, name, category, amount, id }) => (
              <tr key={id} className={s.field}>
                <td className={s.string}>{date}</td>
                <td className={s.string}>{name}</td>
                <td className={s.string}>{category}</td>
                <td className={s.string}>{amount}</td>
                <td className={s.string}>
                  <button type="button" className={s.btn_table}>
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default CashFlow;
