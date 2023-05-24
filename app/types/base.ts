export type Dto<T> = T & {
  _id: string;
};
// /** Add an _id field to an object shaped type @public */
// export declare type Dto<TSchema> = Omit<TSchema, "_id"> & {
//   _id: string;
// };
