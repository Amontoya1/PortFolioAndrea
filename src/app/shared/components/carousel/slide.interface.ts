export interface ICarouselItem {
  id: number;
  title?: {
      first: string;
      second: string;
  };
  subtitle?: string;
  link?: string;
  path: string;
  order?: number;
  marginLeft?: number;
}
