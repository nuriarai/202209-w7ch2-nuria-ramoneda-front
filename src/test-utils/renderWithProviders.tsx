import React, { PropsWithChildren } from "react";
import { render } from "@testing-library/react";
import type { RenderOptions } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import type { PreloadedState } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { store, RootState } from "../redux/store";
import { robotsReducer } from "../redux/features/robots/robotsSlice";

interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: PreloadedState<RootState>;
  store?: typeof store;
}

export const renderWithProviders = (
  ui: React.ReactElement,
  {
    preloadedState,
    store = configureStore({
      reducer: {
        robots: robotsReducer,
      },
      preloadedState,
    }),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) => {
  const Wrapper = ({ children }: PropsWithChildren<{}>): JSX.Element => {
    return <Provider store={store}>{children}</Provider>;
  };
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
};
