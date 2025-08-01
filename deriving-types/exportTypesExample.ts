export const Logger = {
  log: (message: string) => console.log(message),
  info: (message: string) => console.info(`INFO: ${message}`),
  warn: (message: string) => console.warn(`WARNING: ${message}`),
  error: (message: string) => console.error(`ERROR: ${message}`),
};

export type Logger = typeof Logger;

export const programModeEnumMap = {
  GROUP: "group",
  ANNOUNCEMENT: "announcement",
  ONE_ON_ONE: "1on1",
  SELF_DIRECTED: "selfDirected",
  PLANNED_ONE_ON_ONE: "planned1on1",
  PLANNED_SELF_DIRECTED: "plannedSelfDirected",
} as const;

type ProgramModeMap = typeof programModeEnumMap;

type AllPrograms = unknown;

type test = Expect<
  Equal<
    AllPrograms,
    | "group"
    | "announcement"
    | "1on1"
    | "selfDirected"
    | "planned1on1"
    | "plannedSelfDirected"
  >
>;

