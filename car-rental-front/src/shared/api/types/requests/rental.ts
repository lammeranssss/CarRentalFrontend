import type { Identifier } from "../base";

export interface CreateRentalRequest {
  bookingId: Identifier;
  pickUpDate: string;
  dropOffDate: string;
  pickUpLocationId: Identifier;
  dropOffLocationId: Identifier;
  initialMileage: number;
}

export interface UpdateRentalRequest {
  bookingId: Identifier;
  pickUpDate: string;
  dropOffDate: string;
  pickUpLocationId: Identifier;
  dropOffLocationId: Identifier;
  initialMileage: number;
  finalMileage: number;
  finalPrice: number;
}
