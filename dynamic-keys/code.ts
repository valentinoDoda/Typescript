// interface Scores {
//     [sub : string] : number;
// }



// type Scores = {
//     [sub : string] : number;
// }

interface ReqScores {
  math: number;
  english: number;
  science : number

}

interface Scores extends ReqScores{
    [sub : string] : number
}

const scores: Scores = {
    
math : 95,
english : 90,
science : 85

};

type Environment = "development" | "production" | "staging";

type Configurations = Record<Environment, {
  apiBaseUrl: string,
  timeout: number
}>;

const configurations: Configurations = {
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
  },
  // @ts-expect-error   // red squiggly line
  notAllowed: {
    apiBaseUrl: "https://staging.example.com",
    timeout: 8000,
  },
};


//Your challenge is to determine the correct typing for Configurations that will specify the keys from Environment, and the notAllowed key should still not be allowed.



interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

const fetchUser = async (): Promise<User> => {
  const response = await fetch("/api/user");
  const user = await response.json();
  return user;
};