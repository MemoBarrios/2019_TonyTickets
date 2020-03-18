using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using TonyTickets.Models;

namespace TonyTickets.Data
{
    public class TicketsRepository
    {
        private readonly string conexionDB;

        public TicketsRepository(IConfiguration configuration)
        {
            conexionDB = configuration.GetConnectionString("TIENDA");
        }

        //public async Task InsertarIncidente(Incidente incidente)
        //{
        //    await GeneralesRepository.EjecutaSpSinRetornoAsync(conexionDB, "TSP_GuardarTicket", incidente.Titulo, incidente.UsuarioAsig, incidente.Id_Usuario, incidente.Id_Estatus, incidente.Tipo, incidente.Prioridad);
        //}

    }
}
