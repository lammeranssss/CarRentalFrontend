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

interface BaseResponse {
  id: Identifier;
  createdAt: string;
  updatedAt: string;
}

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

export interface LocationResponse extends BaseResponse {
  name: string;
  address: string;
  phone: string;
  availableCarsCount: number;
  totalCarsCount: number;
  canAcceptReturns: boolean;
}

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

export interface CreateCustomerRequest {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  licenseNumber: string;
}

export interface CreateBookingRequest {
  startDate: string;
  endDate: string;
  customerId: Identifier;
  carId: Identifier;
}

export interface CreateLocationRequest {
  name: string;
  address: string;
  phone: string;
}

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

export interface CancelBookingRequest {
  reason?: string;
}
