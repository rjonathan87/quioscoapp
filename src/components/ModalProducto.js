import useQuiosco from "@/hooks/useQuiosco"
import Image from "next/image"

const ModalProducto = () => {
  const { producto } = useQuiosco()
  console.log(producto)
  return (
    <div className="md:flex gap-10">
      <div className="md:w-1/3">
        <Image
          src={`/assets/img/${producto.imagen}.jpg`}
          alt={`Imagen de ${producto.nombre}`}
          width={200}
          height={300}
          
        />
      </div>
      <div className="md:w-2/3"></div>
    </div>
  )
}

export default ModalProducto