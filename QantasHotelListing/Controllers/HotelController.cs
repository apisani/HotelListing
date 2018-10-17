using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using QantasHotelListing.Models;
using QantasHotelListing.Services;
using System.Web.Http;

namespace QantasHotelListing.Controllers
{
    [Route("api/[controller]")]
    public class HotelController : Controller
    {
        private HotelService _hotelService;

        public HotelController()
        {
            _hotelService = new HotelService();
        }

        [HttpGet("[action]")]
        public IEnumerable<HotelDto> GetAllHotels()
        {
            
            var Hotels = _hotelService.GetAllHotels();

            return Hotels;
        }

    }
}
