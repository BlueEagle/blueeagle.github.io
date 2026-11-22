// Apple-style compare: swap models per column, optionally hide identical rows.
(function(){
  var el=document.getElementById('bm-data'), root=document.getElementById('bm-cmp');
  if(!el||!root) return;
  var D=JSON.parse(el.textContent), byId={};
  D.M.forEach(function(m){byId[m.id]=m});
  var cur=[].map.call(root.querySelectorAll('select[data-col]'),function(s){return s.value});
  function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')}
  function val(v){return Array.isArray(v)?v:[v,'']}
  function cell(v){var a=val(v);return '<span class="v'+(a[1]?' '+a[1]:'')+'">'+esc(a[0])+'</span>'}
  var baby=root.querySelector('.cdev svg').outerHTML;
  function dev(m){return '<div class="dev w'+String(m.in).replace('.','')+'"><div class="scr px'+m.px+'"><i></i>'+baby+'</div></div>'}
  function visible(){return window.matchMedia('(max-width:700px)').matches?2:3}
  function render(){
    cur.forEach(function(id,i){
      var m=byId[id], col=root.querySelector('.ccol[data-col="'+i+'"]');
      col.querySelector('.cdev').innerHTML=dev(m);
      col.querySelector('.cname').textContent=m.n;
      col.querySelector('.cprice').textContent=m.price;
      col.querySelector('.cchip').innerHTML='<span class="chip'+(m.alt?' alt':'')+'">'+esc(m.chip)+'</span>';
      var a=col.querySelector('.cbuy'); a.href=m.link; a.textContent='See at '+m.linkT+' \u2197';
    });
    var n=visible();
    root.querySelectorAll('.crow').forEach(function(row){
      var k=row.getAttribute('data-k'), vals=[];
      row.querySelectorAll('.ccell').forEach(function(c,i){var v=byId[cur[i]].s[k];c.innerHTML=cell(v);vals.push(val(v)[0])});
      var shown=vals.slice(0,n);
      row.classList.toggle('same',shown.every(function(v){return v===shown[0]}));
    });
  }
  root.querySelectorAll('select[data-col]').forEach(function(s){
    s.addEventListener('change',function(){
      var i=+s.getAttribute('data-col'), j=cur.indexOf(s.value);
      if(j>-1&&j!==i){cur[j]=cur[i];root.querySelector('select[data-col="'+j+'"]').value=cur[j]}
      cur[i]=s.value; render();
    });
  });
  var diff=document.getElementById('bm-diff');
  diff.addEventListener('change',function(){root.classList.toggle('only-diff',diff.checked)});
  window.matchMedia('(max-width:700px)').addEventListener('change',render);
  render();
})();
