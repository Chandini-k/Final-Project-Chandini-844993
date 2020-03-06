﻿using System;
using System.Collections.Generic;

namespace EMart.AccountService.Models
{
    public partial class Items
    {
        public Items()
        {
            PurchaseHistory = new HashSet<PurchaseHistory>();
            PurchaseHistory1 = new HashSet<PurchaseHistory1>();
        }

        public int Id { get; set; }
        public int? Categoryid { get; set; }
        public int? Subcatergoryid { get; set; }
        public string Price { get; set; }
        public string Itemname { get; set; }
        public string Description { get; set; }
        public int? Stockno { get; set; }
        public string Remarks { get; set; }

        public virtual Category Category { get; set; }
        public virtual SubCategory Subcatergory { get; set; }
        public virtual ICollection<PurchaseHistory> PurchaseHistory { get; set; }
        public virtual ICollection<PurchaseHistory1> PurchaseHistory1 { get; set; }
    }
}
