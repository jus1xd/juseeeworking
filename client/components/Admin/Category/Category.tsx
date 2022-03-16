import React, { useEffect, useState } from "react";
import s from "./Category.module.css";
import AdminInput from "../Input/Input";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../hooks/useTypedSelector";
import { addCategory, deleteCategory } from "../../../store/slices/configSlice";
import { changeSiteConfig } from "../../../store/thunks/condifigThunk";
import RootWrapper from "../../RootWrapper/RootWrapper";

const Category: React.FC = ({}): JSX.Element => {
  const [categoryToAdd, setCategoryToAdd] = useState<string>("");
  const [categoryToDelete, setCategoryToDelete] = useState<string>("");
  const dispatch = useAppDispatch();
  const config = useAppSelector((state) => state.configSlice.config);
  const username = useAppSelector((state) => state.adminSlice.username);
  useEffect(() => {
    dispatch(changeSiteConfig({ config, username }));
  }, [config]);
  return (
    <>
      <div className={s.wrapper}>
        <div className={s.container}>
          <div className={s.inner}>
            <RootWrapper blockBg>
            <div className={s.inner_title}>Admin Panel - Категории</div>
            </RootWrapper>
            <div className={s.admin_panel_content}>
              <div className={s.input_container}>
                <div className={s.input_wrapper}>
                  <AdminInput
                    placeholder={"Название категории"}
                    type={"text"}
                    value={categoryToAdd}
                    setInputValue={setCategoryToAdd}
                  />
                </div>
                <div className={s.btn_wrapper}>
                  <div
                    className={s.main_btn}
                    onClick={() => dispatch(addCategory(categoryToAdd))}
                  >
                    Добавить
                  </div>
                </div>
              </div>
              <div className={s.msg_container}>Категория успешно добавлена</div>
              <div className={s.input_container}>
                <div className={s.input_wrapper}>
                  <AdminInput
                    placeholder={"Название категории"}
                    type={"text"}
                    value={categoryToDelete}
                    setInputValue={setCategoryToDelete}
                  />
                </div>
                <div className={s.btn_wrapper}>
                  <div
                    className={s.remove_btn}
                    onClick={() => dispatch(deleteCategory(categoryToDelete))}
                  >
                    Удалить
                  </div>
                </div>
              </div>
              <div className={s.error_container}>Категория успешно удалена</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
