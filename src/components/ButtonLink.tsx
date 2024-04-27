import { PrismicNextLink, PrismicNextLinkProps } from "@prismicio/next";
import clsx from "clsx";

export default function ButtonLink({
  className,
  ...restProps
}: PrismicNextLinkProps) {
  return (
    <PrismicNextLink
      className={clsx(
        "relative inline-flex h-fit w-fit rounded-full border border-green-200/20 bg-slate-200/10 px-4 py-2 text-green-200 outline-none ring-slate-300 transition-colors after:absolute after:inset-0 after:-z-10 after:animate-pulse after:rounded-full after:bg-slate-100 after:bg-opacity-0 after:blur-md after:transition-all after:duration-500 hover:border-slate-200/40 hover:text-slate-300 after:hover:bg-opacity-15 focus:ring-2",
        className,
      )}
      {...restProps}
    />
  );
}
