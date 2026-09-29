// Apply the saved or system theme before first paint to avoid a flash.
(function () {
  var t = null
  try { t = localStorage.getItem('cc-theme') } catch (e) {}
  if (!t) t = window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  document.documentElement.setAttribute('data-theme', t)
})()
