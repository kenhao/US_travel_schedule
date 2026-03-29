// ── PASSWORD PROTECTION ──
// SHA-256 hash
// echo -n "MY_PASSWORD" | shasum -a 256
const PASSWORD_HASH = '2612d391c1eb9a05beb967f1f2adaf215a544bd5e2d88d2a13c531e56af493a6';

async function hashInput(str) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(str));
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
}

function initPasswordProtection() {
  const inputs = document.querySelectorAll('.password-input');
  const errorMsg = document.getElementById('passwordError');
  const lock = document.getElementById('passwordLock');

  inputs.forEach((input, idx) => {
    input.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/[^0-9]/g, '');
      errorMsg.textContent = '';

      if (e.target.value && idx < inputs.length - 1) {
        inputs[idx + 1].focus();
      }

      if (idx === inputs.length - 1 && e.target.value) {
        checkPassword();
      }
    });

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Backspace' && !input.value && idx > 0) {
        inputs[idx - 1].focus();
      }
    });
  });

  async function checkPassword() {
    const password = Array.from(inputs).map(i => i.value).join('');
    const hash = await hashInput(password);
    if (hash === PASSWORD_HASH) {
      lock.classList.add('unlocked');
      setTimeout(() => { lock.style.display = 'none'; }, 500);
    } else {
      errorMsg.textContent = '密碼錯誤，請重試';
      inputs.forEach(i => i.value = '');
      inputs[0].focus();
    }
  }

  inputs[0].focus();
}

// 等待 DOM 載入完成
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPasswordProtection);
} else {
  initPasswordProtection();
}

// ── TAB SWITCHING ──
document.querySelectorAll('.nav-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    const tab = btn.dataset.tab;
    document.querySelectorAll('.nav-btn').forEach((b) => b.classList.remove('active'));
    document.querySelectorAll('.section').forEach((s) => s.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('tab-' + tab).classList.add('active');
    if (tab === 'overview') animateAllPlanes();
  });
});

// ── LIGHTBOX ──
function openLightbox(src, caption) {
  document.getElementById('lbImg').src = src;
  document.getElementById('lbCaption').textContent = caption || '';
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLightbox(); });

// ── LAZY IMAGE HELPER ──
function lazyImg(src, className, caption) {
  const img = document.createElement('img');
  img.className = className;
  img.alt = caption || '';
  img.onclick = () => openLightbox(src, caption);
  // Store src for deferred loading — images live inside display:none containers
  // and browser lazy loading won't trigger for them reliably.
  // onerror is intentionally NOT set here: Safari fires error on src-less imgs
  // connected to the DOM, which would permanently hide the element before we
  // ever get a chance to set the real src.
  img.dataset.lazySrc = src;
  return img;
}

// ── PLANE ANIMATION ──
function animatePlane(arcId, planeId, duration, delay) {
  const arc = document.getElementById(arcId);
  const plane = document.getElementById(planeId);
  if (!arc || !plane) return;

  arc.style.transition = 'none';
  arc.style.strokeDashoffset = '200';
  void arc.getBoundingClientRect();
  setTimeout(() => {
    arc.style.transition = `stroke-dashoffset ${duration}ms ease-in-out`;
    arc.style.strokeDashoffset = '0';
  }, delay);

  const paths = {
    arc1: [8, 32, 80, -8, 152, 32],
    arc2: [8, 28, 80, 4, 152, 28],
    arc3: [8, 32, 80, -8, 152, 32],
  };
  const pts = paths[arcId];
  if (!pts) return;
  const [x0, y0, cx, cy, x1, y1] = pts;
  const steps = 80;
  let step = 0;

  setTimeout(() => {
    const interval = setInterval(() => {
      const t = step / steps;
      const bx = (1 - t) * (1 - t) * x0 + 2 * (1 - t) * t * cx + t * t * x1;
      const by = (1 - t) * (1 - t) * y0 + 2 * (1 - t) * t * cy + t * t * y1;
      const dx = 2 * (1 - t) * (cx - x0) + 2 * t * (x1 - cx);
      const dy = 2 * (1 - t) * (cy - y0) + 2 * t * (y1 - cy);
      const angle = (Math.atan2(dy, dx) * 180) / Math.PI;
      plane.setAttribute('transform', `translate(${bx},${by}) rotate(${angle})`);
      step++;
      if (step > steps) clearInterval(interval);
    }, duration / steps);
  }, delay);
}

function animateAllPlanes() {
  animatePlane('arc1', 'plane1', 2500, 300);
  animatePlane('arc2', 'plane2', 2500, 600);
  animatePlane('arc3', 'plane3', 2500, 900);
}

window.addEventListener('load', () => setTimeout(animateAllPlanes, 500));

// ── YOSEMITE MAP ──
function buildYosMap(mapId, initDay) {
  const C1 = '#5ecb70', C2 = '#5bafd4';

  const svgBg = `
    <defs>
      <filter id="gl_${mapId}">
        <feGaussianBlur stdDeviation="2.5" result="b"/>
        <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
      <linearGradient id="valGrad_${mapId}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#0e1f10"/>
        <stop offset="40%" stop-color="#1b3020"/>
        <stop offset="100%" stop-color="#0e1f10"/>
      </linearGradient>
    </defs>
    <rect width="360" height="210" fill="url(#valGrad_${mapId})"/>
    <path d="M0,0 L0,58 Q15,48 30,52 Q50,56 65,45 Q80,34 95,42 Q115,50 130,40 Q150,30 165,38 Q182,46 200,36 Q218,26 235,34 Q255,42 270,32 Q290,20 310,28 Q330,36 350,28 L360,30 L360,0 Z" fill="#0c1a0e" opacity="0.95"/>
    <path d="M0,58 Q30,52 65,45 Q100,38 130,40 Q162,42 200,36 Q240,30 275,32 Q310,34 360,28" fill="none" stroke="#2a4a2e" stroke-width="1" opacity="0.6"/>
    <path d="M0,210 L0,172 Q20,168 40,174 Q60,180 80,170 Q100,160 120,166 Q140,172 160,164 Q180,156 200,162 Q220,168 240,158 Q260,148 280,155 Q300,162 320,155 Q340,148 360,154 L360,210 Z" fill="#0c1a0e" opacity="0.95"/>
    <rect x="0" y="58" width="360" height="114" fill="#1e3a22" opacity="0.5"/>
    <path d="M0,128 Q40,122 80,130 Q120,138 165,132 Q205,126 245,130 Q285,134 320,128 Q345,124 360,126" fill="none" stroke="#1a3d6a" stroke-width="5" opacity="0.55"/>
    <path d="M0,128 Q40,122 80,130 Q120,138 165,132 Q205,126 245,130 Q285,134 320,128 Q345,124 360,126" fill="none" stroke="#4a8fbd" stroke-width="2" opacity="0.5"/>
    <path d="M0,100 Q60,96 120,98 Q185,100 240,96 Q295,92 360,90" fill="none" stroke="#5a5a3a" stroke-width="2" stroke-dasharray="8,4" opacity="0.55"/>
    <path d="M0,158 Q60,162 120,160 Q185,158 240,162 Q295,166 360,162" fill="none" stroke="#5a5a3a" stroke-width="2" stroke-dasharray="8,4" opacity="0.55"/>
    <path d="M295,155 Q300,145 298,132 Q296,118 292,108" fill="none" stroke="#5a5a3a" stroke-width="1.5" stroke-dasharray="5,3" opacity="0.45"/>
    <path d="M292,108 Q298,90 302,72 Q308,54 312,40" fill="none" stroke="#3a5a3e" stroke-width="1.5" stroke-dasharray="4,3" opacity="0.35"/>
    <text x="340" y="198" fill="#3a6040" font-size="8" font-family="monospace" opacity="0.5">N↑</text>
    <text x="4" y="135" fill="#2a4a2e" font-size="5.5" font-family="monospace" opacity="0.6">W</text>
    <text x="350" y="135" fill="#2a4a2e" font-size="5.5" font-family="monospace" opacity="0.6">E</text>
  `;

  const day1 = `
    <g id="yD1_${mapId}">
      <path id="yT1_${mapId}" d="M185,88 Q184,110 183,128 Q183,140 183,148 Q155,148 135,148 Q122,148 115,148 Q95,155 80,160 Q68,165 62,166 Q45,162 34,148 Q26,130 28,116 Q28,108 28,100"
        fill="none" stroke="${C1}" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" opacity="0" filter="url(#gl_${mapId})"/>
      <g id="yS1_1_${mapId}" opacity="0">
        <circle cx="185" cy="88" r="6" fill="${C1}" opacity="0.85" filter="url(#gl_${mapId})"/><circle cx="185" cy="88" r="3" fill="white"/>
        <rect x="152" y="74" width="68" height="12" rx="2" fill="#0e1f10" opacity="0.75"/>
        <text x="186" y="83" fill="${C1}" font-size="6.5" font-family="monospace" text-anchor="middle">① Falls Trail</text>
      </g>
      <g id="yS1_2_${mapId}" opacity="0">
        <circle cx="183" cy="148" r="6" fill="${C1}" opacity="0.85" filter="url(#gl_${mapId})"/><circle cx="183" cy="148" r="3" fill="white"/>
        <rect x="148" y="154" width="70" height="12" rx="2" fill="#0e1f10" opacity="0.75"/>
        <text x="183" y="163" fill="${C1}" font-size="6.5" font-family="monospace" text-anchor="middle">② Valley Chapel</text>
      </g>
      <g id="yS1_3_${mapId}" opacity="0">
        <circle cx="115" cy="148" r="6" fill="${C1}" opacity="0.85" filter="url(#gl_${mapId})"/><circle cx="115" cy="148" r="3" fill="white"/>
        <rect x="72" y="154" width="88" height="12" rx="2" fill="#0e1f10" opacity="0.75"/>
        <text x="116" y="163" fill="${C1}" font-size="6.5" font-family="monospace" text-anchor="middle">③ El Cap Picnic</text>
      </g>
      <g id="yS1_4_${mapId}" opacity="0">
        <circle cx="62" cy="166" r="6" fill="${C1}" opacity="0.85" filter="url(#gl_${mapId})"/><circle cx="62" cy="166" r="3" fill="white"/>
        <rect x="24" y="154" width="75" height="12" rx="2" fill="#0e1f10" opacity="0.75"/>
        <text x="62" y="163" fill="${C1}" font-size="6.5" font-family="monospace" text-anchor="middle">④ Bridalveil Fall</text>
      </g>
      <g id="yS1_5_${mapId}" opacity="0">
        <circle cx="28" cy="100" r="6" fill="${C1}" opacity="0.85" filter="url(#gl_${mapId})"/><circle cx="28" cy="100" r="3" fill="white"/>
        <rect x="10" y="86" width="82" height="12" rx="2" fill="#0e1f10" opacity="0.75"/>
        <text x="51" y="95" fill="${C1}" font-size="6.5" font-family="monospace" text-anchor="middle">⑤ Tunnel View 🌅</text>
      </g>
    </g>`;

  const day2 = `
    <g id="yD2_${mapId}" style="display:none">
      <path id="yT2_${mapId}" d="M292,148 Q294,128 296,112 Q298,96 300,92 Q304,70 308,56 Q310,48 310,42 M248,110 Q260,128 275,140 Q284,146 292,148 M218,148 Q235,148 255,148 Q272,148 280,148 Q285,148 292,148 M292,148 Q305,138 312,126 Q318,118 318,110"
        fill="none" stroke="${C2}" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" opacity="0" filter="url(#gl_${mapId})"/>
      <g id="yS2_1_${mapId}" opacity="0">
        <circle cx="248" cy="110" r="6" fill="${C2}" opacity="0.85" filter="url(#gl_${mapId})"/><circle cx="248" cy="110" r="3" fill="white"/>
        <rect x="208" y="96" width="80" height="12" rx="2" fill="#0e1f10" opacity="0.75"/>
        <text x="248" y="105" fill="${C2}" font-size="6.5" font-family="monospace" text-anchor="middle">① Curry Village 🍕</text>
      </g>
      <g id="yS2_2_${mapId}" opacity="0">
        <circle cx="292" cy="148" r="6" fill="${C2}" opacity="0.85" filter="url(#gl_${mapId})"/><circle cx="292" cy="148" r="3" fill="white"/>
        <rect x="255" y="154" width="74" height="12" rx="2" fill="#0e1f10" opacity="0.75"/>
        <text x="292" y="163" fill="${C2}" font-size="6.5" font-family="monospace" text-anchor="middle">② Happy Isles 🚌</text>
      </g>
      <g id="yS2_3_${mapId}" opacity="0">
        <circle cx="300" cy="92" r="6" fill="${C2}" opacity="0.85" filter="url(#gl_${mapId})"/><circle cx="300" cy="92" r="3" fill="white"/>
        <rect x="258" y="78" width="82" height="12" rx="2" fill="#0e1f10" opacity="0.75"/>
        <text x="299" y="87" fill="${C2}" font-size="6.5" font-family="monospace" text-anchor="middle">③ Vernal Fall 💦</text>
      </g>
      <g id="yS2_4_${mapId}" opacity="0">
        <circle cx="310" cy="42" r="6" fill="${C2}" opacity="0.85" filter="url(#gl_${mapId})"/><circle cx="310" cy="42" r="3" fill="white"/>
        <rect x="268" y="28" width="82" height="12" rx="2" fill="#0e1f10" opacity="0.75"/>
        <text x="309" y="37" fill="${C2}" font-size="6.5" font-family="monospace" text-anchor="middle">④ Nevada Fall 💦</text>
      </g>
      <g id="yS2_5_${mapId}" opacity="0">
        <circle cx="218" cy="148" r="6" fill="${C2}" opacity="0.85" filter="url(#gl_${mapId})"/><circle cx="218" cy="148" r="3" fill="white"/>
        <rect x="174" y="154" width="90" height="12" rx="2" fill="#0e1f10" opacity="0.75"/>
        <text x="219" y="163" fill="${C2}" font-size="6.5" font-family="monospace" text-anchor="middle">⑤ Stoneman Meadow</text>
      </g>
      <g id="yS2_6_${mapId}" opacity="0">
        <circle cx="318" cy="110" r="6" fill="${C2}" opacity="0.85" filter="url(#gl_${mapId})"/><circle cx="318" cy="110" r="3" fill="white"/>
        <rect x="278" y="96" width="78" height="12" rx="2" fill="#0e1f10" opacity="0.75"/>
        <text x="317" y="105" fill="${C2}" font-size="6.5" font-family="monospace" text-anchor="middle">⑥ Mirror Lake 🪞</text>
      </g>
    </g>`;

  return `
  <div class="yos-wrap" id="yosWrap_${mapId}">
    <div class="yos-header">
      <span class="yos-title">🗺 Yosemite Valley</span>
      <div class="yos-tabs">
        <button class="yos-tab ${initDay === 1 ? 'active' : ''}" onclick="yosSwitch('${mapId}',1,this)">Day 5</button>
        <button class="yos-tab ${initDay === 2 ? 'active' : ''}" onclick="yosSwitch('${mapId}',2,this)">Day 6</button>
      </div>
    </div>
    <div class="yos-svg-wrap">
      <svg viewBox="0 0 360 210" xmlns="http://www.w3.org/2000/svg">
        ${svgBg}${day1}${day2}
      </svg>
    </div>
    <div class="yos-legend">
      <div class="yos-leg"><div class="yos-leg-dot" style="background:${C1}"></div>Day 5 · Valley Loop</div>
      <div class="yos-leg"><div class="yos-leg-dot" style="background:${C2}"></div>Day 6 · Mist Trail</div>
      <div class="yos-leg" style="color:#3a6040">- - - roads / trails</div>
    </div>
  </div>`;
}

function yosAnimate(mapId, dayNum) {
  const trailEl = document.getElementById('yT' + dayNum + '_' + mapId);
  if (!trailEl) return;
  const len = trailEl.getTotalLength ? trailEl.getTotalLength() : 900;
  trailEl.style.transition = 'none';
  trailEl.style.strokeDasharray = len;
  trailEl.style.strokeDashoffset = len;
  trailEl.style.opacity = '0.85';
  void trailEl.getBoundingClientRect();
  trailEl.style.transition = 'stroke-dashoffset 3s ease-in-out';
  trailEl.style.strokeDashoffset = '0';
  const spotCount = dayNum === 1 ? 5 : 6;
  for (let i = 1; i <= spotCount; i++) {
    const sp = document.getElementById('yS' + dayNum + '_' + i + '_' + mapId);
    if (!sp) continue;
    sp.style.transition = 'none';
    sp.style.opacity = '0';
    sp.style.transform = 'scale(0)';
    void sp.getBoundingClientRect();
    setTimeout(() => {
      sp.style.transition = 'opacity 0.3s ease, transform 0.4s cubic-bezier(0.34,1.56,0.64,1)';
      sp.style.opacity = '1';
      sp.style.transform = 'scale(1)';
    }, 800 + i * 400);
  }
}

function yosSwitch(mapId, dayNum, btn) {
  const wrap = document.getElementById('yosWrap_' + mapId);
  wrap.querySelectorAll('.yos-tab').forEach((b) => b.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('yD1_' + mapId).style.display = dayNum === 1 ? 'block' : 'none';
  document.getElementById('yD2_' + mapId).style.display = dayNum === 2 ? 'block' : 'none';
  yosAnimate(mapId, dayNum);
}

// ── BUILD DAY CARDS ──
const dayList = document.getElementById('dayList');
days.forEach((day, idx) => {
  const card = document.createElement('div');
  card.className = 'day-card';
  const mapId = 'map_' + idx;

  // Build inner HTML
  let body = '';
  if (day.yosDay) body += buildYosMap(mapId, day.yosDay);
  body += '<div class="tl">';

  day.tl.forEach((item) => {
    const dotCls = item.dot === 'sky' ? 'sky' : item.dot === 'gray' ? 'gray' : '';
    body += `<div class="tl-item">
      <div class="tl-time">${item.t || ''}</div>
      <div class="tl-dot ${dotCls}"></div>
      <div class="tl-con"><div class="tl-name">${item.n}</div>`;

    if (item.d) body += `<div class="tl-detail">${item.d}</div>`;

    if (item.tag) {
      const tc = item.tag === '餐飲' ? 'food' : item.tag === '住宿' ? 'stay' : '';
      body += `<span class="tl-tag ${tc}">${item.tag}</span>`;
    }

    const links = [];
    if (item.mapUrl) links.push(`<a class="lnk lnk-map" href="${item.mapUrl}" target="_blank">📍 Maps</a>`);
    if (item.webUrl) links.push(`<a class="lnk lnk-web" href="${item.webUrl}" target="_blank">🔗 Website</a>`);
    if (links.length) body += `<div class="link-row">${links.join('')}</div>`;

    if (item.food) {
      body += `<div class="food-opts">`;
      item.food.forEach((f) => {
        if (f.mapUrl) body += `<a class="food-opt" href="${f.mapUrl}" target="_blank">${f.label} 📍</a>`;
        else body += `<span class="food-opt">${f.label || f}</span>`;
      });
      body += `</div>`;
    }

    if (item.places) {
      body += `<div class="places"><div class="places-lbl">📍 Spots</div><div class="chips">`;
      item.places.forEach((p) => {
        if (p.mapUrl) body += `<a class="chip" href="${p.mapUrl}" target="_blank">${p.label}</a>`;
        else body += `<span class="chip">${p.label || p}</span>`;
      });
      body += `</div></div>`;
    }

    // Image placeholders — replaced with real DOM nodes below
    if (item.img) {
      body += `<div class="spot-img-slot" data-src="${item.img.url}" data-cap="${item.img.caption}"></div>`;
    }
    if (item.imgs) {
      body += `<div class="spot-imgs">`;
      item.imgs.forEach((im) => {
        body += `<div class="spot-img-slot" data-src="${im.url}" data-cap="${im.cap}"></div>`;
      });
      body += `</div>`;
    }

    body += `</div></div>`;
  });
  body += '</div>';

  card.innerHTML = `
    <div class="day-header">
      <div class="day-date-box"><div class="dm">APR</div><div class="dn">${day.num}</div></div>
      <div class="day-info">
        <div class="day-title">${day.sub}</div>
        <div class="day-sub">${day.desc}</div>
      </div>
      <div class="day-chev">▶</div>
    </div>
    <div class="day-body">
      ${day.cover ? `<div class="day-cover-slot" data-src="${day.cover.url}" data-cap="${day.cover.caption}"></div>` : ''}
      ${body}
    </div>`;

  // Replace cover slot
  const coverSlot = card.querySelector('.day-cover-slot');
  if (coverSlot) {
    const src = coverSlot.dataset.src, cap = coverSlot.dataset.cap;
    const img = lazyImg(src, 'day-cover', cap);
    const wrap = document.createElement('div');
    wrap.className = 'day-cover-wrap';
    const label = document.createElement('div');
    label.className = 'day-cover-label';
    label.textContent = cap;
    wrap.appendChild(img);
    wrap.appendChild(label);
    coverSlot.replaceWith(wrap);
  }

  // Replace all spot-img-slots with real img elements
  card.querySelectorAll('.spot-img-slot').forEach((slot) => {
    const src = slot.dataset.src, cap = slot.dataset.cap;
    slot.replaceWith(lazyImg(src, 'spot-img', cap));
  });

  card.querySelector('.day-header').addEventListener('click', () => {
    const wasOpen = card.classList.contains('open');
    card.classList.toggle('open');
    if (!wasOpen) {
      // Load deferred images now that the card is visible.
      // Set onerror + onload here, just before assigning src, so Safari's
      // premature error-on-no-src behaviour never fires on these elements.
      card.querySelectorAll('img[data-lazy-src]').forEach((img) => {
        img.onload = () => img.classList.add('loaded');
        img.onerror = () => { img.style.display = 'none'; };
        img.src = img.dataset.lazySrc;
        img.removeAttribute('data-lazy-src');
      });
      if (day.yosDay) setTimeout(() => yosAnimate(mapId, day.yosDay), 120);
    }
  });

  dayList.appendChild(card);
});
