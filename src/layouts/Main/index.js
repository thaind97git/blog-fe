import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from '@/router';
import { useDispatch } from 'react-redux';
import { getDisplayLayout } from '@/store/selectors/layout';
import { compareTwoObject } from '@/utils';
import { setDisplayLayout } from '@/store/actions/layout';
import { useShallowEqualSelector } from '@/hooks/useShallowEqualSelector';

const Main = () => {
  const layout = useShallowEqualSelector(getDisplayLayout);
  const dispatch = useDispatch();

  const updateDisplayLayout = (currentLayout, layout) => {
    const layoutUpdated = currentLayout
      ? { header: !!currentLayout.header, footer: !!currentLayout.footer }
      : { header: true, footer: true };

    if (!compareTwoObject(layoutUpdated, layout)) {
      setTimeout(() => dispatch(setDisplayLayout(layoutUpdated)));
    }
  };

  return (
    <div id="main">
      <Switch>
        {routes.map(
          ({ component: Component, path, layout: currentLayout, ...rest }) => {
            return (
              <Route
                key={path}
                path={path}
                render={props => {
                  updateDisplayLayout(currentLayout, layout);
                  return <Component {...props} />;
                }}
                {...rest}
              />
            );
          },
        )}
      </Switch>
    </div>
  );
};

export default Main;
