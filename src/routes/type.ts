export interface IRouteProps {
  key: string;
  path: string;
  component: any,
  requiredAuthen: boolean;
  exact: boolean;
  isAuthorized: boolean;
  routes?: any;
}