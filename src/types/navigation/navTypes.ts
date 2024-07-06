export type IconName = 'briefCase' | 'message' | 'profile';

export type IconsOptionsType = {
  [key in IconName]: JSX.Element;
}

export interface MenuItemType {
  id?: string,
  name: string,
  slug: string,
  iconName: IconName
}