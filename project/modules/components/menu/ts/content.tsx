import React from "react";
import { SideMenuList } from "./list";
import { IconButton } from "pragmate-ui/icons";
import { Image } from "pragmate-ui/image";
import { useMenuContext } from "./context";
import { Avatar } from "flow-balance/avatar";

export const SideMenuContent = ({ title }): JSX.Element => {
  const { toggleMenu, isOpen } = useMenuContext();
  const cls: string = isOpen
    ? "side-menu__content"
    : "side-menu__content__hide side-menu__content";

  const defaultTitle = title ?? "Title";
  const defaultImage = `${globalThis.baseDir}assets/user.png`;
  return (
    <>
      <div className={cls}>
        <IconButton
          icon="close"
          className="side-menu__toggle"
          onClick={toggleMenu}
        />

        <div className="side-menu--flex">
          <Avatar img={defaultImage}/>
          <header>
            <span>{defaultTitle}</span>
          </header>
        </div>
        <SideMenuList />
      </div>
    </>
  );
};
