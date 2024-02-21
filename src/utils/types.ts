import { IHeroItem } from './models';

export type StackParamList = {
  Main: undefined;
  Hero: { hero: IHeroItem };
}

export enum ScreenEnum {
  Main = 'Main',
  Hero = 'Hero',
}

