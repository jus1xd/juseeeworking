import React, { useEffect, useState } from "react";
import s from "./Category.module.css";
import AdminInput from "../Input/Input";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../hooks/useTypedSelector";
import {addCategory, deleteCategory} from "../../../store/slices/configSlice";
import {changeSiteConfig} from "../../../store/thunks/configThunk";
import RootWrapper from "../../RootWrapper/RootWrapper";
import Button from "../../Button/Button";

const Category: React.FC = ({}): JSX.Element => {
  const [categoryToAdd, setCategoryToAdd] = useState<string>("");
  const [categoryToDelete, setCategoryToDelete] = useState<string>("");
  const dispatch = useAppDispatch();
  const config = useAppSelector((state) => state.configSlice.config);
  const username = useAppSelector((state) => state.adminSlice.username);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [isEmpty, setIsEmpty] = useState<boolean>(false);
  const [isDelete, setIsDelete] = useState<boolean>(false);
  const onAddCategoryHandler = () => {
    if (categoryToAdd != "") {
      dispatch(addCategory(categoryToAdd));
      setIsEmpty(false);
      setIsEdit(true);
    } else {
      setIsEmpty(true);
      setIsEdit(false);
    }
  };
  const onDeleteCategoryHandler = () => {
    if (categoryToDelete != "") {
      dispatch(deleteCategory(categoryToDelete));
      setIsDelete(true);
    }
  };
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
                  <div className={s.main_btn} onClick={onAddCategoryHandler}>
                    <Button text={"Добавить"} />
                  </div>
                </div>
              </div>
              {isEdit && (
                <div className={s.msg_container}>
                  Категория успешно добавлена
                </div>
              )}
              {isEmpty && (
                <div className={s.msg_container_red}>Заполните поле</div>
              )}
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
                    onClick={onDeleteCategoryHandler}
                  >
                    Удалить
                  </div>
                </div>
              </div>
              {isDelete && (
                <div className={s.error_container}>
                  Категория успешно удалена
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
