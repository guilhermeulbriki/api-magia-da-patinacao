declare namespace Express {
  export interface Request {
    sponsor: {
      id: string;
    };
    admin: {
      id: string;
    };
  }
}
