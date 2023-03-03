/**
 * Simulation:
 *  Bubbling carbon dioxide gas into limewater
 * 
 * Reaction a: Ca(OH)2 + CO2 -> CaCO3 + H2O
 * Reaction b: CaCO3 + CO2 + H2O -> Ca(HCO3)2
 * 
 * Environment: 
 *  Solution of calcium hydroxide (H2O: excess, Ca(OH)2: 1 mol)
 *  CO2 gas: 1.5 mol
 */


a = new reaction();
a.add(1, "Ca(OH)2");
a.add(1, "CO2");
a.add(-1, "CaCO3");
a.add(-1, "H2O");

b = new reaction();
b.add(1, "CaCO3");
b.add(1, "H2O");
b.add(1, "CO2");
b.add(-1, "Ca(HCO3)2");

env = { H2O: Infinity, "Ca(OH)2": 1, CO2: 1.5 };
env = a.react(env);
env = b.react(env);
console.log("Ca(OH)2 + CO2", env);

