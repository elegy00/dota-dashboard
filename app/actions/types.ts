export type ActionMethod = "DELETE" | "PUT" | "PATCH" | "POST";

export interface ActionRoute {
  path: string;
  method: ActionMethod;
}
