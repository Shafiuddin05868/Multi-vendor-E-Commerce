export type Role = {
  admin: "admin",
  vendor: "vendor",
  customer: "customer",
}

export interface Token {
  id: string;
  role: keyof Role;
}