// interface FormValues {
//   name: string;
//   email: string;
//   password: string;
// }

// const inputs: Record<
//   keyof FormValues,
//   {
//     initialValue: string;
//     label: string;
//   }
// > = {
//   name: {
//     initialValue: "",
//     label: "Name",
//   },
//   email: {
//     initialValue: "",
//     label: "Email",
//   },
//   password: {
//     initialValue: "",
//     label: "Password",
//   },
// };


// const configurations = {
//   development: {
//     apiBaseUrl: "http://localhost:8080",
//     timeout: 5000,
//   },
//   production: {
//     apiBaseUrl: "https://api.example.com",
//     timeout: 10000,
//   },
//   staging: {
//     apiBaseUrl: "https://staging.example.com",
//     timeout: 8000,
//   },
// };

// type Configuration = typeof configurations

// type Environment = keyof Configuration;

// class CanvasNode {
//   x = 0;
//   y = 0;

//   move(x: number, y: number) {
//     this.x = x;
//     this.y = y;
//   }
// }

// const positionFromCanvasNode = (node: CanvasNode) => {
//   return {
//     x: node.x,
//     y: node.y,
//   };
// };
import { Logger } from "./exportTypesExample.ts";
class CanvasNode {
	x: number;
	y: number;

	constructor(x: number, y: number) {
		this.x = x;
		this.y = y;
	}

	move(x: number, y: number): this {
		this.x += x;
		this.y += y;
		return this;
	}
}

const myApp = (logger : Logger) => {
    logger.log("Hello");
	logger.info("Hello");
	logger.warn("Hello");
	logger.error("Hello");
}

myApp(Logger)

const makeQuery = (
  url: string,
  opts?: {
    method?: string;
    headers?: {
      [key: string]: string;
    };
    body?: string;
  },
) => {};

type MakeQueryParameters = Parameters<typeof makeQuery>;

const createUser = (id: string) => {
  return {
    id,
    name: "John Doe",
    email: "example@email.com",
  };
};

type User = unknown;