export const formattedDate = (date: Date) => {
  const convertedDate = new Date(date);
  const formattedDate = convertedDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return formattedDate;
};
