const API_PREFIX = "/api";

const withPrefix = (path: string) => `${API_PREFIX}${path}`;

export const ApiRoutes = {
  Bookings: {
    Base: withPrefix("/bookings"),
    ById: (id: string) => withPrefix(`/bookings/${id}`),
    Cancel: (id: string) => withPrefix(`/bookings/${id}/cancel`),
    Confirm: (id: string) => withPrefix(`/bookings/${id}/confirm`),
  },
  Cars: {
    Base: withPrefix("/cars"),
    ById: (id: string) => withPrefix(`/cars/${id}`),
  },
  Customers: {
    Base: withPrefix("/customers"),
    ById: (id: string) => withPrefix(`/customers/${id}`),
  },
  Locations: {
    Base: withPrefix("/locations"),
    ById: (id: string) => withPrefix(`/locations/${id}`),
  },
  Rentals: {
    Base: withPrefix("/rentals"),
    ById: (id: string) => withPrefix(`/rentals/${id}`),
  },
} as const;
