neutralize = new reaction();
neutralize.add(1, "H[+]");
neutralize.add(1, "OH[-]");
neutralize.add(-1, "H2O");

precipitateIron2 = new reaction();
precipitateIron2.add(1, "Fe[2+]");
precipitateIron2.add(2, "OH[-]");
precipitateIron2.add(-1, "Fe(OH)2");

precipitateIron3 = new reaction();
precipitateIron3.add(1, "Fe[3+]");
precipitateIron3.add(3, "OH[-]");
precipitateIron3.add(-1, "Fe(OH)3");

strongOxidizeIron = new reaction();
strongOxidizeIron.add(1, "Fe");
strongOxidizeIron.add(6, "H[+]");
strongOxidizeIron.add(3, "NO3[-]");
strongOxidizeIron.add(-1, "Fe[3+]");
strongOxidizeIron.add(-3, "NO2");
strongOxidizeIron.add(-3, "H2O");

weakOxidizeIron = new reaction();
weakOxidizeIron.add(1, "Fe");
weakOxidizeIron.add(2, "H[+]");
weakOxidizeIron.add(-1, "Fe[2+]");
weakOxidizeIron.add(-1, "H2");

env2 = {
  H2O: Infinity,
  Fe: 28 / 56,
  "NO3[-]": 1 * 1.2 + 1 * 0.2,
  "Na[+]": 1 * 0.2,
  "H[+]": 1 * 1.2,
};


console.log(env2)
env2 = strongOxidizeIron.react(env2);
env2["H[+]"] = 0.7 * 1;
env2["Cl[-]"] = 0.7 * 1;
env2 = weakOxidizeIron.react(env2);
env2["OH[-]"] = 2 * 0.8;
env2["Na[+]"] = 2 * 0.8;
env2 = neutralize.react(env2);
env2 = precipitateIron2.react(env2);
env2 = precipitateIron3.react(env2);
console.log("Fe + HNO3, + HCl, + NaOH", env2);
