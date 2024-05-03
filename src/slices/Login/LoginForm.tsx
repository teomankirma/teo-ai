"use client";

import React from "react";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Content } from "@prismicio/client";
import { useRouter } from "next/navigation";
import { PrismicNextLink } from "@prismicio/next";

export default function LoginForm({ slice }: { slice: Content.LoginSlice }) {
  const router = useRouter();
  return (
    <form className="mt-4 flex w-full flex-col items-center gap-4 ">
      <div className="my-6 grid w-full gap-4 md:w-1/3">
        <Input
          type="email"
          label={slice.primary.email_input_label}
          placeholder={slice.primary.email_input_placeholder || ""}
        />
        <Input
          type="password"
          label={slice.primary.password_input_label}
          placeholder={slice.primary.password_input_placeholder || ""}
        />
      </div>

      <PrismicNextLink field={slice.primary.button_link}>
        <Button
          color="success"
          className="p-4 text-lg text-white md:text-xl"
          size="lg"
        >
          {slice.primary.button_label}
        </Button>
      </PrismicNextLink>
    </form>
  );
}
