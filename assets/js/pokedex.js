/* Pokédex Coco Cobblemon: tìm phía trình duyệt trên JSON tĩnh /assets/pokedex/ (dựng từ dữ liệu server). */
(function () {
  'use strict';
  var root = document.getElementById('pdx');
  if (!root) { return; }
  var EN = root.getAttribute('data-lang') === 'en';
  var BASE = '/assets/pokedex/';
  var V = '?v=20261112h';
  var IMG = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
  var S = EN ? {
    count: function (n, all) { return n === all ? all + ' entries' : n + ' of ' + all; },
    none: 'Nothing found.', miss: function (q) { return 'Nothing found for "' + q + '". Showing the full list:'; }, more: 'Show more', loading: 'Loading data…', fail: 'Could not load the data. Reload the page.',
    stats: ['HP', 'Attack', 'Defense', 'Sp. Atk', 'Sp. Def', 'Speed'], total: 'Total',
    types: 'Type', abil: 'Abilities', hidden: 'hidden', evo: 'Evolution', from: 'Evolves from', to: 'Evolves into',
    forms: 'Forms', battle: 'battle only', drops: 'Drops', spawn: 'Where it spawns', nospawn: 'No natural spawn data.',
    chance: 'chance', qty: 'amount', blockedDrop: 'removed on Coco', blockedNote: 'Struck-through items are removed from Pokémon drops by the Coco server rules (held items, vitamins, mints, bottle caps…).',
    leg: 'Legendary: never in the normal spawn table. The server rolls its own chance, doubled during Golden Hour. Fishing and Poké Snacks never give Legendaries.',
    myth: 'Mythical: does not spawn naturally on Coco and cannot be summoned with altars.',
    legLink: '/en/features/', users: 'Pokémon with this ability', droppedBy: 'Dropped by', dropsOf: 'Drops of',
    noDrop: 'No Pokémon drops this item.', itemDrop: function (n) { return 'Dropped by ' + n + ' Pokémon'; },
    natHead: ['Nature', '', 'Raises', 'Lowers'], neutral: 'no effect',
    typeHelp: 'Pick one or two types to see what hits them hard.', atk: 'Attacking type →', def: 'Defending type ↓',
    weak: 'Takes ×2 or more from', resist: 'Takes ×½ or less from', immune: 'Takes no damage from', none2: 'none',
    dropHelp: 'Type a Pokémon to see what it drops, or an item to see which Pokémon drop it.',
    mons: 'Pokémon', items: 'Items', gen: 'Gen', lv: 'Lv.', any: 'anywhere',
    bucket: { common: 'Common', uncommon: 'Uncommon', rare: 'Rare', 'ultra-rare': 'Ultra-rare' },
    pos: { grounded: 'on land', submerged: 'underwater', surface: 'on water', seafloor: 'sea floor', fishing: 'fishing', lavafloor: 'lava' },
    ex: { rain: 'rain', thunder: 'thunderstorm', moon: 'moon phase', struct: 'near ', lure: 'lure ', t: { day: 'day', night: 'night', morning: 'morning', dusk: 'dusk', dawn: 'dawn', noon: 'noon', midnight: 'midnight', twilight: 'twilight' } },
    form: 'form', formOf: 'A form of', how: 'How to get this form'
  } : {
    count: function (n, all) { return n === all ? all + ' mục' : n + ' / ' + all + ' mục'; },
    none: 'Không thấy kết quả.', miss: function (q) { return 'Không thấy “' + q + '”. Đây là toàn bộ danh sách:'; }, more: 'Xem thêm', loading: 'Đang tải dữ liệu…', fail: 'Không tải được dữ liệu. Tải lại trang thử.',
    stats: ['HP', 'Tấn công', 'Phòng thủ', 'Tấn công đặc biệt', 'Phòng thủ đặc biệt', 'Tốc độ'], total: 'Tổng',
    types: 'Hệ', abil: 'Ability', hidden: 'ẩn', evo: 'Tiến hoá', from: 'Tiến hoá từ', to: 'Tiến hoá thành',
    forms: 'Dạng khác', battle: 'chỉ trong trận', drops: 'Item rơi', spawn: 'Nơi xuất hiện', nospawn: 'Không có dữ liệu xuất hiện tự nhiên.',
    chance: 'tỉ lệ', qty: 'số lượng', blockedDrop: 'Đã bị tắt', blockedNote: 'Món bị gạch là món đã bị tắt khỏi đồ rơi của Pokémon trên server (held item, vitamin, kẹo bạc hà, nắp chai…).',
    leg: 'Huyền thoại: không ra theo bảng spawn thường. Server tự gieo tỉ lệ riêng, Giờ Vàng gấp đôi. Câu cá và Poké Snack không ra Huyền thoại.',
    myth: 'Thần thoại: không xuất hiện tự nhiên trên Coco và bị khoá triệu hồi bằng bàn thờ.',
    legLink: '/tinh-nang/legendary/', users: 'Pokémon có Ability này', droppedBy: 'Rơi từ', dropsOf: 'Đồ rơi của',
    noDrop: 'Không Pokémon nào rơi món này.', itemDrop: function (n) { return 'Rơi từ ' + n + ' loài'; },
    natHead: ['Tính cách', 'Tên tiếng Anh', 'Tăng', 'Giảm'], neutral: 'không đổi',
    typeHelp: 'Chọn 1 hoặc 2 hệ để xem bị hệ nào đánh mạnh.', atk: 'Hệ tấn công →', def: 'Hệ phòng thủ ↓',
    weak: 'Bị ×2 trở lên từ', resist: 'Chỉ bị ×½ trở xuống từ', immune: 'Miễn nhiễm', none2: 'không có',
    dropHelp: 'Gõ tên Pokémon để xem nó rơi gì, hoặc tên item để xem con nào rơi.',
    mons: 'Pokémon', items: 'Item', gen: 'Thế hệ', lv: 'Cấp', any: 'mọi nơi',
    bucket: { common: 'Common', uncommon: 'Uncommon', rare: 'Rare', 'ultra-rare': 'Ultra-rare' },
    pos: { grounded: 'trên cạn', submerged: 'dưới nước', surface: 'mặt nước', seafloor: 'đáy biển', fishing: 'câu cá', lavafloor: 'dung nham' },
    ex: { rain: 'trời mưa', thunder: 'có sấm', moon: 'theo pha trăng', struct: 'gần ', lure: 'mồi cấp ', t: { day: 'ban ngày', night: 'ban đêm', morning: 'buổi sáng', dusk: 'chạng vạng', dawn: 'bình minh', noon: 'buổi trưa', midnight: 'nửa đêm', twilight: 'chạng vạng' } },
    form: 'dạng', formOf: 'Dạng khác của', how: 'Cách có dạng này'
  };
  var BIOME_VI = { overworld: 'mọi biome thường', jungle: 'rừng nhiệt đới', ocean: 'biển', swamp: 'đầm lầy', forest: 'rừng', freshwater: 'sông hồ', coast: 'bờ biển', hills: 'đồi', tropical_island: 'đảo nhiệt đới', arid: 'vùng khô', mountain: 'núi', taiga: 'rừng taiga', magical: 'vùng huyền bí', temperate: 'ôn đới', badlands: 'badlands', lush: 'vùng tươi tốt', savanna: 'xavan', frozen_ocean: 'biển băng', floral: 'vùng hoa', plains: 'đồng bằng', spooky: 'vùng u ám', grassland: 'đồng cỏ', warm_ocean: 'biển ấm', mushroom: 'đảo nấm', sky: 'trên cao', end: 'The End', beach: 'bãi biển', snowy_forest: 'rừng tuyết', freezing: 'vùng băng giá', tundra: 'lãnh nguyên', desert: 'sa mạc', cold_ocean: 'biển lạnh', bamboo: 'rừng tre', volcanic: 'núi lửa', dripstone: 'hang thạch nhũ', river: 'sông', lukewarm_ocean: 'biển ấm vừa', deep_dark: 'Deep Dark', deep_ocean: 'biển sâu', island: 'đảo', glacial: 'sông băng', thermal: 'suối nóng', nether: 'Nether', snowy: 'vùng tuyết', peak: 'đỉnh núi', cherry_blossom: 'rừng anh đào', cave: 'hang', cold: 'vùng lạnh', highlands: 'cao nguyên', sandy: 'vùng cát' };
  var TCOL = ['#6b6b4f', '#b8461a', '#2462c4', '#2e7d32', '#806500', '#1d7584', '#a12a1f', '#7b3591', '#7f561c', '#4f5fc4', '#b0305a', '#5a6a10', '#73631f', '#5a4385', '#4a32c0', '#4a3a30', '#4d6573', '#a3427a'];

  var D = {}, loading = {};
  function load(name) {
    if (D[name]) { return Promise.resolve(D[name]); }
    if (!loading[name]) {
      loading[name] = fetch(BASE + name + '.json' + V).then(function (r) { if (!r.ok) { throw new Error(r.status); } return r.json(); })
        .then(function (j) { D[name] = j; return j; });
    }
    return loading[name];
  }

  var $q = document.getElementById('pdx-q'), $out = document.getElementById('pdx-out'), $count = document.getElementById('pdx-count');
  var $panel = document.getElementById('pdx-panel');
  var tabs = [].slice.call(root.querySelectorAll('.pdx-tab'));
  var cur = 'mon', limit = 60, token = 0;

  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function fold(s) { return String(s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/đ/g, 'd').replace(/[^a-z0-9:]+/g, ' ').trim(); }
  function num(x) { var s = String(Math.round(x * 100) / 100); return EN ? s : s.replace('.', ','); }
  function tName(i) { var m = D.misc; return m ? m.tn[i][EN ? 1 : 0] : ''; }
  // Icon hệ = texture thật của Cobblemon (gui/types.png, 18 ô 36px, cùng thứ tự misc.tn).
  // Ảnh hệ: badge PokéAPI (Scarlet/Violet); số thứ tự PokéAPI theo đúng thứ tự misc.tn.
  var TID = [1, 10, 11, 12, 13, 15, 2, 4, 5, 3, 14, 7, 6, 8, 16, 17, 9, 18];
  function tBadge(i) { return i < 0 ? '' : '<img class="pdx-t" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/' + TID[i] + '.png" width="90" height="18" loading="lazy" decoding="async" alt="' + esc(tName(i)) + '" title="' + esc(tName(i)) + '">'; }
  function monName(id) { var m = D.monById[id]; return m ? m.n : (D.mon.names[id] || id); }
  function itemName(id) { var it = D.it && D.it[id]; return it ? (EN ? it.e : it.v) : id.split(':').pop().replace(/_/g, ' '); }
  function abName(id) { var a = D.abById && D.abById[id]; return a ? a[1] : id; }
  // Ảnh: sprite PokéAPI 96px, hotlink, chỉ tải khi hiện (lazy). m.im === 0 = loài không có ảnh; f.im = id ảnh của dạng.
  function stem(m, f) { if (f && f.im) { return f.im; } return m && m.im !== 0 ? m.d : null; }
  function img(s, size, alt, cls) {
    if (s == null) { return '<span class="pdx-img pdx-img--none" style="width:' + size + 'px;height:' + size + 'px" aria-hidden="true"></span>'; }
    return '<img class="pdx-img' + (cls ? ' ' + cls : '') + '" src="' + IMG + s + '.png" width="' + size + '" height="' + size + '" loading="lazy" decoding="async" alt="' + esc(alt) + '">';
  }
  // Ảnh item: atlas 16x16 texture thật trong game (items.webp, ô = it.x, 32 ô/hàng), vẽ 32px; CSS chỉ tải atlas khi có ô hiện ra.
  function itImg(id) {
    var it = D.it && D.it[id];
    if (!it || it.x == null) { return '<span class="pdx-ii pdx-ii--none" aria-hidden="true"></span>'; }
    return '<span class="pdx-ii" style="background-position:-' + (it.x % 32) * 32 + 'px -' + Math.floor(it.x / 32) * 32 + 'px" aria-hidden="true"></span>';
  }
  function monImg(id, size) { var m = D.monById[id]; return img(stem(m), size, m ? m.n : id); }
  function link(tab, q, text) { return '<button type="button" class="pdx-link" data-go="' + tab + '" data-q="' + esc(q) + '">' + esc(text) + '</button>'; }

  // ---------- hash: #mon/gyarados, #drop/dragon scale ----------
  function setHash() {
    var h = '#' + cur + ($q.value ? '/' + encodeURIComponent($q.value) : '');
    if (location.hash !== h) { history.replaceState(null, '', h); }
  }

  function select(tab, q, push) {
    cur = tab; limit = 60;
    tabs.forEach(function (b) {
      var on = b.getAttribute('data-tab') === tab;
      b.setAttribute('aria-selected', on ? 'true' : 'false');
      b.tabIndex = on ? 0 : -1;
      if (on) { $panel.setAttribute('aria-labelledby', b.id); }
    });
    $q.value = q || '';
    $q.parentNode.style.display = (tab === 'nat' || tab === 'type') ? 'none' : '';
    if (push !== false) { setHash(); }
    render();
  }

  function needs(tab) {
    var n = { mon: ['misc', 'mon'], ab: ['misc', 'ab', 'mon'], it: ['misc', 'it', 'mon'], nat: ['misc'], type: ['misc'], drop: ['misc', 'mon', 'it'] }[tab];
    return Promise.all(n.map(load)).then(prep);
  }
  function prep() {
    if (D.mon && !D.monById) {
      D.monById = {};
      var tk = function (t) { return t.map(function (x) { return D.misc ? D.misc.tn[x].join(' ') : ''; }).join(' '); };
      D.rows = [];
      D.mon.mons.forEach(function (m) {
        D.monById[m.i] = m; m.k = fold(m.n + ' ' + m.i + ' ' + m.d + ' ' + tk(m.t)); D.rows.push(m);
        (m.f || []).forEach(function (f, j) {
          if (/costume/i.test(f.n) || !(f.t || f.s || f.im)) { return; }
          var r = { i: m.i + ':' + j, d: m.d, n: formName(m, f), t: f.t || m.t, im: f.im, fb: m, ff: f };
          r.k = fold(r.n + ' ' + m.i + ' ' + m.d + ' ' + f.n + (/gmax/i.test(f.n) ? ' gigantamax' : '') + ' ' + tk(r.t)); D.rows.push(r);
        });
      });
    }
    if (D.ab && !D.abById) { D.abById = {}; D.ab.forEach(function (a) { D.abById[a[0]] = a; a.k = fold(a[0] + ' ' + a[1] + ' ' + a[2] + ' ' + a[3]); }); }
    if (D.it && D.mon && !D.dropBy) {
      D.dropBy = {};
      D.mon.mons.forEach(function (m) { (m.dr || []).forEach(function (d) { (D.dropBy[d[0]] = D.dropBy[d[0]] || []).push([m.i, d]); }); });
      D.itKeys = Object.keys(D.it).map(function (k) { var x = D.it[k]; return [k, fold(k + ' ' + x.v + ' ' + x.e)]; });
    }
  }

  function render() {
    var my = ++token;
    if (!D.mon && cur !== 'nat' && cur !== 'type') { $count.textContent = S.loading; }
    needs(cur).then(function () { if (my === token) { draw(); } }).catch(function () { $count.textContent = S.fail; });
  }

  // Gõ tiếng Việt vẫn ra tên tiếng Anh: "sắt" -> iron/steel, "đá" -> stone/rock... (khoá đã bỏ dấu).
  var VI = { 'sat': 'iron steel metal', 'thep': 'steel metal iron', 'lua': 'fire flame', 'nuoc': 'water aqua', 'co': 'grass leaf', 'la': 'leaf',
    'dien': 'electric thunder', 'set': 'thunder', 'bang': 'ice', 'da': 'stone rock', 'dat': 'ground earth', 'doc': 'poison', 'bay': 'flying',
    'rong': 'dragon', 'ma': 'ghost', 'tien': 'fairy', 'bo': 'bug', 'vang': 'gold golden', 'bac': 'silver', 'dong': 'copper', 'kim cuong': 'diamond',
    'ngoc luc bao': 'emerald', 'than': 'coal', 'keo': 'candy', 'bong': 'ball', 'qua': 'berry', 'hat': 'seed', 'long': 'feather', 'vay': 'scale',
    'xuong': 'bone', 'trung': 'egg', 'mat ong': 'honey', 'sua': 'milk', 'nam': 'mushroom', 'canh': 'wing', 'rang': 'fang tooth', 'mong': 'claw',
    'mat trang': 'moon', 'mat troi': 'sun', 'nap chai': 'bottle cap', 'thuoc': 'potion', 'da tien hoa': 'stone' };
  var VIK = Object.keys(VI).sort(function (a, b) { return b.length - a.length; });
  function terms(q) {
    var out = [], rest = ' ' + q + ' ';
    VIK.forEach(function (v) { var i = rest.indexOf(' ' + v + ' '); if (i >= 0) { out.push([' ' + v + ' '].concat(VI[v].split(' ').map(function (x) { return ' ' + x; }))); rest = rest.slice(0, i) + ' ' + rest.slice(i + v.length + 1); } });
    rest.split(' ').forEach(function (w) { if (w) { out.push([w]); } });
    return out;
  }
  function match(k, q) {
    if (!q) { return true; }
    var g = terms(q);  // từ trong từ điển: khớp đầu từ ("đá" không dính "adamant")
    for (var i = 0; i < g.length; i++) {
      var ok = false;
      for (var j = 0; j < g[i].length && !ok; j++) { ok = (' ' + k + ' ').indexOf(g[i][j]) >= 0; }
      if (!ok) { return false; }
    }
    return true;
  }

  function moreBtn(n) { return n > limit ? '<button type="button" class="pdx-more" data-more="1">' + S.more + ' (' + (n - limit) + ')</button>' : ''; }

  function draw() {
    var q = fold($q.value), html = '', list, all, miss = false;
    if (cur === 'mon') {
      all = D.rows.length;
      list = D.rows.filter(function (m) { return match(m.k, q); });
      if (/^\d+$/.test(q)) { list = D.rows.filter(function (m) { return String(m.d) === q; }); }
      if (!list.length) { miss = true; list = D.rows; }
      html = '<ul class="pdx-list">' + list.slice(0, limit).map(function (m) {
        return row((m.fb ? 'f:' : 'm:') + m.i, '#' + String(m.d).padStart(4, '0'), esc(m.n), m.t.map(tBadge).join(''), img(m.fb ? stem(m.fb, m.ff) : stem(m), 48, m.n));
      }).join('') + '</ul>' + moreBtn(list.length);
    } else if (cur === 'ab') {
      all = D.ab.length;
      list = D.ab.filter(function (a) { return match(a.k, q); });
      if (!list.length) { miss = true; list = D.ab; }
      html = '<ul class="pdx-list">' + list.slice(0, limit).map(function (a) {
        return row('a:' + a[0], '', esc(a[1]), esc((EN ? a[3] : (a[2] || a[3])).slice(0, 110)));
      }).join('') + '</ul>' + moreBtn(list.length);
    } else if (cur === 'it') {
      all = D.itKeys.length;
      list = D.itKeys.filter(function (x) { return match(x[1], q); });
      if (!list.length) { miss = true; list = D.itKeys; }
      html = '<ul class="pdx-list">' + list.slice(0, limit).map(function (x) {
        var it = D.it[x[0]], n = (D.dropBy[x[0]] || []).length;
        return row('i:' + x[0], '', esc(EN ? it.e : it.v), esc(((EN ? it.de : (it.dv || it.de)) || '').slice(0, 110)) + (n ? ' <span class="pdx-tag">' + esc(S.itemDrop(n)) + '</span>' : ''), itImg(x[0]));
      }).join('') + '</ul>' + moreBtn(list.length);
    } else if (cur === 'nat') {
      all = list = D.misc.nat.length;
      html = '<div class="table-wrapper"><table class="pdx-tbl pdx-nat"><thead><tr><th>' + S.natHead[0] + '</th><th>' + S.natHead[2] + '</th><th>' + S.natHead[3] + '</th></tr></thead><tbody>' +
        D.misc.nat.map(function (n) {
          var p = n[3] && n[3] !== n[4];
          return '<tr><td>' + esc(n[1]) + '</td><td>' + (p ? S.stats[n[3]] : '') + '</td><td>' + (p ? S.stats[n[4]] : '<span class="pdx-note">' + S.neutral + '</span>') + '</td></tr>';
        }).join('') + '</tbody></table></div>';
      $count.textContent = S.count(all, all);
      $out.innerHTML = html; return;
    } else if (cur === 'type') {
      $count.textContent = '';
      $out.innerHTML = typeView(); typeCalc(); return;
    } else if (cur === 'drop') {
      var dv = q ? dropView(q) : '';
      $count.textContent = !q ? S.dropHelp : dv ? '' : S.miss($q.value.trim());
      $out.innerHTML = dv || dropIndex(); return;
    }
    $count.textContent = miss ? S.miss($q.value.trim()) : S.count(list.length, all);
    $out.innerHTML = html;
    if (list.length === 1 && q && !miss) { var r1 = $out.querySelector('.pdx-row'); if (r1) { r1.click(); } }
  }

  function row(key, no, name, sub, pic) {
    return '<li class="pdx-item"><button type="button" class="pdx-row" aria-expanded="false" data-key="' + esc(key) + '">' + (no ? '<span class="pdx-no">' + no + '</span>' : '') + (pic || '') +
      '<span class="pdx-nm">' + name + (sub ? '<span class="pdx-sub">' + sub + '</span>' : '') + '</span></button></li>';
  }

  // ---------- chi tiết ----------
  function detail(key) {
    var t = key.slice(0, 1), id = key.slice(2);
    if (t === 'f') { var ix = id.lastIndexOf(':'); return Promise.all([load('ab'), load('it')]).then(function () { prep(); return formDetail(D.monById[id.slice(0, ix)], +id.slice(ix + 1)); }); }
    if (t === 'm') { return Promise.all([load('it'), load('ab'), load('sp')]).then(function () { prep(); return monDetail(D.monById[id]); }); }
    if (t === 'a') { return Promise.resolve(abDetail(D.abById[id])); }
    if (t === 'i') { return Promise.resolve(itDetail(id)); }
    return Promise.resolve('');
  }

  function statsHtml(s) {
    var tot = 0, h = '<div class="pdx-stats">';
    s.forEach(function (v, i) { tot += v; h += '<span>' + S.stats[i] + '</span><b>' + v + '</b><span class="pdx-bar" style="width:' + Math.min(100, v / 2.55) + '%"></span>'; });
    return h + '<span>' + S.total + '</span><b>' + tot + '</b><span></span></div>';
  }
  function abilHtml(a) {
    return a.map(function (x) { var h = x.indexOf('h:') === 0, id = h ? x.slice(2) : x; return link('ab', abName(id), abName(id)) + (h ? ' <span class="pdx-tag">' + S.hidden + '</span>' : ''); }).join(', ');
  }
  function dropsHtml(m) {
    if (!m.dr) { return ''; }
    var anyB = false;
    var h = '<h3>' + S.drops + '</h3><ul>' + m.dr.map(function (d) {
      if (d[3]) { anyB = true; }
      var txt = itImg(d[0]) + link('drop', itemName(d[0]), itemName(d[0])) + ' · ' + num(d[1]) + '%' + (d[2] ? ' · ' + S.qty + ' ' + esc(d[2]) : '');
      return '<li class="pdx-dl' + (d[3] ? ' pdx-blocked' : '') + '">' + txt + (d[3] ? ' <span class="pdx-tag pdx-tag--warn">' + S.blockedDrop + '</span>' : '') + '</li>';
    }).join('') + '</ul>';
    return h;
  }
  function biome(b) { if (!b) { return S.any; } return b.split(',').map(function (x) { return EN ? x.replace(/_/g, ' ') : (BIOME_VI[x] || x.replace(/_/g, ' ')); }).join(', '); }
  function extra(e) {
    if (!e) { return ''; }
    return e.split(' ').map(function (x) {
      if (x.indexOf('t:') === 0) { return S.ex.t[x.slice(2)] || x.slice(2); }
      if (x.indexOf('struct:') === 0) { return S.ex.struct + x.slice(7).replace(/_/g, ' '); }
      if (x.indexOf('lure') === 0) { return S.ex.lure + x.slice(4); }
      return S.ex[x] || x;
    }).join(', ');
  }
  function spawnHtml(m) {
    var h = '<h3>' + S.spawn + '</h3>';
    if (m.x === 'L') { h += '<p class="pdx-note">' + S.leg + ' <a href="' + S.legLink + '">→</a></p>'; }
    if (m.x === 'M') { return h + '<p class="pdx-note">' + S.myth + '</p>'; }
    var sp = D.sp && D.sp[m.i];
    if (!sp) { return h + '<p class="pdx-note">' + S.nospawn + '</p>'; }
    return h + '<ul>' + sp.map(function (s) {
      var parts = [S.bucket[s[0]] || s[0], S.lv + ' ' + s[1], S.pos[s[2]] || s[2], biome(s[3])];
      var ex = extra(s[4]); if (ex) { parts.push(ex); }
      if (s[5]) { parts.push(S.form + ' ' + s[5]); }
      return '<li>' + esc(parts.join(' · ')) + '</li>';
    }).join('') + '</ul>';
  }
  // Nhãn dạng của nhánh tiến hoá: "alolan" -> "dạng Alola", "punk_form=amped" -> "Amped".
  var ASP = { alolan: 'Alola', galarian: 'Galar', hisuian: 'Hisui', paldean: 'Paldea' };
  function aspName(a) {
    if (!a) { return ''; }
    if (ASP[a]) { return (EN ? 'Form ' : 'dạng ') + ASP[a]; }
    var v = a.split('=').pop().replace(/_/g, ' ');
    return v.charAt(0).toUpperCase() + v.slice(1);
  }
  function evoLine(e, name) {
    var how = e[EN ? 3 : 2];
    return '<li>' + name + (e[1] ? ' <span class="pdx-tag">' + esc(aspName(e[1])) + '</span>' : '') + (how ? ': ' + esc(how) : '') + '</li>';
  }
  function evoHtml(m) {
    var h = '';
    if (m.p) {
      h += '<p>' + S.from + ':</p><ul>' + m.p.map(function (p) {
        var pm = D.monById[p], es = ((pm && pm.e) || []).filter(function (e) { return e[0] === m.i && !ASP[e[1]]; });
        if (!es.length) { return '<li class="pdx-dl">' + monImg(p, 40) + link('mon', monName(p), monName(p)) + '</li>'; }
        return es.map(function (e) { return evoLine(e, monImg(p, 40) + link('mon', monName(p), monName(p))).replace('<li>', '<li class="pdx-ev">'); }).join('');
      }).join('') + '</ul>';
    }
    if (m.e) { h += '<p>' + S.to + ':</p><ul>' + m.e.map(function (e) { return evoLine(e, monImg(e[0], 40) + link('mon', monName(e[0]), monName(e[0]))).replace('<li>', '<li class="pdx-ev">'); }).join('') + '</ul>'; }
    return h ? '<h3>' + S.evo + '</h3>' + h : '';
  }
  // Cách ra một dạng: Mega/Primal = cầm đá; dạng vùng = nhánh tiến hoá có aspect tương ứng.
  function formHow(m, f) {
    if (f.mv) { return EN ? 'Knows ' + f.mv + ', then Mega Evolve in battle (Mega Bracelet).' : 'Biết chiêu ' + f.mv + ', bấm Mega trong trận (cần Vòng Mega).'; }
    if (f.ms) {
      var st = '<span class="pdx-dl" style="display:inline-flex">' + itImg(f.ms) + link('it', itemName(f.ms), itemName(f.ms)) + '</span>';
      if (f.n === 'Primal') { return (EN ? 'Hold ' : 'Cầm ') + st + (EN ? ': turns Primal at the start of battle.' : ': tự hoá Primal khi vào trận.'); }
      return (EN ? 'Hold ' : 'Cầm ') + st + (EN ? ', wear a Mega Bracelet, then Mega Evolve in battle.' : ', đeo Vòng Mega, bấm Mega trong trận.');
    }
    var asp = Object.keys(ASP).filter(function (k) { return ASP[k] === f.n; })[0];
    if (asp) {
      var out = [];
      (m.p || []).forEach(function (p) { var pm = D.monById[p]; ((pm && pm.e) || []).forEach(function (e) { if (e[0] === m.i && e[1] === asp) { out.push(evoLine(e, monImg(p, 40) + link('mon', monName(p), monName(p))).replace('<li>', '<li class="pdx-ev">')); } }); });
      if (out.length) { return '<p>' + S.from + ':</p><ul>' + out.join('') + '</ul>'; }
    }
    if (f.n === 'Gmax') { return EN ? 'Gigantamax in battle (needs Gigantamax Factor).' : 'Gigantamax trong trận (cần Gigantamax Factor).'; }
    return '';
  }
  function formsHtml(m) {
    if (!m.f) { return ''; }
    return '<h3>' + S.forms + '</h3><ul>' + m.f.map(function (f) {
      var bits = [];
      if (f.t) { bits.push(f.t.map(tBadge).join('')); }
      if (f.s) { bits.push(f.s.join('/') + ' (' + S.total + ' ' + f.s.reduce(function (a, b) { return a + b; }, 0) + ')'); }
      if (f.a) { bits.push(abilHtml(f.a)); }
      if (f.ms) { bits.push(itImg(f.ms) + ' ' + esc(itemName(f.ms))); }
      return '<li class="pdx-fl">' + img(stem(m, f), 48, m.n + ' ' + f.n) + '<span><b>' + esc(f.n) + '</b>' + (f.b ? ' <span class="pdx-tag">' + S.battle + '</span>' : '') + (bits.length ? ': ' + bits.join(' · ') : '') + '</span></li>';
    }).join('') + '</ul>';
  }
  function formName(m, f) {
    var n = f.n;
    if (/^Mega/.test(n)) { var r = n.slice(4).replace(/^-/, '').replace(/[-_]/g, ' '); return 'Mega ' + m.n + (r ? ' ' + r : ''); }
    if (/^Primal/.test(n)) { return 'Primal ' + m.n; }
    if (n === 'Gmax') { return m.n + ' Gigantamax'; }
    return m.n + ' ' + n.replace(/[-_]/g, ' ');
  }
  function formDetail(m, j) {
    var f = m.f[j];
    return '<div class="pdx-head">' + img(stem(m, f), 96, formName(m, f), 'pdx-img--big') + '<p>' + (f.b ? '<span class="pdx-tag">' + S.battle + '</span> ' : '') + S.formOf + ' ' + link('mon', m.n, m.n) + '</p></div>' +
      (function () { var h = formHow(m, f); return h ? '<h3>' + S.how + '</h3>' + (h.indexOf('<ul>') === 0 || h.indexOf('<p>') === 0 ? h : '<p>' + h + '</p>') : ''; })() +
      statsHtml(f.s || m.s) + '<h3>' + S.abil + '</h3><p>' + abilHtml(f.a || m.a) + '</p>';
  }
  function monDetail(m) {
    return '<div class="pdx-head">' + img(stem(m), 96, m.n, 'pdx-img--big') + (m.g ? '<p><span class="pdx-tag">' + S.gen + ' ' + esc(m.g) + '</span></p>' : '') + '</div>' + statsHtml(m.s) +
      '<h3>' + S.abil + '</h3><p>' + abilHtml(m.a) + '</p>' + evoHtml(m) + formsHtml(m) + dropsHtml(m) + spawnHtml(m);
  }
  function abDetail(a) {
    var d = EN ? a[3] : (a[2] || a[3]);
    return '<p>' + esc(d) + '</p>' + (!EN && a[2] && a[3] ? '<p class="pdx-note">' + esc(a[3]) + '</p>' : '') +
      '<h3>' + S.users + ' (' + a[4].length + ')</h3><p>' + (a[4].length ? a[4].map(function (u) { return link('mon', monName(u), monName(u)); }).join(', ') : S.none2) + '</p>';
  }
  function itDetail(id) {
    var it = D.it[id], d = EN ? it.de : (it.dv || it.de);
    var by = D.dropBy[id] || [];
    return (d ? '<p>' + esc(d) + '</p>' : '') + '<p class="pdx-note"><code>' + esc(id) + '</code></p>' +
      '<h3>' + S.droppedBy + ' (' + by.length + ')</h3>' + (by.length ? dropList(by) : '<p>' + S.noDrop + '</p>');
  }
  function dropList(by) {
    return '<ul>' + by.map(function (x) { var d = x[1]; return '<li class="pdx-dl' + (d[3] ? ' pdx-blocked' : '') + '">' + monImg(x[0], 40) + link('mon', monName(x[0]), monName(x[0])) + ' · ' + num(d[1]) + '%' + (d[2] ? ' · ' + S.qty + ' ' + esc(d[2]) : '') + '</li>'; }).join('') + '</ul>';
  }

  // ---------- Item rơi ----------
  function dropView(q) {
    var mons = D.mon.mons.filter(function (m) { return m.dr && match(m.k, q); }).slice(0, 12);
    var its = D.itKeys.filter(function (x) { return D.dropBy[x[0]] && match(x[1], q); }).slice(0, 12);
    var h = '';
    if (its.length) {
      h += '<h3>' + S.items + '</h3>' + its.map(function (x) {
        return '<div class="pdx-item" style="padding:.5rem .8rem;margin-bottom:.4rem"><div class="pdx-head">' + itImg(x[0]) + '<b>' + esc(itemName(x[0])) + '</b>' + (D.it[x[0]].b ? ' <span class="pdx-tag pdx-tag--warn">' + S.blockedDrop + '</span>' : '') + '</div><span class="pdx-note">' + S.droppedBy + ' (' + D.dropBy[x[0]].length + ')</span>' + dropList(D.dropBy[x[0]]) + '</div>';
      }).join('');
    }
    if (mons.length) {
      h += '<h3>' + S.mons + '</h3>' + mons.map(function (m) {
        return '<div class="pdx-item" style="padding:.5rem .8rem;margin-bottom:.4rem"><div class="pdx-head">' + img(stem(m), 48, m.n) + '<span><b>' + esc(m.n) + '</b> <span class="pdx-note">#' + m.d + '</span></span></div>' + dropsHtml(m).replace(/<h3>[^<]*<\/h3>/, '') + '</div>';
      }).join('');
    }
    return h;
  }
  // Ô trống / không thấy: lưới ảnh các loài có đồ rơi, bấm để xem.
  function dropIndex() {
    var ms = D.mon.mons.filter(function (m) { return m.dr && m.dr.length; });
    return '<ul class="pdx-grid">' + ms.slice(0, limit).map(function (m) {
      return '<li><button type="button" class="pdx-cell" data-go="drop" data-q="' + esc(m.n) + '">' + img(stem(m), 56, '') + '<span>' + esc(m.n) + '</span></button></li>';
    }).join('') + '</ul>' + moreBtn(ms.length);
  }

  // ---------- Hệ ----------
  function typeView() {
    var m = D.misc, n = m.types.length, opts = '<option value="">—</option>' + m.types.map(function (t, i) { return '<option value="' + i + '">' + esc(tName(i)) + '</option>'; }).join('');
    var h = '<p>' + S.typeHelp + '</p><div class="pdx-pick"><select id="pdx-t1" aria-label="' + S.types + ' 1">' + opts.replace('value="1"', 'value="1" selected') + '</select><select id="pdx-t2" aria-label="' + S.types + ' 2">' + opts + '</select></div><div id="pdx-tres"></div>';
    h += '<p class="pdx-note">' + S.def + ' / ' + S.atk + '</p><div class="pdx-chart-wrap"><table class="pdx-chart"><thead><tr><th class="pdx-r"></th>';
    for (var i = 0; i < n; i++) { h += '<th scope="col">' + esc(tName(i)) + '</th>'; }
    h += '</tr></thead><tbody>';
    for (var d = 0; d < n; d++) {
      h += '<tr><th scope="row" class="pdx-r">' + tBadge(d) + '</th>';
      for (var a = 0; a < n; a++) {
        var v = m.chart[a][d];
        h += v === 1 ? '<td></td>' : '<td class="' + (v === 2 ? 'pdx-x2' : v === 0 ? 'pdx-x0' : 'pdx-x05') + '">' + (v === 0.5 ? '½' : v) + '</td>';
      }
      h += '</tr>';
    }
    return h + '</tbody></table></div>';
  }
  function typeCalc() {
    var a = document.getElementById('pdx-t1'), b = document.getElementById('pdx-t2'), out = document.getElementById('pdx-tres');
    if (!a) { return; }
    var t1 = a.value === '' ? -1 : +a.value, t2 = b.value === '' ? -1 : +b.value, m = D.misc;
    if (t1 < 0 && t2 < 0) { out.innerHTML = ''; return; }
    var w = [], r = [], z = [];
    m.types.forEach(function (_, at) {
      var f = 1;
      [t1, t2].forEach(function (d, k) { if (d >= 0 && !(k === 1 && d === t1)) { f *= m.chart[at][d]; } });
      if (f === 0) { z.push(at); } else if (f > 1) { w.push([at, f]); } else if (f < 1) { r.push([at, f]); }
    });
    function lst(x) { return x.length ? x.map(function (p) { return tBadge(p[0]) + '<span class="pdx-note">×' + num(p[1]) + '</span> '; }).join('') : S.none2; }
    out.innerHTML = '<p><b>' + S.weak + ':</b> ' + lst(w) + '</p><p><b>' + S.resist + ':</b> ' + lst(r) + '</p><p><b>' + S.immune + ':</b> ' + (z.length ? z.map(tBadge).join('') : S.none2) + '</p>';
  }

  // ---------- sự kiện ----------
  var timer;
  $q.addEventListener('input', function () { clearTimeout(timer); timer = setTimeout(function () { limit = 60; setHash(); draw(); }, 120); });
  // ảnh lỗi -> ô trống cùng cỡ, không vỡ khung
  root.addEventListener('error', function (e) {
    var t = e.target;
    if (t.tagName !== 'IMG' || !t.classList.contains('pdx-img')) { return; }
    var s = document.createElement('span'); s.className = 'pdx-img pdx-img--none'; s.setAttribute('aria-hidden', 'true');
    s.style.width = t.width + 'px'; s.style.height = t.height + 'px'; t.replaceWith(s);
  }, true);
  root.addEventListener('change', function (e) { if (e.target.id === 'pdx-t1' || e.target.id === 'pdx-t2') { typeCalc(); } });
  root.addEventListener('click', function (e) {
    var t = e.target.closest('[data-tab],[data-go],[data-more],.pdx-row');
    if (!t) { return; }
    if (t.hasAttribute('data-tab')) { select(t.getAttribute('data-tab'), ''); return; }
    if (t.hasAttribute('data-go')) { select(t.getAttribute('data-go'), t.getAttribute('data-q')); root.scrollIntoView({ block: 'start' }); return; }
    if (t.hasAttribute('data-more')) { limit += 120; draw(); return; }
    var li = t.parentNode, open = t.getAttribute('aria-expanded') === 'true', body = li.querySelector('.pdx-body');
    if (open) { t.setAttribute('aria-expanded', 'false'); if (body) { body.hidden = true; } return; }
    t.setAttribute('aria-expanded', 'true');
    if (body) { body.hidden = false; return; }
    body = document.createElement('div'); body.className = 'pdx-body'; body.textContent = S.loading; li.appendChild(body);
    detail(t.getAttribute('data-key')).then(function (h) { body.innerHTML = h; }).catch(function () { body.textContent = S.fail; });
  });
  root.addEventListener('keydown', function (e) {
    if (!e.target.classList.contains('pdx-tab') || (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft')) { return; }
    var i = tabs.indexOf(e.target) + (e.key === 'ArrowRight' ? 1 : -1);
    var b = tabs[(i + tabs.length) % tabs.length]; b.focus(); select(b.getAttribute('data-tab'), '');
  });

  var h = decodeURIComponent((location.hash || '').slice(1)), p = h.indexOf('/');
  var tab0 = p < 0 ? h : h.slice(0, p), q0 = p < 0 ? '' : h.slice(p + 1);
  if (!tabs.some(function (b) { return b.getAttribute('data-tab') === tab0; })) { tab0 = 'mon'; q0 = ''; }
  select(tab0, q0, false);
})();
