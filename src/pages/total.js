import useQuiosco from "@/hooks/useQuiosco";
import Layout from "@/layout/Layout";
import { useCallback, useEffect } from "react";

const Total = () => {
  const pedido = useQuiosco();

  const comprobarPedido = useCallback(() => {
    console.log(pedido.length)
    if(pedido.length === 0)
      return
  }, [pedido]);

  useEffect(() => {
    comprobarPedido();
  }, [pedido, comprobarPedido]);

  const colocarOrden = (e) => {
    e.preventDefault();
    console.log("realizar pedido");
  };

  return (
    <Layout pagina="Total y Confirmar Pedido">
      <h1 className="text-4xl font-black">Total y Confirmar Pedido</h1>
      <p className="text-2xl my-10">Confirma tu Pedido a Continuación </p>
      <form onSubmit={colocarOrden}>
        <div>
          <label
            htmlFor="nombre"
            className="block uppercase text-slate-800 font-bold text-xl"
          >
            Nombre
          </label>
          <input
            type="text"
            name="nombre"
            id="nombre"
            className="bg-gray-200 w-full mt-3 p-2 rounded-md lg:w-1/3"
            placeholder="Nombre"
          />
        </div>
        <div className="mt-10">
          <p className="text-2xl">
            Total a Pagar: {""}
            <span className="font-bold">200</span>
          </p>
        </div>
        <div className="mt-5">
          <input
            type="submit"
            className={`${
              comprobarPedido()
                ? "bg-indigo-100"
                : "bg-indigo-600 hover:bg-indigo-800"
            } w-full lg:w-auto px-5 py-2 rounded uppercase font-bold text-white text-center`}
            value="Confirmar Pedido"
            disabled={comprobarPedido()}
          />
        </div>
      </form>
    </Layout>
  );
};

export default Total;