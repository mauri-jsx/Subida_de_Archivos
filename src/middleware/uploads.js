import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import crypto from "node:crypto";
import { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } from "../config.js";
import multer from "multer";

cloudinary.config({
    cloud_name: CLOUDINARY_CLOUD_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET,
});

const fileFilter = (_req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(new Error('Solo se permiten imágenes en formato JPG o PNG'), false);
    }
};

const storage = new CloudinaryStorage({
    cloudinary,
    params: async (_req, file) => {
        return {
            folder: "uploads",
            format: "webp",
            public_id: `${file.fieldname}-${crypto.randomUUID().toString()}`,
            transformation: [{ width: 500, height: 500, crop: "fill" }],
        };
    },
});

export const upload = multer({ storage, fileFilter });


