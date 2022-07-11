import { useContext } from "react";
//
import { CyclesContext } from "../contexts/CyclesContext";

// ----------------------------------------------------------------------

const useCycles = () => {
	const context = useContext(CyclesContext);

	if (!context)
		throw new Error("Cycles context must be use inside CyclesProvider");

	return context;
};

export default useCycles;
