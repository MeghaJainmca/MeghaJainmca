using DiscoverFoodJoinAPI.Model;
using DiscoverFoodJoinAPI.Repository;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DiscoverFoodJoinAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("AllowOrigin")]
    public class FoodJointController : Controller
    {
        private readonly IFoodJointRepository _foodJointRepository;

        private readonly ILogger<FoodJointController> _logger;

        public FoodJointController(ILogger<FoodJointController> logger, IFoodJointRepository foodJointRepository)
        {
            _foodJointRepository = foodJointRepository;
            _logger = logger;
        }

        [HttpGet]
        [Route("GetFoodJoints")]
        public ActionResult<List<TblFoodJoint>> GetFoodJoints()
        {
           return _foodJointRepository.GetFoodJoints();
        }

        [HttpGet]
        [Route("GetFoodJointsByCity/{id}")]
        public ActionResult<List<TblFoodJoint>> GetFoodJointsByCity(string id)
        {
            return _foodJointRepository.GetFoodJointsCityId(Convert.ToInt32(id));
        }

        [HttpGet]
        [Route("GetCities")]
        public ActionResult<List<TblCity>> GetCities()
        {
            return _foodJointRepository.GetCities();
        }

        [HttpGet]
        [Route("GetFoodJointsDetails/{id}")]
        public TblFoodJoint GetFoodJointDetailById(int id)
        {
           return _foodJointRepository.GetFoodJointDetailsById(id);
        }

        [HttpGet]
        [Route("GetCity/{id}")]
        public ActionResult<TblCity> GetCityById(int id)
        {
           return _foodJointRepository.GetCityById(id);
        }

        [HttpPost]
        [Route("CreateFoodJoint")]
        public ActionResult CreateProduct(TblFoodJoint foodJoint)
        {
            bool success = _foodJointRepository.CreateFoodJoint(foodJoint);

            if (!success)
            {
                return NotFound();
            }
            return Ok();
        }

        

        [HttpPut]
        [Route("UpdateFoodJoint/{id}")]
        public IActionResult UpdateFoodJoint(int id, TblFoodJoint foodJoint)
        {
            if (id != foodJoint.Id)
            {
                return BadRequest();
            }

            bool success = _foodJointRepository.UpdateFoodJoint(id, foodJoint);

            if (!success)
            {
                return NotFound();
            }
            return Ok();
        }

        [HttpDelete]
        [Route("DeleteFoodJoint/{id}")]
        public ActionResult DeleteFoodJoint(int id)
        {
            bool success = _foodJointRepository.DeleteFoodJoint(id);
            if (!success)
            {
                return NotFound();
            }
            return Ok();
        }

    }
}
