using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ReactChatDemo.Controllers
{
    [Route("api/Npi")]
    public class NpiController : Controller
    {


        [HttpGet("[action]")]
        public IEnumerable<NpiLocation> NpiLocations()
        {

            var npiLocations = new List<NpiLocation>();


            npiLocations.Add(new NpiLocation
            {

                DateAdded = "01102001",
                Location = "Dundalk",
                NpiNumber = "344322335"
            });

            npiLocations.Add(new NpiLocation
            {

                DateAdded = "01102002",
                Location = "Drogheda",
                NpiNumber = "344322334"
            });


            npiLocations.Add(new NpiLocation
            {

                DateAdded = "01102003",
                Location = "Dundalk",
                NpiNumber = "344322333"
            });

            return npiLocations;



        }



    }





    public class NpiLocation
    {
        public string NpiNumber { get; set; }
        public string Location { get; set; }
        public string DateAdded { get; set; }

    }
}