export type ActionMethod = "DELETE" | "PUT" | "PATCH" | "POST";

export interface ActionRoute<T> {
  path: (params: T) => string;
  method: ActionMethod;
}
