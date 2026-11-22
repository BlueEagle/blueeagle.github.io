// Items carry data-added="YYYY-MM-DD"; show a badge for 7 days after that date.
(function () {
  var now = Date.now(), week = 7 * 24 * 60 * 60 * 1000;
  document.querySelectorAll('.item[data-added]').forEach(function (el) {
    var p = el.getAttribute('data-added').split('-');
    var added = new Date(+p[0], +p[1] - 1, +p[2]).getTime();
    if (now - added < week) {
      var b = document.createElement('span');
      b.className = 'new-badge';
      b.textContent = 'New this week';
      el.insertBefore(b, el.firstChild);
    }
  });
})();
