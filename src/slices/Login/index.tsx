import Bounded from "@/components/Bounded";
import { Content } from "@prismicio/client";
import {
  PrismicRichText,
  PrismicText,
  SliceComponentProps,
} from "@prismicio/react";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";

/**
 * Props for `Login`.
 */
export type LoginProps = SliceComponentProps<Content.LoginSlice>;

/**
 * Component for "Login" Slices.
 */
const Login = ({ slice }: LoginProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="text-center"
    >
      <h1 className="text-balance text-5xl font-medium md:text-6xl">
        <PrismicText field={slice.primary.heading} />
      </h1>

      <div className="mx-auto mt-6 max-w-md text-balance">
        <PrismicRichText field={slice.primary.description} />
      </div>

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

      <Button
        color="success"
        className="text-lg text-white md:text-xl"
        size="lg"
      >
        <span className="p-4">{slice.primary.button_label}</span>
      </Button>
    </Bounded>
  );
};

export default Login;
