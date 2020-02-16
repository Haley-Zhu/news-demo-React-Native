export function timeFormat_cn(time) {
  const _time = new Date(time);
  const year = _time.getFullYear();
  const month = _time.getMonth() + 1;
  const date = _time.getDate();
  const hour = _time.getHours();
  const minute = _time.getMinutes();
  return `${year}年${month}月${date}日 ${hour}:${minute}`;
}
