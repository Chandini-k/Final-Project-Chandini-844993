﻿using System;
using System.Collections.Generic;

namespace EMart.AccountService.Models
{
    public partial class SubCategory
    {
        public SubCategory()
        {
            Items = new HashSet<Items>();
        }

        public int Subid { get; set; }
        public string Subname { get; set; }
        public int? Cid { get; set; }
        public string Sdetails { get; set; }
        public int? Gst { get; set; }

        public virtual Category C { get; set; }
        public virtual ICollection<Items> Items { get; set; }
    }
}
