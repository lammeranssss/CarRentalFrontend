import type { BaseResponse, BookingStatus, Identifier } from "../base";

export interface BookingResponse extends BaseResponse {
  startDate: string;
  endDate: string;
  customerId: Identifier;
  carId: Identifier;
  totalPrice: number;
  bookingStatus: BookingStatus;
  customerName: string;
  carDetails: string;
  durationInDays: number;
  isActive: boolean;
  canBeCancelled: boolean;
}


