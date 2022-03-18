import React, { useState} from "react";
import s from "./Nav.module.css";
import Link from "next/link";
import Tooltip from "../Tooltip/Tooltip";
import Button from "../Button/Button";

const Nav: React.FC = ({}): JSX.Element => {
  const [tooltipActive, setTooltipActive] = useState<boolean>(false);
  return (
    <>
      <div className={s.wrapper}>
        <div className={s.container}>
          <div className={s.nav_inner}>
            <div
              onMouseOver={() => setTooltipActive(true)}
              className={s.main_nav_button}
            >
              Choose category
            </div>
            <Link href="/">
              <a className={s.nav_button}>
                <Button text={"Home Page"} />
              </a>
            </Link>
            <Link href="/help">
              <a className={s.nav_button}>
                <Button text={"Help"} />
              </a>
            </Link>
            <Link href="/terms">
              <a className={s.nav_button}>
                <Button text={"ToF"} />
              </a>
            </Link>
          </div>
          <Tooltip setActive={setTooltipActive} active={tooltipActive}/>
        </div>
      </div>
    </>
  );
};

export default Nav;
