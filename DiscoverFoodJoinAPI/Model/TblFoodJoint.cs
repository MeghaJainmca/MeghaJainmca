using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

#nullable disable

namespace DiscoverFoodJoinAPI.Model
{
    [Table("tblFoodJoint")]
    public partial class TblFoodJoint
    {
        [Key]
        [Column("id")]
        public int Id { get; set; }
        [Required]
        public string JointName { get; set; }
        [Required]
        [Column("foodType")]
        public string FoodType { get; set; }
        [Column("cityId")]
        public int? CityId { get; set; }
        [Column("address")]
        public string Address { get; set; }

        [ForeignKey(nameof(CityId))]
        [InverseProperty(nameof(TblCity.TblFoodJoints))]
        public virtual TblCity City { get; set; }
    }
}
