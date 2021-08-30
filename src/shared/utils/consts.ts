import dotenv from "dotenv";
dotenv.config();

export const isServer = typeof window === "undefined";
export const isDev = process.env.ENV === "development";
