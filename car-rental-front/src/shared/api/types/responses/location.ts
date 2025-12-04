import type { BaseResponse } from "../base";

export interface LocationResponse extends BaseResponse {
  name: string;
  address: string;
  phone: string;
  availableCarsCount: number;
  totalCarsCount: number;
  canAcceptReturns: boolean;
}


