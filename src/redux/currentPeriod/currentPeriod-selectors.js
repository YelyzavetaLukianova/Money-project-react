// получить день, месяц, год

const getDate = state => state.currentPeriod.date;
const getMonth = state => state.currentPeriod.date.month;
const getYear = state => state.currentPeriod.date.year;
const getDay = state => state.currentPeriod.date.day;
const getCurrentType = state => state.currentPeriod.currentType;
const getCurrentCategory = state => state.currentPeriod.currentCategory;

export {
  getDate,
  getMonth,
  getYear,
  getDay,
  getCurrentType,
  getCurrentCategory,
};
