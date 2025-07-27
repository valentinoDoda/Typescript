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


//Challenge: Your challenge is to determine the correct typing for this Scores interface that will specify the default keys, as well as allow for any other string key to be added to it.

// Currently Scores uses an interface, but you can change its type if you like.

// Once you've made your modifications, you should be able to assign new properties to the scores object, and the @ts-expect-error error will go away because science will be required but missing.


