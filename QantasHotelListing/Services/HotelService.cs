using JsonExtractorTool;
using QantasHotelListing.Models;
using System;
using System.Collections.Generic;

using System.Linq;
using System.Threading.Tasks;

namespace QantasHotelListing.Services
{
    public class HotelService
    {
        public List<HotelDto> GetAllHotels()
        {
            List<HotelDto> hotelList = new List<HotelDto>();
            
            JsonExtractor<HotelDto> jsonExtractor = new JsonExtractor<HotelDto>();
            var jsonFilePath = (@"Data\QantasHotels.json");
            hotelList = jsonExtractor.LoadJson(jsonFilePath);

            hotelList = roundRatings(hotelList);
            return hotelList;
        }

        private List<HotelDto> roundRatings(List<HotelDto> hotelsList)
        {
            foreach (HotelDto hotel in hotelsList)
            {
                hotel.RoundedRating = Math.Round(hotel.Rating);
            }
            return hotelsList;
        }
    }
}
