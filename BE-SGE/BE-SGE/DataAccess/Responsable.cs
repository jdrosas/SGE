using System;
using System.Collections.Generic;

namespace BE_SGE.DataAccess
{
    public partial class Responsable
    {
        public Responsable()
        {
            Asignaciones = new HashSet<Asignacione>();
        }

        public int Idresponsable { get; set; }
        public string NombreResponsable { get; set; } = null!;
        public string Correo { get; set; } = null!;
        public string Contraseña { get; set; } = null!;
        public int TelefonoResponsable { get; set; }
        public int Idrol { get; set; }

        public virtual Rol IdrolNavigation { get; set; } = null!;
        public virtual ICollection<Asignacione> Asignaciones { get; set; }
    }
}
