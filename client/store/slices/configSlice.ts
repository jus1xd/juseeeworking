import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { changeSiteConfig, getSiteConfig } from "../thunks/condifigThunk";
import { ISiteConfig } from "../../types/config";

const initialState = {
  config: {} as ISiteConfig,
  errors: "",
};
export const configSlice = createSlice({
  name: "configSlice",
  initialState,
  reducers: {
    changeColorsAndSiteLogo: (state, action) => {
      state.config.siteLogo = action.payload.siteLogo;
      state.config.colors.headerColor = action.payload.colors.headerColor;
      state.config.colors.underHeaderColor =
        action.payload.colors.underHeaderColor;
      state.config.colors.fontColor = action.payload.colors.fontColor;
      state.config.colors.backgroundColor =
        action.payload.colors.backgroundColor;
      state.config.colors.blockBackgroundColor =
        action.payload.colors.blockBackgroundColor;
      state.config.colors.buttonColor = action.payload.colors.buttonColor;
      state.config.colors.buttonHoverColor =
        action.payload.colors.buttonHoverColor;
    },
    changeTof: (state, action) => {
      state.config.tof.tofTitle = action.payload.tofTitle;
      state.config.tof.description = action.payload.description;
    },
    changeHelp: (state, action) => {
      state.config.help.helpTitle = action.payload.helpTitle;
      state.config.help.imageLink = action.payload.imageLink;
      state.config.help.firstBlock = action.payload.firstBlock;
      state.config.help.secondTextBlock = action.payload.secondTextBlock;
    },
    addCategory: (state, action) => {
      state.config.categories.push(action.payload);
    },
    deleteCategory: (state, action) => {
      state.config.categories = state.config.categories.filter(
        (category) => category != action.payload
      );
    },
  },
  extraReducers: {
    [getSiteConfig.fulfilled.type]: (
      state,
      action: PayloadAction<ISiteConfig>
    ) => {
      state.errors = "";
      state.config = action.payload;
    },
    [getSiteConfig.rejected.type]: (state, action) => {
      state.errors = action.error.message;
    },
    [changeSiteConfig.rejected.type]: (state, action) => {
      state.errors = action.error.message;
    },
  },
});
export const {
  changeColorsAndSiteLogo,
  changeTof,
  changeHelp,
  addCategory,
  deleteCategory,
} = configSlice.actions;
export default configSlice.reducer;
