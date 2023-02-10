using System;
using System.Collections.Generic;

namespace BE_SGE.DataAccess
{
    public partial class Rol
    {
        public Rol()
        {
            Responsables = new HashSet<Responsable>();
        }

        public int Idrol { get; set; }
        public string NombreRol { get; set; } = null!;

        public virtual ICollection<Responsable> Responsables { get; set; }
    }
}
