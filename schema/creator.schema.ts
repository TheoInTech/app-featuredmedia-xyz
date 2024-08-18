import { SellerCategory } from "@/types/categories.types";
import { z } from "zod";

const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2 MB in bytes;
const ACCEPTED_IMAGE_TYPES = ["image/png"];

export const ImageSchema =
  typeof window === "undefined"
    ? z.null()
    : z
        .instanceof(File, { message: "Image is required" })
        .refine((file) => !!file, "Image is required")
        .refine((file) => file?.size <= MAX_FILE_SIZE, `Max file size is 2 MB`)
        .refine(
          (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
          "Only .png images are accepted."
        );

export enum EGender {
  MALE = "Male",
  FEMALE = "Female",
  OTHERS = "Others",
}

export const CreatorSocialSchema = z.object({
  facebook: z.string().optional(),
  twitter: z.string().optional(),
  tiktok: z.string().optional(),
  youtube: z.string().optional(),
  kick: z.string().optional(),
  instagram: z.string().optional(),
  odysee: z.string().optional(),
});

export const CreatorProfileSchema = z.object({
  id: z.string(),
  walletAddress: z.string(),
  username: z.string(),
  gender: z.nativeEnum(EGender),
  email: z.string().email(),
  categories: z.array(z.nativeEnum(SellerCategory)),
  imageUrl: z.union([ImageSchema, z.string()]),
  bannerUrl: z.union([ImageSchema, z.string()]).nullish(),
  bioUrl: z.string().nullish(),
});

export type ICreatorSocial = z.infer<typeof CreatorSocialSchema>;
export type ICreatorProfile = z.infer<typeof CreatorProfileSchema>;

export const FormDefaults: ICreatorProfile = {
  id: "",
  walletAddress: "",
  username: "",
  gender: EGender.MALE,
  email: "",
  categories: [],
  imageUrl: "",
  bannerUrl: "",
  bioUrl: "",
};
