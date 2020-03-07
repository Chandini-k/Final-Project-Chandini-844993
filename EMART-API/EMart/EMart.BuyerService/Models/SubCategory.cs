using System;
using System.Collections.Generic;

namespace EMart.BuyerService.Models
{
    public partial class SubCategory
    {
        public SubCategory()
        {
            Cart = new HashSet<Cart>();
        }

        public int Subid { get; set; }
        public string Subname { get; set; }
        public int? Cid { get; set; }
        public string Sdetails { get; set; }
        public int? Gst { get; set; }
        public string Cname { get; set; }

        public virtual Category C { get; set; }
        public virtual ICollection<Cart> Cart { get; set; }
    }
}
