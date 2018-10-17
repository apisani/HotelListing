using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QantasHotelListing.Models
{
    public class HotelDto
    {
        public string Id { get; set; }
        public string Title { get; set; }
        public string Address { get; set; }
        public string Image { get; set; }
        public double Rating { get; set; }
        public double RoundedRating { get; set; }

        public string RatingType { get; set; }
        public string Promotion { get; set; }
        public string Name { get; set; }
        public int Price { get; set; }
        public int Savings { get; set; }
        public bool FreeCancellation { get; set; }
        public string RoomName { get; set; }
    }
}
