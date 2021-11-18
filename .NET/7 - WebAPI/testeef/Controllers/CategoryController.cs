using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using testeef.Data;
using testeef.Models;
using System.Text.Json;
using System;

namespace testeef.Controllers {

    [ApiController]
    [Route( "v1/categories" )]

    public class CategoryController : ControllerBase {

        [HttpGet]
        [Route( "" )]

        public async Task<ActionResult<List<Category>>> Get( [FromServices] DataContext context ) {
            var categories = await context.categories.ToListAsync();
            return categories;
        }

        [HttpPost]
        [Route( "" )]

        public async Task<ActionResult<Category>> Post(
            [FromServices] DataContext context ,
            [FromBody] Category Model ) {
            if( ModelState.IsValid ) {
                context.categories.Add( Model );
                await context.SaveChangesAsync();
                return Model;
            } else {
                return BadRequest( ModelState );
            }
        }


    }
}