import axios from "axios";

const { createContext, useState, useEffect } = require("react");

const QuioscoContext = createContext()
const QuioscoProvider = ({children}) => {
  const [categorias, setCategorias] = useState([])
  const [categoriaActual, setCategoriaActual] = useState({})
  const obtenerCategorias = async () => {
    try {
      const { data } = await axios('/api/categorias')
      setCategorias(data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    obtenerCategorias()
  }, [])
  useEffect(() => {
    setCategoriaActual(categorias[0])
  }, [categorias])
  
  const handleClickCategoria = id => {
    const categoria = categorias.filter( cat => cat.id === id )
    setCategoriaActual(categoria[0])
  }
  
  return (
    <QuioscoContext.Provider
      value={{
        categorias,
        categoriaActual,
        handleClickCategoria
      }}
    >
      {children}
    </QuioscoContext.Provider>
  )
}

export {
  QuioscoProvider
}

export default QuioscoContext