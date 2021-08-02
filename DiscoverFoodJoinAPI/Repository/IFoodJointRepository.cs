using DiscoverFoodJoinAPI.Model;
using System.Collections.Generic;

namespace DiscoverFoodJoinAPI.Repository
{
    public interface IFoodJointRepository
    {
        List<TblFoodJoint> GetFoodJoints();

        List<TblFoodJoint> GetFoodJointsCityId(int id);

        List<TblCity> GetCities();

        TblFoodJoint GetFoodJointDetailsById(int id);

        TblCity GetCityById(int id);

        bool CreateFoodJoint(TblFoodJoint foodJoint);

        bool UpdateFoodJoint(int id, TblFoodJoint foodJoint);

        bool DeleteFoodJoint(int id);

    }
}
