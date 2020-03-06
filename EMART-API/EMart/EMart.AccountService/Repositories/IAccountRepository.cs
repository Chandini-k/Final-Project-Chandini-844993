using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EMart.AccountService.Models;

namespace EMart.AccountService.Repositories
{
    public interface IAccountRepository
    {
        public void BuyerRegister(Buyer buyer);
        public void SellerRegister(Seller seller);
        public Seller ValidateSeller(string uname, string pwd);
        public Buyer ValidateBuyer(string uname, string pwd);

    }
}
