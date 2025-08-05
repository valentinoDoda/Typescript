const isProblemOrSolution = (filename: string): boolean => {
  const splitFilename: string[] = filename.split(".");

  const finalIndex: number = splitFilename.length - 1;

  const extension: string | undefined = splitFilename[finalIndex];

  const isProblem: boolean = extension === "problem";

  const isSolution: boolean = extension === "solution";

  return isProblem || isSolution;
};
