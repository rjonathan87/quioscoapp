import { formatearDinero } from "@/helpers"
import useQuiosco from "@/hooks/useQuiosco"
import Image from "next/image"

const Producto = ({producto}) => {
  const { id, nombre, precio, imagen } = producto
  const { handleSetProducto, handleChangeModal } = useQuiosco()

  return (
    <div className="border p-3 flex-col ">
      <Image
        src={`/assets/img/${imagen}.jpg`}
        alt={`Imagen de ${nombre}`}
        width="0"
        height="0"
        sizes="100vw"
        className="w-full md:w-auto mt-2 ml-2 object-center"
      />
      <div className="p-5">
        <h3 className="text-2xl font-bold">{nombre}</h3>
        <p className="mt-5 font-black text-4xl text-amber-500">
          { formatearDinero(precio) }
        </p>
        <button 
          className="bg-indigo-600 hover:bg-indigo-800 w-full mt-5 uppercase font-bold text-white p-3"
          onClick={() => {
            handleSetProducto(producto)
            handleChangeModal()
          }}
        >
          Agregar
        </button>
      </div>
    </div>
  )
} 

export default Producto