import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './ReportButton.module.css';
import { ReactComponent as ReportIcon } from '../../../images/svg/go-to-reports.svg';

export default function ReportButton() {
  return (
    <NavLink to="/report">
      <div className={s.report_button}>
        <p className={s.text}>Перейти к отчетам</p>
        <ReportIcon />
      </div>
    </NavLink>
  );
}
