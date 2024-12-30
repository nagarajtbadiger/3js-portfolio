"use client";
import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from 'sonner'


export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const sendEmail = (params) => {
    const toastId = toast.loading('sending your message, please wait...')
    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        params,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
          limitRate: {
            throttle: 5000,
          },
        }
      )
      .then(
        () => {
          toast.success("message send successfully!", {id: toastId})
        },
        (error) => {
          toast.error('message not sent! please try again later', {id: toastId})
        }
      );
  };

  const onSubmit = (data) => {
    const templateParams = {
      to_name: "Portfolio Site Admin",
      from_name: data.firstName, // updated to match the field name
      reply_to: data.email, // updated to match the field name
      message: data.message, // updated to match the field name
    };
    sendEmail(templateParams);
  };

  console.log(errors); // Log errors for debugging

  return (<>
    <Toaster richColors={true} />
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md w-full flex flex-col items-center justify-center space-y-4"
    >
      <input
        className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
        type="text"
        placeholder="First name"
        {...register("firstName", { required: 'This field is required!', minLength: {value: 3, message: "Name should be atleast 3 characters long"}, maxLength: 80 })} // updated name
      />
      {errors.firstName && <p className="!p-0 w-full text-sm !mt-2 text-start !mb-2">{errors.firstName.message}</p>}{" "}
      
      <input
        className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
        type="email"
        placeholder="Email"
        {...register("email", { required: 'Please enter your email id' })}
      />

      {errors.email && <p className="!p-0 w-full text-sm !mt-2 text-start !mb-2">{errors.email.message}</p>}{" "}
      <textarea rows={4}
        placeholder="Message"
        className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
        {...register("message", { required: "Please enter your message" })} // updated name
      />
      {errors.message && <p className="!p-0 w-full text-sm !mt-2 text-start !mb-2">{errors.message.message}</p>}{" "}
      <input
        value="Cast your Message!"
        className="px-10 py-4 rounded-md shadow-lg bg-background border border-accent/30 border-solid hover:shadow-glass-sm backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 cursor-pointer capitalize"
        type="submit"
      />
    </form></>
  );
}
