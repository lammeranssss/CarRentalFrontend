import type { BaseResponse } from "../base";

export interface CustomerResponse extends BaseResponse {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  licenseNumber: string;
  fullName: string;
  hasValidLicense: boolean;
  loyaltyLevel: number;
  completedBookingsCount: number;
}
