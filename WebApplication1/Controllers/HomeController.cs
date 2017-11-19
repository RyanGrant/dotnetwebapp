﻿using Newtonsoft.Json;
using System;
using System.Net;
using System.Web.Mvc;
using System.IO.Compression;

namespace WebApplication1.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            //api();
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }
        /*
        public void api()
        {

            string html = string.Empty;

            //WebClient client = new WebClient();
            String apiKey = "1b3f55b792004e41b894bd035ab93b3d";
            //client.Headers.Add("X-API-Key", apiKey);
            //request.Headers["X-My-Custom-Header"] = "the-value";
            WebRequest webRequest = WebRequest.Create("http://www.bungie.net/Platform/Destiny2/Manifest");
            webRequest.Method = "GET";
            webRequest.Timeout = 12000;
            webRequest.ContentType = "application/json";
            webRequest.Headers.Add("X-API-Key", apiKey);
            String result = "";
            using (System.IO.Stream s = webRequest.GetResponse().GetResponseStream())
            {
                using (System.IO.StreamReader sr = new System.IO.StreamReader(s))
                {
                    var jsonResponse = sr.ReadToEnd();
                    result += jsonResponse;
                    Console.WriteLine(String.Format("Response: {0}", jsonResponse));
                }
            }
            dynamic x = JsonConvert.DeserializeObject(result);
            String y = x.Response.mobileAssetContentPath;
            using (var client = new WebClient())
            {
                client.DownloadFile("http://bungie.net" + y, @"C:\Users\ryan.grant\Desktop\git\dotnetwebapp\Manifest.zip");
            }

            try
            {
                ZipFile.ExtractToDirectory(@"C:\Users\ryan.grant\Desktop\git\dotnetwebapp\Manifest.zip", @"C:\Users\ryan.grant\Desktop\git\dotnetwebapp\ManifestUnzip");
            }
            catch (Exception)
            {
                //If it already exists
            }


        }
        */
    }
}