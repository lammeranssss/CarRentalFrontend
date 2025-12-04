import type { BaseResponse, CarStatus, Identifier } from "../base";

export interface CarResponse extends BaseResponse {
  brand: string;
  model: string;
  year: number;
  licensePlate: string;
  color: string;
  locationId: Identifier;
  carStatus: CarStatus;
  dailyRate: number;
  mileage: number;
  locationName: string;
  isAvailable: boolean;
  requiresMaintenance: boolean;
}


