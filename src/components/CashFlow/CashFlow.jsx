import { useState, useEffect, useCallback } from 'react';

import { useDispatch } from 'react-redux';

import { FaTrashAlt } from 'react-icons/fa';
import Modal from '../../common/Modal/Modal';
import ModalExit from '../Header/ModalExit/ModalExit';

import { deleteExpenseBack } from '../../redux/transaction/expense/transactionOperations';
import s from './CashFlow.module.css';

const classsTabRight = s.tab + ' ' + s.right_tab;
const classsTabLeft = s.tab + ' ' + s.left_tab;

const CashFlow = ({ arey }) => {
  const dispatch = useDispatch();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [emptyArray, setEmptyArray] = useState([]);

  useEffect(() => {
    if (arey.length >= 9) return;
    const arrayLength = 9 - arey.length;
    const newArray = new Array(arrayLength).fill(5);

    setEmptyArray(newArray);
  }, [arey.length]);

  const onDeleteClick = _id => {
    console.log(`_id CashFlow`, _id);
    dispatch(deleteExpenseBack(_id));
    setIsFormOpen(false);
  };
  const closeForm = useCallback(
    () => setIsFormOpen(prevIsFormOpen => !prevIsFormOpen),
    [],
  );
  return (
    <div>
      <table className={`${s.table23} ${s.scrollbar}`}>
        <thead>
          <tr>
            <th className={classsTabLeft}>ДАТА</th>
            <th className={s.tab}>ОПИСАНИЕ</th>
            <th className={s.tab}>КАТЕГОРИЯ</th>
            <th className={s.tab}>СУММА</th>
            <th className={classsTabRight}>УДАЛЕНИЕ</th>
          </tr>
        </thead>

        <tbody className={s.scrollbar}>
          {!!arey.length &&
            arey.map(({ date, description, category, amount, _id }) => (
              <tr key={_id} className={s.field}>
                <td className={s.string}>{date}</td>
                <td className={s.string}>{description}</td>
                <td className={s.string}>{category}</td>
                <td className={s.string}>{amount}</td>
                <td className={s.string}>
                  <button
                    type="button"
                    className={s.btn_table}
                    onClick={closeForm}
                  >
                    <FaTrashAlt />
                  </button>
                  {isFormOpen && (
                    <Modal closeForm={closeForm}>
                      <ModalExit
                        title="Вы уверены?"
                        onClose={closeForm}
                        onExit={() => onDeleteClick(_id)}
                      />
                     
                    </Modal>
                  )}
                </td>
              </tr>
            ))}
          {emptyArray.map((_, idx) => {
            return (
              <tr key={idx}>
                <td className={s.emptyLine}></td>
                <td className={s.emptyLine}></td>
                <td className={s.emptyLine}></td>
                <td className={s.emptyLine}></td>
                <td className={s.emptyLine}></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CashFlow;
