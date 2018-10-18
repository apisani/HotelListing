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

            try
            {
                var jsonFilePath = (@"Data\QantasHotels.json");
                hotelList = jsonExtractor.LoadJson(jsonFilePath);

                if (!isJsonValid(hotelList))
                    return null;

                hotelList = roundRatings(hotelList);
                return hotelList;
            }
            catch (Exception ex)
            {
                Console.WriteLine("Error in HotelService.GetAllHotels: " + ex.Message);
                return null;
            }
            
        }

        // Rounded rating added to cater for rating system
        // Currently not including half stars rating (not implemented due to lack of time)
        private List<HotelDto> roundRatings(List<HotelDto> hotelsList)
        {
            foreach (HotelDto hotel in hotelsList)
            {
                hotel.RoundedRating = Math.Round(hotel.Rating);
            }
            return hotelsList;
        }

        // Validity of important data in JSON done in back end 
        private bool isJsonValid(List<HotelDto> hotels)
        {
            bool valid = true;
            foreach (HotelDto hotel in hotels)
            {
               if (string.IsNullOrEmpty(hotel.Title))
               {
                   valid = false;
                   break;
               }
               if (string.IsNullOrEmpty(hotel.Address))
               {
                   valid = false;
                   break;
               }
               if (hotel.Rating < 0 || hotel.Rating > 5)
               {
                   valid = false;
                   break;
               }
            }
            return valid;
        }
    }
}
