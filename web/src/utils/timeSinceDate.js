const dayIndexToText = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const monthIndexToText = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
export const timeSinceDate = (dateOrIsoString) => {
  const date = new Date(dateOrIsoString);
  const now = new Date();
  const msDiff = now.getTime() - date.getTime();
  const dayInWeek = date.getDay();
  const dayDiff = msDiff / (1000 * 60 * 60 * 24);
  const monthDiff = (now.getFullYear() - date.getFullYear())*12 - date.getMonth() + now.getMonth();
  
  if (dayDiff < 1) {
    const hourDiff = parseInt(msDiff / (1000 * 60 * 60));
    const minDiff = parseInt(msDiff / (1000 * 60));
    
    if (minDiff < 1) {
      return 'just now';
    } else if (minDiff < 2) {
      return 'a minute ago';
    } else if (hourDiff < 1) {
      return `${minDiff} minutes ago`;
    } else if (hourDiff < 2) {
      return `1 hour ago`;
    } else {
      return `${hourDiff} hours ago`;
    }
  } else {
    const hours = date.getHours() % 12;
    const timestamp = `${ hours === 0 ? 12 : hours }:${date.getDate()}${date.getHours() > 12 ? 'pm' : 'am'}`;
    if (dayDiff < 1.5) { //1.5 because yesterday morning during today's afternoon is >1 day away
      return `Yesterday at ${timestamp}`
    } else if (dayDiff < 6) {
      return `${dayIndexToText[dayInWeek]} at ${timestamp}`;
    } else if (monthDiff < 12) {
      return `${monthIndexToText[date.getMonth()]} ${date.getDate()} at ${timestamp}`;
    } else {
      return `${monthIndexToText[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()} ${timestamp}`;
    }
  }
}