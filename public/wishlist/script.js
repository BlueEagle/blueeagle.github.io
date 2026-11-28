// Wishlist behavior:
// - Items carry data-added="YYYY-MM-DD"; a "New this week" badge shows for 7 days after that date.
// - Items carry data-tags="Tag A, Tag B"; tags become filter chips and show on each item.
// - Each item starts collapsed to its title row; click or tap to expand.
// - The search box filters by any text in an item.
(function () {
  var items = Array.prototype.slice.call(document.querySelectorAll('.item'));
  var tiers = Array.prototype.slice.call(document.querySelectorAll('section.tier'));
  var now = Date.now(), week = 7 * 24 * 60 * 60 * 1000;
  var allTags = [];

  items.forEach(function (el, i) {
    var h3 = el.querySelector('h3');
    var tags = (el.getAttribute('data-tags') || '').split(',')
      .map(function (t) { return t.trim(); }).filter(Boolean);
    el._tags = tags;
    tags.forEach(function (t) { if (allTags.indexOf(t) < 0) allTags.push(t); });

    // Everything except the title goes into a collapsible body.
    var body = document.createElement('div');
    body.className = 'body';
    body.id = 'item-body-' + i;
    while (h3.nextSibling) body.appendChild(h3.nextSibling);

    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'head';
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-controls', body.id);
    h3.parentNode.insertBefore(btn, h3);
    btn.appendChild(h3);
    var chev = document.createElement('span');
    chev.className = 'chev';
    chev.setAttribute('aria-hidden', 'true');
    btn.appendChild(chev);

    var meta = document.createElement('div');
    meta.className = 'meta';
    var added = el.getAttribute('data-added');
    if (added) {
      var p = added.split('-');
      if (now - new Date(+p[0], +p[1] - 1, +p[2]).getTime() < week) {
        var nb = document.createElement('span');
        nb.className = 'new-badge';
        nb.textContent = 'New this week';
        meta.appendChild(nb);
      }
    }
    Array.prototype.forEach.call(body.querySelectorAll('.sale'), function (s) {
      meta.appendChild(s.cloneNode(true));
    });
    tags.forEach(function (t) {
      var c = document.createElement('span');
      c.className = 'itag';
      c.textContent = t;
      meta.appendChild(c);
    });
    btn.appendChild(meta);
    el.appendChild(body);
    el._text = el.textContent.toLowerCase();
    setOpen(el, false);

    btn.addEventListener('click', function () {
      setOpen(el, el.classList.contains('collapsed'));
      syncToggleAll();
    });
  });

  function setOpen(el, open) {
    el.classList.toggle('collapsed', !open);
    el.querySelector('.head').setAttribute('aria-expanded', open ? 'true' : 'false');
    el.querySelector('.body').hidden = !open;
  }

  var finder = document.getElementById('finder');
  if (!finder) return;
  finder.hidden = false;
  var q = document.getElementById('q');
  var chips = document.getElementById('chips');
  var count = document.getElementById('count');
  var none = document.getElementById('none');
  var toggleAll = document.getElementById('toggle-all');
  var active = null;

  var order = ['Radio', 'Emergency prep', 'Tools & workbench', 'Everyday carry', 'Outdoors', 'Desk setup', 'Cooking', 'Shooting'];
  allTags.sort(function (a, b) {
    var ia = order.indexOf(a), ib = order.indexOf(b);
    return (ia < 0 ? 99 : ia) - (ib < 0 ? 99 : ib) || a.localeCompare(b);
  });
  ['All'].concat(allTags).forEach(function (t) {
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'chip';
    b.textContent = t;
    b.setAttribute('aria-pressed', t === 'All' ? 'true' : 'false');
    b.addEventListener('click', function () {
      active = t === 'All' ? null : t;
      Array.prototype.forEach.call(chips.children, function (c) {
        c.setAttribute('aria-pressed', c === b ? 'true' : 'false');
      });
      apply();
    });
    chips.appendChild(b);
  });

  function visible() { return items.filter(function (el) { return !el.hidden; }); }

  function apply() {
    var words = q.value.toLowerCase().trim().split(/\s+/).filter(Boolean);
    var shown = 0;
    items.forEach(function (el) {
      var ok = (!active || el._tags.indexOf(active) >= 0) &&
        words.every(function (w) { return el._text.indexOf(w) >= 0; });
      el.hidden = !ok;
      if (ok) shown++;
    });
    tiers.forEach(function (t) {
      t.hidden = !t.querySelector('.item:not([hidden])');
    });
    var filtering = words.length || active;
    count.textContent = filtering
      ? 'Showing ' + shown + ' of ' + items.length + ' items'
      : items.length + ' items';
    none.hidden = shown > 0;
    syncToggleAll();
  }

  function syncToggleAll() {
    var v = visible();
    var anyClosed = v.some(function (el) { return el.classList.contains('collapsed'); });
    toggleAll.textContent = anyClosed ? 'Expand all' : 'Collapse all';
    toggleAll.hidden = v.length === 0;
  }

  toggleAll.addEventListener('click', function () {
    var v = visible();
    var open = v.some(function (el) { return el.classList.contains('collapsed'); });
    v.forEach(function (el) { setOpen(el, open); });
    syncToggleAll();
  });

  q.addEventListener('input', apply);
  apply();
})();
