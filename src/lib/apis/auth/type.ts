"use client";
import * as z from "zod";

export const formSchema = z.object({
  username: z.string().min(2, { message: "Username min length is 2 characters" }).max(50, { message: "username max length is 50 characters" }),
  password: z.string().min(2, { message: "Password min length is 2 characters" }).max(50, { message: "Password max length is 50 characters" }),
});

export type FormSchema = z.infer<typeof formSchema>;
