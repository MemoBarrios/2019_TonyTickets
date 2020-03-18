using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TonyTickets.Models
{
    public class Incidente: Ticket
    {
        public string Prioridad { get; set; }
        public DateTime TiempoInv { get; set; }
    }
}
