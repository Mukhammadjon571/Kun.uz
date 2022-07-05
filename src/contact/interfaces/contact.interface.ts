export interface IContact {
  id: string;
  created_at: Date;
  name: Record<string, string>;
  email: string;
  subject: string;
  message: string;
  phone_number: string;
  status: string;
}