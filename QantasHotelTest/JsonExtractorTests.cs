using JsonExtractorTool;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using QantasHotelListing.Models;
using QantasHotelListing.Services;

namespace QantasHotelTest
{
    [TestClass]
    public class JsonExtractorTests
    {
        [TestMethod]
        [ExpectedException(typeof(System.IO.FileNotFoundException), "Invalid file path.")]
        public void Load_InvalidJsonFilePath_ExpectExceptionThrown()
        {
            //Arrange
            //Invalid path set
            JsonExtractor<HotelDto> jsonExtractor = new JsonExtractor<HotelDto>();
            var jsonFilePath = (@"TestData\invalid_test_path.json");

            //Act
            var testList = jsonExtractor.LoadJson(jsonFilePath);

            //Assert above method - Expected exception is set
        }

        [TestMethod]
        [ExpectedException(typeof(Newtonsoft.Json.JsonReaderException), "Invalid file path.")]
        public void Load_InvalidJsonFile_ExpectExceptionThrown()
        {
            //Arrange
            //Invalid path set
            JsonExtractor<HotelDto> jsonExtractor = new JsonExtractor<HotelDto>();
            var jsonFilePath = (@"TestData\QantasHotels_InvalidJSON.json");

            //Act
            var testList = jsonExtractor.LoadJson(jsonFilePath);

            //Assert above method - Expected exception is set
        }

        [TestMethod]
        public void Load_QantasHotelJson_ExpectItemDefined()
        {
            //Arrange
            //Invalid path set
            JsonExtractor<HotelDto> jsonExtractor = new JsonExtractor<HotelDto>();
            var jsonFilePath = (@"TestData\QantasHotels.json");

            //Act
            var testList = jsonExtractor.LoadJson(jsonFilePath);

            //Assert
            Assert.IsNotNull(testList);
        }

        [TestMethod]
        public void Load_QantasHotelJson_ExpectCorrectNumberOfItems()
        {
            //Arrange
            //Invalid path set
            JsonExtractor<HotelDto> jsonExtractor = new JsonExtractor<HotelDto>();
            var jsonFilePath = (@"TestData\QantasHotels.json");

            //Act
            var testList = jsonExtractor.LoadJson(jsonFilePath);

            //Assert
            Assert.IsTrue(testList.Count == 5);
        }

        [TestMethod]
        public void Load_QantasHotelJson_ExpectCorrectProperties()
        {
            //Arrange
            //Invalid path set
            JsonExtractor<HotelDto> jsonExtractor = new JsonExtractor<HotelDto>();
            var jsonFilePath = (@"TestData\QantasHotels.json");

            //Act
            var testList = jsonExtractor.LoadJson(jsonFilePath);

            //Assert
            Assert.IsTrue(testList[0].Id == "cxd650nuyo");
            Assert.IsTrue(testList[0].Title == "Courtyard by Marriott Sydney-North Ryde");
            Assert.IsTrue(testList[0].Address == "7-11 Talavera Rd, North Ryde");
            Assert.IsTrue(testList[0].Image == "https://unsplash.it/145/125/?random");
            Assert.IsTrue(testList[0].Rating == 4);
            Assert.IsTrue(testList[0].RatingType == "self");
            Assert.IsTrue(testList[0].Promotion == "Exclusive Deal");
            Assert.IsTrue(testList[0].Name == "Deluxe Balcony Room");
            Assert.IsTrue(testList[0].Price == 329);
            Assert.IsTrue(testList[0].Savings == 30);
            Assert.IsTrue(testList[0].FreeCancellation == true);
        }
    }
}
