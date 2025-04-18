export const nameRegex = (name) => {
  let fixedName = name
    .toUpperCase()
    .replace(/[:\s-.]/g, "_")
    .replace("♀", "(F)")
    .replaceAll("♂", "(M)");

  if (name === "MimeJr.") fixedName = "MIME_JR";

  return fixedName;
};