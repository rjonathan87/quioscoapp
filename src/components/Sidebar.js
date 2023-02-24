import useQuiosco from "@/hooks/useQuiosco";
import Image from "next/image";
import Categoria from "./Categoria";

const Sidebar = () => {
  const { categorias } = useQuiosco();
  return (
    <div>
      <Image
        src="/assets/img/logo.svg"
        alt="imagen logotipo"
        width="0"
        height="0"
        sizes="100vw"
        className="w-20 h-auto mt-2 ml-2"
      />
      <nav className="mt-10">
        {categorias.map((categoria) => (
          <Categoria key={categoria.id} categoria={categoria} />
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
