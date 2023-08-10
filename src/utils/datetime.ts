import moment from "moment";

/**
 * Calculates the end time of a time period and present it in a readable format
 * @param startDateTime - start time in milliseconds
 * @param duration - duration in minutes
 *
 * @returns string (e.g., 10:00 AM - 11:00 AM)
 */
export function formatTimePeriod(
  startDateTime: number,
  duration: number
): string {
  const endTime = moment(startDateTime).add(duration, "minutes");

  return `${moment(startDateTime).format("h:mm A")} - ${endTime.format(
    "h:mm A"
  )}`;
}
