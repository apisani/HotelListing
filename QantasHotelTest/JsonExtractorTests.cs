using JsonExtractorTool;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using QantasHotelListing.Models;

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

    }
}
