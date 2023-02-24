const { default: QuioscoContext } = require("@/context/QuioscoProvider")
const { useContext } = require("react")

const useQuiosco = () => {
  return useContext(QuioscoContext)
}

export default useQuiosco;