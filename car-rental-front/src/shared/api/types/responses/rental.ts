import type { BaseResponse, Identifier } from "../base";

export interface RentalResponse extends BaseResponse {
  bookingId: Identifier;
  pickUpDate: string;
  dropOffDate: string;
  pickUpLocationId: Identifier;
  dropOffLocationId: Identifier;
  initialMileage: number;
  finalMileage: number;
  finalPrice: number;
  pickUpLocationName: string;
  dropOffLocationName: string;
  mileageUsed: number;
  isActive: boolean;
  hasExceededMileageLimit: boolean;
}
