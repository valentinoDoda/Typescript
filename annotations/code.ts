const isProblemOrSolution = (filename: string): boolean => {
  const splitFilename = filename.split(".");

  const finalIndex = splitFilename.length - 1;

  const extension = splitFilename[finalIndex];

  const isProblem= extension === "problem";

  const isSolution = extension === "solution";

  return isProblem || isSolution;
};
