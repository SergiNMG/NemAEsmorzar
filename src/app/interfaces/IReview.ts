export interface IReview {
  id?: string;
  name: string;
  date: string | Date;
  rating: number;
  description: string;
  placeId: string;
}
