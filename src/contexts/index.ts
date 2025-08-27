import { createContext } from "react";

import { Plan } from "../data/plan";

const PlanContext = createContext<Plan>({} as Plan);

export { PlanContext };
