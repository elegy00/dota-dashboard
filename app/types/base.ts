export type Dto<T> = T & {
  _id: string;
};

// export type Data<T> = {
//   data: T;
// };
// /** Add an _id field to an object shaped type @public */
// export declare type Dto<TSchema> = Omit<TSchema, "_id"> & {
//   _id: string;
// };
