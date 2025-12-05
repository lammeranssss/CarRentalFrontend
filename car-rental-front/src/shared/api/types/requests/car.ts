import type { Identifier, CarStatus } from "../base";

export interface CreateCarRequest {
  brand: string;
  model: string;
  year: number;
  licensePlate: string;
  color: string;
  locationId: Identifier;
  dailyRate: number;
  mileage?: number;
  carStatus: CarStatus;
}
