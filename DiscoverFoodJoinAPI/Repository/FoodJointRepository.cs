using DiscoverFoodJoinAPI.Model;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DiscoverFoodJoinAPI.Repository
{
    public class FoodJointRepository:IFoodJointRepository
    {
        private readonly FoodContext _context;

        public FoodJointRepository(FoodContext context)
        {
            _context = context;
        }

        public List<TblFoodJoint> GetFoodJoints()
        {
            return _context.TblFoodJoints.ToList();
        }

        public List<TblFoodJoint> GetFoodJointsCityId(int id)
        {
            return GetFoodJoints().Where(x => x.CityId == id).ToList();
        }

        public List<TblCity> GetCities(){
            return _context.TblCities.ToList();

        }

        public TblFoodJoint GetFoodJointDetailsById(int id)
        {
            TblFoodJoint foodJoint = _context.TblFoodJoints.Find(id);
            return foodJoint != null ? foodJoint : null;
        }

        public TblCity GetCityById(int id)
        {
           TblCity city = _context.TblCities.Find(id);
            return city != null ? city : null;
        }

        public bool CreateFoodJoint(TblFoodJoint foodJoint)
        {
            _context.TblFoodJoints.Add(foodJoint);
            return _context.SaveChanges() > 0 ? true : false;
        }

        public bool DeleteFoodJoint(int id)
        {
            var foodJoint = _context.TblFoodJoints.Find(id);
            if (foodJoint == null)
            {
                return false;
            }
            _context.TblFoodJoints.Remove(foodJoint);
            return _context.SaveChanges() > 0 ? true : false;
        }

        public bool UpdateFoodJoint(int id, TblFoodJoint foodJoint)
        {
            int value = 0;
            _context.Entry(foodJoint).State = EntityState.Modified;

            try
            {
                var joint = _context.TblFoodJoints.Find(id);
                if (joint == null)
                {
                    return false;
                }
                _context.TblFoodJoints.Update(foodJoint);
                value = _context.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FoodJointExists(id))
                {
                    return false;
                }
                else
                {
                    throw;
                }
            }

            return value > 0 ? true : false;

        }

        private bool FoodJointExists(int id)
        {
            return _context.TblFoodJoints.Any(e => e.Id == id);
        }

    }
}
