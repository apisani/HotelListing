export class Hotel {
  Id: string;
  Title: string;
  Address: string;
  Image: string;
  Rating: number;
  RoundedRating: number;
  RatingType: string;
  Promotion: string;
  Name: string;
  Price: number;
  Savings: number;
  FreeCancellation: boolean;
  RoomName: string;

  constructor(Id: string, Title: string, Address: string, Image: string, Rating: number, RoundedRating: number,
    RatingType: string, Promotion: string, Name: string, Price: number, Savings: number, FreeCancellation: boolean, RoomName: string) {
    this.Id = Id,
    this.Title = Title,
    this.Address = Address,
    this.Image = Image,
    this.Rating = Rating,
    this.RoundedRating = RoundedRating,
    this.RatingType = RatingType,
    this.Promotion = Promotion,
    this.Name = Name,
    this.Price = Price,
    this.Savings = Savings,
    this.FreeCancellation = FreeCancellation,
    this.RoomName = RoomName;
  }
}
