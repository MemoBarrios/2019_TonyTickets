using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TonyTickets.Models
{
    public class Ticket
    {
        public int Id { get; set; }
        public short Compania { get; set; }
        public int Sucursal { get; set; }
        public string Titulo { get; set; }
        public string Tipo { get; set; }
        public string UsuarioAsig { get; set; }
        public int Id_Usuario { get; set; }
        public int Id_Estatus { get; set; }
        public DateTime Id_Fecha { get; set; }
        public string Descripcion { get; set; }
        public string Categoria { get; set; }
        public string Subcategoria { get; set; }
        public string Departamento { get; set; }
        public DateTime FechaCierre { get; set; }
        public string Adjuntos { get; set; }
    }
}
