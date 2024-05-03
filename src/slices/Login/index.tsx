import Bounded from "@/components/Bounded";
import { Content } from "@prismicio/client";
import {
  PrismicRichText,
  PrismicText,
  SliceComponentProps,
} from "@prismicio/react";
import LoginForm from "./LoginForm";

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
      <LoginForm slice={slice} />
    </Bounded>
  );
};

export default Login;
