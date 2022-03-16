import Link from "next/link";
import React, { Dispatch, SetStateAction } from "react";
import { useAppSelector } from "../../hooks/useTypedSelector";
import s from "./Tooltip.module.css";

type TProps = {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
};

const Tooltip: React.FC<TProps> = ({ active, setActive }): JSX.Element => {
  const categories = useAppSelector(
    (state) => state.configSlice.config.categories
  );

  const categoryItems = categories.map((el, idx) => (
    <Link href="" key={idx}>
      <a className={s.nav_link}>{el}</a>
    </Link>
  ));

  return (
    <div
      className={active ? `${s.main_wrapper} ${s.active}` : s.main_wrapper}
      onMouseLeave={() => setActive(false)}
    >
      <div className={s.wrapper}>
        <div className={s.inner}>{categoryItems}</div>
      </div>
    </div>
  );
};

export default Tooltip;
