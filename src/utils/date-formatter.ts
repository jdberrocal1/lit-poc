import 'dayjs';

function dateFormatter(date: string, format: string) {
  const dateFormatted = dayjs(date).format(format);

  if (dateFormatted) return dateFormatted;

  return date;




}

export default dateFormatter;
