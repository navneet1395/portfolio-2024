"use client";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { TextArea } from "./ui/textarea";
import { sendEmail } from "@/actions/sendEmail";
import { toast } from "react-hot-toast";

export function ContactForm() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const target = e.target as typeof e.target & {
      name: { value: string };
      email: { value: string };
      phone: { value: string };
      message: { value: string };
    };

    const formData = {
      name: target.name.value.trim(),
      email: target.email.value.trim(),
      phone: target.phone.value.trim(),
      message: target.message.value.trim(),
    };

    try {
      setLoading(true);
      await sendEmail(formData);
      toast.success("Message sent successfully!");
      form.reset();
    } catch (err) {
      console.error(err);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      className="bg-white dark:bg-zinc-900 shadow-lg rounded-lg p-6 space-y-6"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col">
          <label
            htmlFor="name"
            className="text-sm font-medium dark:text-neutral-300"
          >
            Name
          </label>
          <Input id="name" placeholder="John Doe" type="text" required />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="email"
            className="text-sm font-medium dark:text-neutral-300"
          >
            Email Address
          </label>
          <Input
            id="email"
            placeholder="you@example.com"
            type="email"
            required
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="phone"
            className="text-sm font-medium dark:text-neutral-300"
          >
            Phone Number
          </label>
          <Input id="phone" placeholder="+91 1234567890" type="tel" />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="message"
            className="text-sm font-medium dark:text-neutral-300"
          >
            Message
          </label>
          <TextArea
            id="message"
            placeholder="Type your message here..."
            rows={4}
            required
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className={`w-full h-12 rounded-lg font-medium text-white ${
          loading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700 transition"
        }`}
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
