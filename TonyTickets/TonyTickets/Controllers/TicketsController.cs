using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TonyTickets.Data;
using TonyTickets.Models;

namespace TonyTickets.Controllers
{
    [Route("{controller}")]
    [ApiController]
    public class TicketsController : ControllerBase
    {
        private readonly TicketsRepository _ticketsRepository;
        public TicketsController(TicketsRepository ticketsRepository)
        {
            _ticketsRepository = ticketsRepository;
        }

        //[HttpPost]
        //public async Task GuardaIncidente([FromBody] Incidente incidente)
        //{
        //    await _ticketsRepository.InsertarIncidente(incidente);
        //}
    }
}