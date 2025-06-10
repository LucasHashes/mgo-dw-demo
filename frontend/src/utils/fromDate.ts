import moment from "moment";

export const formatDateTime = (date: string) => {
  date = `${date}`;
  if (!date) return "--";
  if (date.length < 10) return "--";
  if (date.length == 10) {
    return moment.unix(parseInt(date)).format("YYYY-MM-DD HH:mm:ss");
  }
  return moment(parseInt(date)).format("YYYY-MM-DD HH:mm:ss");
};

export const formatTime = (seconds: number) => {
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = (seconds % 60).toFixed(0);
  return `${mins ? mins : "0"} M : ${secs} S`;
};

export const calculateDays = (startTime: string, endTime: string) => {
  const date1 = moment.unix(parseInt(startTime));
  const date2 = moment.unix(parseInt(endTime));

  const diffDays = date2.diff(date1, "days");

  return diffDays;
};
