using System;
using System.Collections.Generic;

namespace BE_SGE.DataAccess
{
    public partial class Asignacione
    {
        public int Idasignacion { get; set; }
        public int Idequipo { get; set; }
        public int Idcliente { get; set; }
        public int Idresponsable { get; set; }
        public DateTime FechaAsignacion { get; set; }
        public DateTime FechaDevolucion { get; set; }

        public virtual Cliente IdclienteNavigation { get; set; } = null!;
        public virtual Equipo IdequipoNavigation { get; set; } = null!;
        public virtual Responsable IdresponsableNavigation { get; set; } = null!;
    }
}
