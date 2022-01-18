import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './ReportButton.module.css';

export default function ReportButton() {
  return (
    <NavLink to="/report">
      <p className={s.report_button}>Перейти к отчетам</p>
    </NavLink>
  );
}
