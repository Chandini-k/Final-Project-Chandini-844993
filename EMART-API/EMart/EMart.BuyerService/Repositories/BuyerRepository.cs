﻿using EMart.BuyerService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EMart.BuyerService.Repositories
{
    public class BuyerRepository : IBuyerRepository
    {
        private readonly EMARTDBContext _context;
        public BuyerRepository(EMARTDBContext context)
        {
            _context = context;
        }
        public void BuyItem(PurchaseHistory purchasehistory)
        {
            _context.PurchaseHistory.Add(purchasehistory);
            _context.SaveChanges();
        }

        public void EditProfileBuyer(Buyer buyer)
        {
            _context.Update(buyer);
            _context.SaveChanges();
        }

        public Buyer ProfileBuyer(int bid)
        {
            return _context.Buyer.Find(bid);
        }

        public List<Items> Search(string name)
        {
          return _context.Items.Where(e => e.Itemname == name).ToList();
            
        }

        public List<PurchaseHistory> TransactionHistory(int bid)
        {
            return _context.PurchaseHistory.ToList();
        }
        public List<Category> GetCategories()
        {
            return _context.Category.ToList();
        }
        public List<SubCategory> GetSubCategories(int cid)
        {
            return _context.SubCategory.ToList();
        }
        public List<Items> ViewItem(string name)
        {
            return _context.Items.Where(e => e.Itemname == name).ToList();
        }
    }
}
