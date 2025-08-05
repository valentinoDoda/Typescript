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

const obj: Record<string, number> = {};

obj.a = 1;

obj.b = 2;

// 2

const menuConfig = {
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
} satisfies Record<
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
>;

// 3

const element = document.getElementById("app") as HTMLElement;

const routes = {
  "/": {
    component: "Home",
  },
  "/about": {
    component: "About",
    // @ts-expect-error
    search: "?foo=bar",
  },
}as const satisfies Record<string, {component : string}> ;

// @ts-expect-error
routes["/"].component = "About";



// Your task is to update the routes object typing so that all errors are resolved.

// This will require you to use satisfies as well as another annotation that ensures the object is deeply read-only.
