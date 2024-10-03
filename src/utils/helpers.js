import moment from "moment/moment";

export function formatDate(date) {
  return moment(date, "DD, MMMM, YYYY").format("DD/MM/YYYY");
}

export function truncateText(text) {
  const isLong = text.length > 20;
  if (isLong) {
    return text.split(" ").slice(0, 3).join(" ") + "...";
  }
  else return text
}
