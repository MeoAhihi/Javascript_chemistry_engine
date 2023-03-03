/**
 * Simulation:
 *  Iron metal dissolve partially in nitric acid solution
 *  releasing nitric oxide gas
 * 
 * Reaction c: Fe + 4 HNO3 -> Fe(NO3)3 + NO + 2 H2O
 * 
 * Environment:
 *  Iron metal (Fe: 0.6 mol)
 *  Solution of nitric acide (H2O: excess, HNO3: 1 mol)
 */

c = new reaction();
c.add(1, "Fe");
c.add(4, "HNO3");
c.add(-1, "Fe(NO3)3");
c.add(-1, "NO");
c.add(-2, "H2O");

env1 = { H2O: Infinity, Fe: 0.6, HNO3: 1 };
env1 = c.react(env1);
console.log("Fe + HNO3", env1);
