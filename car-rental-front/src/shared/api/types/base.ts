export type Identifier = string;

export type BookingStatus =
  | "Unknown"
  | "Pending"
  | "Confirmed"
  | "Completed"
  | "Cancelled";

export type CarStatus =
  | "Unknown"
  | "Available"
  | "Booked"
  | "Maintenance"
  | "OutOfService";

export interface BaseResponse {
  id: Identifier;
  createdAt: string;
  updatedAt: string;
}
