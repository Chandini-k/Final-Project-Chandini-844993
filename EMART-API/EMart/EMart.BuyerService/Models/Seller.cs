﻿using System;
using System.Collections.Generic;

namespace EMart.BuyerService.Models
{
    public partial class Seller
    {
        public Seller()
        {
            PurchaseHistory = new HashSet<PurchaseHistory>();
            PurchaseHistory1 = new HashSet<PurchaseHistory1>();
        }

        public int Sid { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string Companyname { get; set; }
        public int Gst { get; set; }
        public string Aboutcmpy { get; set; }
        public string Address { get; set; }
        public string Website { get; set; }
        public string Email { get; set; }
        public string Mobileno { get; set; }

        public virtual ICollection<PurchaseHistory> PurchaseHistory { get; set; }
        public virtual ICollection<PurchaseHistory1> PurchaseHistory1 { get; set; }
    }
}
