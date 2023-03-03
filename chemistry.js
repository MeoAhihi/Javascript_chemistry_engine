/**
 * input:
 *  A reaction e.g. H2 + 0.5 O2 -> H2O
 *  Easy task: input: amount of H2, O2 -> output: amount of H2O, excess H2, O2
 *  Hard task: input: amount of H2, O2 -> output: reaction process (how chemicals' quantity change over time)
 */
function calculate() {
  let result = document.getElementById("result");
  let hidrogen = parseFloat(document.getElementById("hidrogen").value);
  let oxigen = parseFloat(document.getElementById("oxigen").value);

  let a = new reaction();
  a.add(2, "H2");
  a.add(1, "O2");
  a.add(-2, "H2O");

  e = a.react({ O2: oxigen, H2: hidrogen });
  ans = ''
  for (const key in e) {
    if (Object.hasOwnProperty.call(e, key)) {
      ans += key + ": " + e[key] + "<br>";
    }
  }
  result.innerHTML = ans
}

function reaction() {
  this.components = new Array();

  this.add = function (coefficient, chemical) {
    this.components.push(new Array(coefficient, chemical));
  };

  this.react = function (environment) {
    reactances = this.components.filter((i) => i[0] > 0);
    unit = Infinity;
    for (const chemical of reactances) {
      if (!environment[chemical[1]]) {
        unit = 0;
        break;
      }
      unit = Math.min(environment[chemical[1]] / chemical[0], unit);
    }
    this.components.forEach((component) => {
      if (!environment[component[1]]) {
        environment[component[1]] = -unit * component[0];
      } else {
        environment[component[1]] -= unit * component[0];
      }
    });
    this.clean(environment)
    return (environment);
  };

  this.clean = function (array) {
    for (const key in array) {
      if (Object.hasOwnProperty.call(array, key) && array[key] == 0) {
        delete array[key];
      }
    }
  }

}
reaction.prototype.toString = function () {
  return `aaaa`
}