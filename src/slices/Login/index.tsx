import Bounded from "@/components/Bounded";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { Input } from "@nextui-org/input";

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
    >
      <PrismicRichText field={slice.primary.heading} />
      <PrismicRichText field={slice.primary.description} />
      <Input type="email" label="Email" />

      <>{slice.primary.button_label}</>
    </Bounded>
  );
};

export default Login;
