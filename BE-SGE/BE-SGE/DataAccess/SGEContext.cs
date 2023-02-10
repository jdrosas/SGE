using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace BE_SGE.DataAccess
{
    public partial class SGEContext : DbContext
    {
        public SGEContext()
        {
        }

        public SGEContext(DbContextOptions<SGEContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Asignacione> Asignaciones { get; set; } = null!;
        public virtual DbSet<Cliente> Clientes { get; set; } = null!;
        public virtual DbSet<Equipo> Equipos { get; set; } = null!;
        public virtual DbSet<Responsable> Responsables { get; set; } = null!;
        public virtual DbSet<Rol> Rols { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("server=bldventasv; database=SGE;user id=sa;password=grasco;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Asignacione>(entity =>
            {
                entity.HasKey(e => e.Idasignacion)
                    .HasName("PK__Asignaci__DE4486FCF5620143");

                entity.Property(e => e.Idasignacion).HasColumnName("IDAsignacion");

                entity.Property(e => e.FechaAsignacion).HasColumnType("date");

                entity.Property(e => e.FechaDevolucion).HasColumnType("date");

                entity.Property(e => e.Idcliente).HasColumnName("IDCliente");

                entity.Property(e => e.Idequipo).HasColumnName("IDEquipo");

                entity.Property(e => e.Idresponsable).HasColumnName("IDResponsable");

                entity.HasOne(d => d.IdclienteNavigation)
                    .WithMany(p => p.Asignaciones)
                    .HasForeignKey(d => d.Idcliente)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Asignacio__IDCli__286302EC");

                entity.HasOne(d => d.IdequipoNavigation)
                    .WithMany(p => p.Asignaciones)
                    .HasForeignKey(d => d.Idequipo)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Asignacio__IDEqu__29572725");

                entity.HasOne(d => d.IdresponsableNavigation)
                    .WithMany(p => p.Asignaciones)
                    .HasForeignKey(d => d.Idresponsable)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Asignacio__IDRes__2A4B4B5E");
            });

            modelBuilder.Entity<Cliente>(entity =>
            {
                entity.HasKey(e => e.Idcliente)
                    .HasName("PK__Clientes__9B8553FC7D103784");

                entity.Property(e => e.Idcliente).HasColumnName("IDCliente");

                entity.Property(e => e.Area)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.CorreoCliente).HasMaxLength(100);

                entity.Property(e => e.Nombre)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Usuario)
                    .HasMaxLength(30)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Equipo>(entity =>
            {
                entity.HasKey(e => e.Idequipo)
                    .HasName("PK__Equipo__034DC40F3502FD4B");

                entity.Property(e => e.Idequipo).HasColumnName("IDEquipo");

                entity.Property(e => e.MarcaEquipo)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ModeloEquipo).HasMaxLength(50);

                entity.Property(e => e.NombreEquipo)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ObservacionEquipo).HasMaxLength(200);

                entity.Property(e => e.TipoEquipo)
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Responsable>(entity =>
            {
                entity.HasKey(e => e.Idresponsable)
                    .HasName("PK__Responsa__02084DDE82DFA805");

                entity.Property(e => e.Idresponsable).HasColumnName("IDResponsable");

                entity.Property(e => e.Contraseña).HasMaxLength(100);

                entity.Property(e => e.Correo).HasMaxLength(100);

                entity.Property(e => e.Idrol).HasColumnName("IDRol");

                entity.Property(e => e.NombreResponsable)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.HasOne(d => d.IdrolNavigation)
                    .WithMany(p => p.Responsables)
                    .HasForeignKey(d => d.Idrol)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Responsab__IDRol__1CF15040");
            });

            modelBuilder.Entity<Rol>(entity =>
            {
                entity.HasKey(e => e.Idrol)
                    .HasName("PK__Rol__A681ACB6C29C80B6");

                entity.ToTable("Rol");

                entity.Property(e => e.Idrol).HasColumnName("IDRol");

                entity.Property(e => e.NombreRol)
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
