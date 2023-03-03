/**
 * Simulation:
 *  Dissolving iron metal partially into nitric acid solution
 *  releasing nitrogen dioxide gas
 * 
 *  Adding muriatic acid solution for complete dissolvation
 * 
 *  Adding sodium hydroxide solution to neutralize excess acid
 *  and precipitate iron salt
 * 
 * Reaction d: Fe + 6 HNO3 -> Fe(NO3)3 + 3 NO2 + 3 H2O
 * Reaction e: Fe + 2HCl -> FeCl2 + H2
 * Reaction f: NaOH + HNO3 -> NaNO3 + H2O
 * Reaction f1: NaOH + HCl -> NaCl + H2O
 * Reaction g: 3 NaOH + Fe(NO3)3 -> 3 NaNO3 + Fe(OH)3
 * Reaction h: 2 NaOH + FeCl2 -> 2 NaCl + Fe(OH)2
 * 
 * Environment: 
 *  1L of nitric acid and sodium nitrate solution (H2O: excess, HNO3: 1.2M, NaNO3: 0.2M)
 *  Iron metal: 28 gram
 *  700ml of muriatic acid (HCl: 1M)
 *  2L of sodium hydroxide (NaOH: 0.8M)
 */

d = new reaction();
d.add(1, "Fe");
d.add(6, "HNO3");
d.add(-1, "Fe(NO3)3");
d.add(-3, "NO2");
d.add(-3, "H2O");

e = new reaction();
e.add(1, "Fe");
e.add(2, "HCl");
e.add(-1, "FeCl2");
e.add(-1, "H2");

f = new reaction();
f.add(1, "NaOH");
f.add(1, "HNO3");
f.add(-1, "NaNO3");
f.add(-1, "H2O");

f1 = new reaction();
f1.add(1, "NaOH");
f1.add(1, "HCl");
f1.add(-1, "NaCl");
f1.add(-1, "H2O");

g = new reaction();
g.add(3, "NaOH");
g.add(1, "Fe(NO3)3");
g.add(-3, "NaNO3");
g.add(-1, "Fe(OH)3");

h = new reaction();
h.add(2, "NaOH");
h.add(1, "FeCl2");
h.add(-2, "NaCl");
h.add(-1, "Fe(OH)2");

env2 = { H2O: Infinity, Fe: 28/56 , HNO3: 1 * 1.2, NaNO3: 1 * 0.2 };
env2 = d.react(env2);
env2["HCl"] = 0.7 * 1;
env2 = e.react(env2);
env2["NaOH"] = 2 * 0.8;
env2 = f.react(env2);
env2 = f1.react(env2);
env2 = g.react(env2);
env2 = h.react(env2);
console.log("Fe + HNO3, + HCl, + NaOH", env2);
