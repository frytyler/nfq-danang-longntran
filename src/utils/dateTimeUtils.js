function convertTimeStampToDate(timestamp) {
  let options = { year: 'numeric', month: 'long', day: 'numeric' };
  options.timeZone = 'UTC';
  return new Date(timestamp || new Date().getTime()).toLocaleDateString(
    'en-US',
    options,
  );
}

export default convertTimeStampToDate;
