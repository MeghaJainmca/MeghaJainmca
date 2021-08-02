using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

#nullable disable

namespace DiscoverFoodJoinAPI.Model
{
    [Table("tblCity")]
    public partial class TblCity
    {
        public TblCity()
        {
            TblFoodJoints = new HashSet<TblFoodJoint>();
        }

        [Key]
        [Column("id")]
        public int Id { get; set; }
        [Required]
        public string CityName { get; set; }
        public string State { get; set; }
        public string Country { get; set; }

        [InverseProperty(nameof(TblFoodJoint.City))]
        public virtual ICollection<TblFoodJoint> TblFoodJoints { get; set; }
    }
}
