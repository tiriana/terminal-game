import React, { Suspense, lazy } from "react";

import { Loading } from "components/Loading/Loading";
const loading = <Loading />;

export const dynamicScreen = (screenName, { prefetch = true } = {}) => {
  const screenFactory = () =>
    import(/* webpackChunkName: "screen-[index]--[request]" */ `components/screens/${screenName}/${screenName}`);

  const MyAsyncScreen = lazy(screenFactory);
  const MySuspendedScreen = props => (
    <Suspense fallback={loading}>
      <MyAsyncScreen {...props} />
    </Suspense>
  );

  MySuspendedScreen.prefetch = screenFactory;
  prefetch && screenFactory();

  return MySuspendedScreen;
};
