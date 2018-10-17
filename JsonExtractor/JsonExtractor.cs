using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Reflection;

namespace JsonExtractorTool
{
    public interface IJsonExtractor<T>
    {
        List<T> LoadJson(string filePath);
    }

    public class JsonExtractor<T> : IJsonExtractor<T>
    where T : class 
    {
        public JsonExtractor()
        {
        }

        public List<T> LoadJson(string filePath)
        {
            try
            {
                string path = Path.Combine(Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location), filePath);
                var jsonList = JsonConvert.DeserializeObject<List<T>>(File.ReadAllText(path));
                return jsonList;
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }
    }
}
