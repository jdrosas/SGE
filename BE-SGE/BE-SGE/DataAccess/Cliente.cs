using System;
using System.Collections.Generic;

namespace BE_SGE.DataAccess
{
    public partial class Cliente
    {
        public Cliente()
        {
            Asignaciones = new HashSet<Asignacione>();
        }

        public int Idcliente { get; set; }
        public string Nombre { get; set; } = null!;
        public string Usuario { get; set; } = null!;
        public string Area { get; set; } = null!;
        public string CorreoCliente { get; set; } = null!;
        public int TelefonoCliente { get; set; }

        public virtual ICollection<Asignacione> Asignaciones { get; set; }
    }
}
