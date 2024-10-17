/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/@types/index.d` | `/@types/styled.d` | `/AppView` | `/_sitemap` | `/components/Button` | `/components/Button/styles` | `/components/Input` | `/components/Input/styles` | `/hooks` | `/pages/Auth/Login` | `/pages/Auth/Login/styles` | `/pages/Home` | `/pages/Home/styles` | `/routes` | `/routes/TabRoutes/menu.routes` | `/routes/app.routes` | `/routes/app.tab.routes` | `/routes/auth.routes` | `/theme` | `/theme/darkTheme` | `/theme/lightTheme`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
