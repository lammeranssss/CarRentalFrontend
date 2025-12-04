import type { Identifier } from "../base";

export interface CreateBookingRequest {
  startDate: string;
  endDate: string;
  customerId: Identifier;
  carId: Identifier;
}

export interface CancelBookingRequest {
  reason?: string;
}


