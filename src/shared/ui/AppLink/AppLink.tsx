import { classNames } from "shared/lib/classNames/classNames";
import cls from "./AppLink.module.scss";
import { Link, LinkProps } from "react-router-dom";
import { PropsWithChildren } from "react";

export enum AppLinkThem {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface AppLinkProps extends LinkProps {
  className?: string;
  them?: AppLinkThem;
}

export default function AppLink({
  className,
  them = AppLinkThem.PRIMARY,
  children,
  to,
  ...otherProps
}: PropsWithChildren<AppLinkProps>) {
  return (
    <Link
      to={to}
      className={classNames(cls.AppLink, { }, [className, cls[them]])}
      {...otherProps}
    >
      {children}
    </Link>
  );
}
