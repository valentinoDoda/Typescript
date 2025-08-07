type ErrorShape = {
  error: {
    message: string;
  };
};
type DataShape<T> =
  | {
      data: T;
    }
  | ErrorShape;

type UserDataShape = DataShape<{
  id: string;
  name: string;
  email: string;
}>;

type PostDataShape = DataShape<{
  id: string;
  title: string;
  body: string;
}>;


type PromiseFunc<InputType, PromiseType> = (input: InputType) => Promise<PromiseType>;