// class CanvasNode {
//     readonly x: number
//     readonly y:  number
//     constructor(){
//         this.x = 14;
//         this.y = 10; 
//     }
// }


// const canvasNode = new CanvasNode()
// // @ts-expect-error Property is readonly
//   canvasNode.x = 10;

//   // @ts-expect-error Property is readonly
//   canvasNode.y = 20;


// type Canvas = {
//     x: number,
//     y:number 
// }

// class CanvasNode {
//   x = 0;
//   y = 0;
//   constructor( obj?:Canvas){
//     if(obj){
//         this.x = obj.x;
//         this.y = obj.y;
//     }
//   }
//     move(x: number, y: number){
// this.x = x;
// this.y = y;
// }
// }


// const canvasNode = new CanvasNode();

// canvasNode.move(10, 20);

// Your challenge is to modify the CanvasNode class so that it can receive
//  an optional initial position. This will require you to add a constructor that can accept an argument.

class CanvasNode {
  private x: number;
  private y: number;

  constructor(position?: { x: number; y: number }) {
    this.x = position?.x ?? 0;
    this.y = position?.y ?? 0;
  }

  get position(){
    return{
        x : this.x,
        y :this.y
    }
  }
  set position(pos){
    this.x = pos.x;
    this.y = pos.y
  }

  move(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}


// Your task is to revise the code for CanvasNode to include a getter for position. This getter should return an object with x and y properties that represent the current position of the CanvasNode object.

// Your task is to resolve this issue by blocking awareness and access to x and y from outside the CanvasNode class.

// There are two potential approaches for this: one that's JavaScript-first and one that's TypeScript-first. The JavaScript-first approach is preferred, but either solution is acceptable. See if you can find both!



interface ShapeOptions {
  x: number;
  y: number;
}

type IShape = {
  position: { x: number; y: number };
  move: (deltaX: number, deltaY: number) => void;
};

// How do we ensure our Shape class matches IShape?
class Shape implements IShape{
  #x: number;
  #y: number;

  constructor(initial?: ShapeOptions) {
    this.#x = initial?.x ?? 0;
    this.#y = initial?.y ?? 0;
  }

  get position() {
    return {
      x: this.#x,
      y: this.#y,
    };
  }

  move(x: number, y: number) {
    this.#x = x;
    this.#y = y;
  }
}


function add() {
  return this.x + this.y;
}

const setValues(x: number, y: number) => {
  this.x = x;
  this.y = y;
};

const calculator = {
    x: 0,
    y: 0,

    add,
    setValues,
  };

  calculator.setValues(1, 2);