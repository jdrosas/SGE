using System;
using System.Collections.Generic;

namespace BE_SGE.DataAccess
{
    public partial class Equipo
    {
        public Equipo()
        {
            Asignaciones = new HashSet<Asignacione>();
        }

        public int Idequipo { get; set; }
        public string NombreEquipo { get; set; } = null!;
        public string TipoEquipo { get; set; } = null!;
        public string MarcaEquipo { get; set; } = null!;
        public string ModeloEquipo { get; set; } = null!;
        public string ObservacionEquipo { get; set; } = null!;

        public virtual ICollection<Asignacione> Asignaciones { get; set; }
    }
}
