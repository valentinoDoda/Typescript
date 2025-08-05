const isProblemOrSolution = (filename: string): boolean => {
  const splitFilename = filename.split(".");

  const finalIndex = splitFilename.length - 1;

  const extension = splitFilename[finalIndex];

  const isProblem = extension === "problem";

  const isSolution = extension === "solution";

  return isProblem || isSolution;
};

const handleFormData = (e: SubmitEvent) => {
  e.preventDefault();
  const data = new FormData(e.target as HTMLFormElement);
  const value = Object.fromEntries(data.entries());
  return value;
};

type Color =
  | string
  | {
      r: number;
      g: number;
      b: number;
    };

const config = {
  foreground: { r: 255, g: 255, b: 255 },
  background: { r: 0, g: 0, b: 0 },
  border: "transparent",
} satisfies Record<string, Color>;

config.border.toUpperCase();

console.log(config.foreground.r);

const configurations = {
  development: {
    apiBaseUrl: "http://localhost:8080",
    timeout: 5000,
  },
  production: {
    apiBaseUrl: "https://api.example.com",
    timeout: 10000,
  },
  staging: {
    apiBaseUrl: "https://staging.example.com",
    timeout: 8000,
    // @ts-expect-error
    notAllowed: true,
  },
} satisfies Record<
  string,
  {
    apiBaseUrl: string;
    timeout: number;
  }
>;

type Environment = keyof typeof configurations;

const obj = {} as Record<string, number>;

obj.a = 1;

obj.b = 2;

type test = Expect<Equal<typeof obj.a, number>>;

// 2

const menuConfig: Record<
  string,
  | {
      label: string;
      link: string;
    }
  | {
      label: string;
      children: {
        label: string;
        link: string;
      }[];
    }
> = {
  home: {
    label: "Home",
    link: "/home",
  },
  services: {
    label: "Services",
    children: [
      {
        label: "Consulting",
        link: "/services/consulting",
      },
      {
        label: "Development",
        link: "/services/development",
      },
    ],
  },
};

type tests = [
  Expect<Equal<typeof menuConfig.home.label, string>>,
  Expect<
    Equal<
      typeof menuConfig.services.children,
      {
        label: string;
        link: string;
      }[]
    >
  >
];

// 3

const element = document.getElementById("app") satisfies HTMLElement;

type test3 = Expect<Equal<typeof element, HTMLElement>>;
