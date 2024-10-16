import { config } from "dotenv";

config();

export const CLOUDINARY_CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME || "dlnixemud";
export const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY || "832814933686691";
export const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET || "JyYPuPnZGP8HdV5ijcOfy0YjIbE";
export const PORT = process.env.PORT || 4000;


