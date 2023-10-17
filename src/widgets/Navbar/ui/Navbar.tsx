import React from "react";
import { Link } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import AppLink, { AppLinkThem } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";

interface NavbarProps {
  className?: string;
}

export default function Navbar({ className }: NavbarProps) {
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      
      <div className={cls.links}>
        <AppLink them={AppLinkThem.SECONDARY} className={cls.mainLink} to={"/"}>
          Главная
        </AppLink>
        <AppLink them={AppLinkThem.SECONDARY} to={"/about"}>
          О сайте
        </AppLink>
      </div>
    </div>
  );
}
