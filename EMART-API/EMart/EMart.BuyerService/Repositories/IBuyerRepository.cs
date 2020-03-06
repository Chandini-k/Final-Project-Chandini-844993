using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EMart.BuyerService.Models;

namespace EMart.BuyerService.Repositories
{
   public interface IBuyerRepository
    {
        List<Items> Search(string name);
        public void BuyItem(PurchaseHistory purchaseHistory);
        public void EditProfileBuyer(Buyer buyer);
        public Buyer ProfileBuyer(int bid);
        List<PurchaseHistory> TransactionHistory(int bid);
        List<Category> GetCategories();
        List<SubCategory> GetSubCategories(int cid);
        List<Items> ViewItem(string name);
    }
}
