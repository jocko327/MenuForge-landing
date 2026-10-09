(function () {
  var rowsEl = document.getElementById('calcRows');
  var addBtn = document.getElementById('calcAdd');
  if (!rowsEl || !addBtn) return;

  var starter = [
    { name: 'Ground beef 80/20', packCost: 52.8, packSize: 10, amount: 0.375, yieldPct: 100 },
    { name: 'Brioche bun', packCost: 18.6, packSize: 48, amount: 1, yieldPct: 100 },
    { name: 'Cheddar, sliced', packCost: 24.9, packSize: 120, amount: 2, yieldPct: 100 },
    { name: 'Romaine', packCost: 38.5, packSize: 24, amount: 0.1, yieldPct: 75 }
  ];

  function money(n) {
    return isFinite(n) ? '$' + n.toFixed(2) : '—';
  }

  function num(input) {
    var v = parseFloat(input.value);
    return isNaN(v) ? 0 : v;
  }

  function field(label, cls, value, attrs) {
    var wrap = document.createElement('div');
    wrap.className = cls || '';
    var l = document.createElement('label');
    l.textContent = label;
    var input = document.createElement('input');
    Object.keys(attrs || {}).forEach(function (k) { input.setAttribute(k, attrs[k]); });
    input.value = value;
    input.addEventListener('input', recalc);
    var id = 'calc-' + Math.random().toString(36).slice(2, 9);
    input.id = id;
    l.setAttribute('for', id);
    wrap.appendChild(l);
    wrap.appendChild(input);
    return { wrap: wrap, input: input };
  }

  function addRow(data) {
    data = data || { name: '', packCost: '', packSize: '', amount: '', yieldPct: 100 };
    var row = document.createElement('div');
    row.className = 'calc-row';
    var numeric = { type: 'number', inputmode: 'decimal', min: '0', step: 'any' };
    var name = field('Ingredient', 'calc-name', data.name, { type: 'text', placeholder: 'e.g. Ground beef' });
    var packCost = field('Pack cost ($)', '', data.packCost, numeric);
    var packSize = field('Pack size', '', data.packSize, numeric);
    var amount = field('Amount used', '', data.amount, numeric);
    var yieldPct = field('Yield %', '', data.yieldPct, numeric);
    var cost = document.createElement('div');
    cost.className = 'calc-line-cost';
    cost.setAttribute('aria-live', 'polite');
    var remove = document.createElement('button');
    remove.type = 'button';
    remove.className = 'calc-remove';
    remove.setAttribute('aria-label', 'Remove ingredient');
    remove.textContent = '×';
    remove.addEventListener('click', function () {
      row.remove();
      recalc();
    });
    [name, packCost, packSize, amount, yieldPct].forEach(function (f) { row.appendChild(f.wrap); });
    row.appendChild(cost);
    row.appendChild(remove);
    row._inputs = { packCost: packCost.input, packSize: packSize.input, amount: amount.input, yieldPct: yieldPct.input };
    row._cost = cost;
    rowsEl.appendChild(row);
    recalc();
  }

  function recalc() {
    var total = 0;
    Array.prototype.forEach.call(rowsEl.children, function (row) {
      var i = row._inputs;
      if (!i) return;
      var packSize = num(i.packSize);
      var yieldPct = num(i.yieldPct) || 100;
      var line = packSize > 0 ? (num(i.packCost) / packSize) * num(i.amount) / (yieldPct / 100) : 0;
      row._cost.textContent = money(line);
      total += line;
    });
    var portions = num(document.getElementById('calcPortions')) || 1;
    var price = num(document.getElementById('calcPrice'));
    var target = num(document.getElementById('calcTarget'));
    var perPlate = total / portions;
    document.getElementById('calcPlate').textContent = money(perPlate);
    document.getElementById('calcPct').textContent = price > 0 ? (perPlate / price * 100).toFixed(1) + '%' : '—';
    document.getElementById('calcSuggested').textContent = target > 0 ? money(perPlate / (target / 100)) : '—';
  }

  ['calcPortions', 'calcPrice', 'calcTarget'].forEach(function (id) {
    var el = document.getElementById(id);
    if (el) el.addEventListener('input', recalc);
  });
  addBtn.addEventListener('click', function () { addRow(); });
  starter.forEach(addRow);
})();
