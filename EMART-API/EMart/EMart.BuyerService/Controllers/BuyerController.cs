using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using EMart.BuyerService.Models;
using EMart.BuyerService.Repositories;

namespace EMart.BuyerService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BuyerController : ControllerBase
    {
        private readonly IBuyerRepository _repo;
        public BuyerController(IBuyerRepository repo)
        {
            _repo = repo;
        }
        [HttpGet]
        [Route("Search/{name}")]
        public IActionResult Search(string name)
        {
            try
            {
                return Ok(_repo.Search(name));
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpPost]
        [Route("BuyItem")]
        public IActionResult BuyItem(PurchaseHistory purchaseHistory)
        {
            try
            {
                _repo.BuyItem(purchaseHistory);
                return Ok();
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpGet]
        [Route("Profile/{bid}")]
        public IActionResult ProfileBuyer(int bid)
        {
            return Ok(_repo.ProfileBuyer(bid));
        }
        [HttpPut]
        [Route("Edit")]
        public IActionResult EditProfileBuyer(Buyer buyer)
        {
            try
            {
                _repo.EditProfileBuyer(buyer);
                return Ok();
            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }
        [HttpGet]
        [Route("TransactionHistory")]
        public IActionResult TransactionHistory(int bid)
        {
            try
            {
                return Ok(_repo.TransactionHistory(bid));
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpGet]
        [Route("Category")]
        public IActionResult Category()
        {
            try
            {
                return Ok(_repo.GetCategories());
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpGet]
        [Route("Subcategory/{cid}")]
        public IActionResult SubCategory(int cid)
        {
            try
            {
                return Ok(_repo.GetSubCategories(cid));
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpGet]
        [Route("ViewItems/{name}")]
        public IActionResult Get(string name)
        {
            try
            {
                return Ok(_repo.ViewItem(name));
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
    }
}