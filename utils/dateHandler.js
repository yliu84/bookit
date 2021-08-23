const toUTC = (datetime) => {
  const myDate = typeof datetime === 'number' ? new Date(datetime) : datetime;

  if (!myDate || typeof myDate.getTime !== 'function') {
    return 0;
  }

  const getUTC = myDate.getTime();
  const offset = myDate.getTimezoneOffset() * 60000; // It's in minutes so convert to ms
  return getUTC - offset; // UTC - OFFSET
};

const fromUTC = (datetime) => {
  const myDate = typeof datetime === 'number' ? new Date(datetime) : datetime;

  if (!myDate || typeof myDate.getTime !== 'function') {
    return 0;
  }

  const getUTC = myDate.getTime();
  const offset = myDate.getTimezoneOffset() * 60000; // It's in minutes so convert to ms
  return getUTC + offset; // UTC + OFFSET
};

export { toUTC, fromUTC };
