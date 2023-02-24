import useQuiosco from "@/hooks/useQuiosco"
import Image from "next/image"

const Categoria = ({categoria}) => {
  const { categoriaActual, handleClickCategoria } = useQuiosco()

  const { id, nombre, icono } = categoria
  return (
    <div
      className={`${categoriaActual?.id === id ? 'bg-amber-400' : ''} flex items-center gap-4 w-full border p-5 hover:bg-amber-400`}
    >
      <Image
        src={`/assets/img/icono_${icono}.svg`}
        alt={`Imagen Icono ${nombre}`}
        width="0"
        height="0"
        sizes="100vw"
        className="w-10 h-auto"
      />
      <button
        type="button"
        className="text-2xl font-bold hover:cursor-pointer"
        onClick={() => handleClickCategoria(id)}
      >
        {nombre}
      </button>
    </div>
  )
}

export default Categoria