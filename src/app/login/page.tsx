"use client";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FormSchema, formSchema } from "@/lib/apis/auth";
import { createSessionID, getDetailAccount, getRequestToken, postLogin } from "@/lib/apis/auth/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const router = useRouter();

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = async (data: FormSchema) => {
    const body = {
      ...data,
      request_token: await getRequestToken(),
    };
    try {
      const result = await postLogin(body);
      const getSessionID = await createSessionID(result.request_token);
      const getUserID = await getDetailAccount(getSessionID);
      setCookie("userID", getUserID);
      setCookie("sessionID", getSessionID);
      router.push("/");
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-white p-8 rounded-lg shadow-md w-full sm:w-96">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-6">Sign In</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className="mb-4">
                  <FormLabel className="block text-gray-700 text-sm font-semibold mb-2">Username</FormLabel>
                  <FormControl>
                    <Input placeholder="Username" className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="mb-4">
                  <FormLabel className="block text-gray-700 text-sm font-semibold mb-2">Password</FormLabel>
                  <FormControl>
                    <Input placeholder="Password" type="password" className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <button type="submit" className="w-full bg-black text-white rounded-md py-2 hover:bg-black focus:outline-none focus:bg-black">
              Sign In
            </button>
          </form>
        </Form>
      </div>
    </div>
  );
};
export default Login;
