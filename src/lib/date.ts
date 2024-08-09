import moment from "moment";
// Format date using momomnt library

export const formatDate = (date: Date) => moment(date).format("MMM Do, YYYY")
export const formatTime = (date: Date) => moment(date).format("h:mm A")


// Function that return only the year
export const getYear = (date: string) => moment(date).format("YYYY")