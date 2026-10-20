(() => {
  'use strict';

  /* ---------------------------------------------------------------- data */
  const PROJECTS = [
    {
      no: '01', title: '진주도둑들', cat: '팀 프로젝트 · 기능 개발', period: '2026.03 — 2026.07',
      role: '클라이언트/UI 개발 담당 (4명 중 2명)',
      img: 'assets/project-pearl-thieves.webp',
      skills: ['Unity', 'C#', 'GitHub', 'Premiere'],
      hl: [
        '상점·유닛 프리셋·장착 시스템을 연동해, 구매한 유닛을 스테이지에서 바로 사용',
        '소환 버튼 하나에 쿨타임·비용·레벨·재화 부족·잠금 상태를 모두 표시',
        'ESC 입력 우선순위 정리, 스테이지 선택 카메라 연출을 코루틴으로 구현'
      ],
      outcomes: [
        '상점·유닛 프리셋·장착 시스템을 연동해 구매 후 스테이지에서 바로 사용할 수 있도록 구현',
        '소환 버튼 하나에 쿨타임·비용·레벨·재화 부족·잠금 상태를 모두 보여주도록 UI 설계',
        '도전과제 달성을 C# event로 알리고 소환 버튼이 구독해 잠금을 해제 (로직과 화면 분리)',
        '설정·튜토리얼·결과 팝업이 겹쳐도 ESC 입력이 꼬이지 않도록 우선순위 정리',
        '스테이지 선택 화면의 카메라 연출(줌아웃 → 이동 → 줌인)을 코루틴으로 구현',
        '성공·실패 결과창, 보스 체력바, 튜토리얼 팝업, 랭킹 결과 UI와 툴팁 제작',
        '장착 순서·스테이지 이동·카메라 연출 버그 수정'
      ],
      note: '팀 저장소는 비공개입니다.', links: []
    },
    {
      no: '02', title: 'Jump Impossible', cat: '팀 프로젝트 · 진행 중', period: '2026.08 — 현재',
      role: 'UI 연출·배치 및 시스템 UI 담당 (개발·기획 연결)',
      img: 'assets/project-jump-impossible.webp',
      skills: ['Unity', 'C#', 'GitHub', 'Aseprite'],
      hl: [
        '연출, 오브젝트 위치·크기·색을 조정하고 어울리는 이미지를 AI로 생성',
        '조작감과 연출을 다듬고, 필요한 구현은 개발자에게 요청하거나 직접 구현',
        '개발과 기획 사이에서 기능 간 의존관계와 리소스 제작 기준 정리'
      ],
      outcomes: [
        '연출, 오브젝트 위치·크기·색을 조정하고 어울리는 이미지를 AI로 생성',
        '조작감과 연출 다듬기',
        '개발자에게 필요한 구현을 요청하고, 직접 구현하기도 하며 개발과 기획 사이를 연결',
        '기능 간 의존관계 점검, 챕터별 배경·장애물·아이템·UI 리소스와 제작 기준 정리',
        '개발일지에 초기 프로토타입과 현재 게임의 화면 변화를 캡처로 기록'
      ],
      note: '팀 저장소는 비공개이고, 개발일지는 공개입니다.',
      links: [{ t: '개발일지 ↗', h: 'https://cho-minseo.github.io/JumpImpossible-devlog/' }]
    },
    {
      no: '03', title: '낙곱새 클리커', cat: '개인 프로젝트 · Unity 6', period: '2026.10',
      role: '기획·구현 1인 (쿠키 클리커 장르를 낙곱새 테마로 재해석한 연습 프로젝트)',
      img: 'assets/nk-04-nakgopsae.webp',
      skills: ['Unity 6', 'C#', 'URP', 'Input System'],
      hl: [
        '건물·업그레이드·밸런스를 ScriptableObject 데이터로 분리해 Inspector에서 수정',
        '게임 규칙이 이벤트를 쏘고 HUD·상점 View가 구독하는 구조',
        '가로/세로 화면에 따라 자동 전환되는 반응형 UI'
      ],
      outcomes: [
        '건물·업그레이드·밸런스를 ScriptableObject 데이터로 분리해 Inspector에서 수치 수정',
        '게임 규칙이 이벤트를 쏘고 View(HUD·상점)가 구독하는 구조',
        '가로/세로 화면에 따라 레이아웃이 자동 전환되는 반응형 UI',
        '오브젝트를 전부 씬/프리팹에 미리 배치하고, 에디터 메뉴로 씬을 생성해 저장',
        '3D 모델 클릭 연출과 1인칭 건물 구경하기 전환',
        '무료·상업 이용 가능한 폰트·에셋만 사용하고 출처 표기'
      ],
      note: '개발일지에 트러블슈팅(원인·해결)을 표로 정리했습니다. 대표 이미지는 교체 예정입니다.',
      links: [
        { t: 'GitHub ↗', h: 'https://github.com/cho-minseo/NakgobsaeClicker' },
        { t: '개발일지 ↗', h: 'https://cho-minseo.github.io/NakgobsaeClicker-devlog/' }
      ]
    },
    {
      no: '04', title: '메이플 키우기 QA 자동화', cat: '수업 팀 과제(3인) · QA 자동화', period: '2026.06',
      role: '자동화 테스트 코드 실행·수정과 결과 정리',
      scene: 'auto',
      skills: ['Python', 'OpenCV', 'PyAutoGUI', 'Tesseract OCR', 'openpyxl'],
      hl: [
        '고정 좌표 대신 이미지 매칭으로 버튼·결과를 찾아 클릭하고 성공·실패를 CSV·Excel로 기록',
        '팝업·재료 부족 같은 돌발 상황에 대응하는 예외 처리 구조 설계',
        'OCR이 게임 폰트를 못 읽는 한계를 확인하고 수동 입력 보정 방식으로 대안 설계'
      ],
      outcomes: [
        '고정 좌표 대신 이미지 매칭으로 버튼과 결과를 찾아 클릭하고 성공·실패를 CSV·Excel로 기록하는 자동화 구현',
        '팝업과 재료 부족 같은 돌발 상황에 대응하는 예외 처리 구조 설계',
        '선택 장비가 바뀌어 레벨 OCR이 오판하는 문제를 발견해 성공 기준을 재화 변화로 재정의',
        '게임 폰트 OCR 실패를 확인하고 수동 입력 보정 방식으로 대안 설계',
        '자동사냥 중 재화가 늘어 차감 검증에 오차가 생기는 원인 분석'
      ],
      note: '코드는 ChatGPT의 도움을 받아 작성·수정했습니다. 성공률 같은 통계 수치는 충분히 측정하지 않아 싣지 않았습니다.',
      links: []
    },
    {
      no: '05', title: 'Fragments Of Mind', cat: '팀 프로젝트(4인) · 2D 스토리 탈출', period: '2025.11 · 2학년',
      role: '조장 · 전체 게임 구조 · 스테이지 구현 전반',
      img: 'assets/title.webp',
      skills: ['Unity', 'C#'],
      hl: [
        '점프맵과 미로를 결합한 2D 게임(스테이지 4개)의 전체 구조 제작',
        'NPC 대화(E)·아이템 사용(스페이스)·아이템 유무에 따른 대사 분기 구현',
        '조장으로 일정을 조율하고 PBL 보고서 작성'
      ],
      outcomes: [
        '점프맵과 미로를 결합한 2D 스토리 탈출 게임(스테이지 4개)',
        '전체 게임 구조 제작과 스테이지 구현',
        'NPC 대화(E), 아이템 사용(스페이스), 아이템 유무에 따른 대사 분기 등 상호작용 구현',
        '조장으로 일정 조율, PBL 보고서 작성'
      ],
      note: '컷신 아트, 스토리·시놉시스, 맵 구조는 팀원이 제작했습니다.', links: []
    },
    {
      no: '06', title: 'Re제로부터 시작하는 노숙생활', cat: '팀 프로젝트(4인) · 게임 개발·데이터 분석', period: '2024.03 — 2024.07',
      role: '게임 개발, 로그 연동, UA 마케팅 실험·분석, GM 업무 체험',
      scene: 'rezero',
      skills: ['C', 'Google Sheets API', 'GitHub'],
      hl: [
        'C언어 기반 콘솔 미니게임을 개발·배포',
        '게임 로그를 Google Sheets API로 스프레드시트에 연동',
        'UA 광고 전후 DAU·MTS 변화를 분석하고, 리뷰·고객 문의를 직접 처리(GM)'
      ],
      outcomes: [
        'C언어 기반 미니게임 개발·배포',
        '게임 로그를 Google Sheets API로 스프레드시트에 연동',
        '초반 자금을 강조한 UA 광고를 시험하고 로그 데이터로 일 방문자 수(DAU)와 평균 플레이타임(MTS) 변화를 분석 (소규모 표본)',
        '리뷰와 고객 문의를 직접 처리하며 유저 피드백 확인 (GM 업무 체험)',
        '분석 결과를 바탕으로 초기 자금 상향 등 업데이트 방향 제안'
      ],
      note: '집을 강화하고 가구를 구매해 더 큰 빌딩으로 키우는 게임입니다. 로그 수집과 시트 연동은 팀원과 함께 진행했습니다.',
      links: [{ t: 'GitHub ↗', h: 'https://github.com/Diceking1208/Gamedata' }]
    }
  ];

  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const esc = (v) => String(v).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const TOTAL = String(PROJECTS.length).padStart(2, '0');

  /* ------------------------------------------------------------- scenes */
  const SCENES = {
    auto: `
      <div class="scene scene--auto" aria-hidden="true">
        <div class="win"><div class="win__bar"><i></i><i></i><i></i><span>red_diamond_summon_excel_test.py</span></div>
          <pre class="code" data-reveal>
<span class="cl"><span class="c"># 1. 화면에서 버튼 이미지(템플릿) 찾기</span></span><span class="cl">result = cv2.matchTemplate(screen, template, cv2.TM_CCOEFF_NORMED)</span><span class="cl">_, max_val, _, max_loc = cv2.minMaxLoc(result)</span><span class="cl"><span class="k">if</span> max_val &gt;= MATCH_THRESHOLD:</span><span class="cl">    pyautogui.click(found["x"], found["y"])</span><span class="cl"><span class="c"># 2. 소환 전/후 수치로 차감량 계산 후 기록</span></span><span class="cl">spent = before_value - after_value</span><span class="cl">save_result(round_no, before_value, after_value, spent, ...)</span></pre>
        </div>
        <div class="win"><div class="win__bar"><i></i><i></i><i></i><span>GAME WINDOW</span></div>
          <div class="gx">
            <span class="gx-hud">SUMMON</span>
            <div class="gx-dummy"></div><div class="gx-dummy b"></div>
            <div class="gx-btn">일괄 소환</div>
            <div class="gx-scan"></div><div class="gx-box"></div><div class="gx-tag">TEMPLATE FOUND</div>
            <div class="gx-cursor"></div><div class="gx-rip"></div>
          </div>
          <div class="gx-log"><p>[성공] 버튼 탐지 → 클릭</p><p>[OCR 실패] 수동 입력으로 보정</p><p>[기록] 차감량 계산 → CSV · Excel 저장</p></div>
        </div>
      </div>`,
    rezero: `
      <div class="scene scene--rz" aria-hidden="true">
        <div class="win"><div class="win__bar"><i></i><i></i><i></i><span>ReZero.exe</span></div>
          <pre class="cons" data-reveal>
<span class="cl"><span class="g">&gt;</span> ReZero.exe</span><span class="cl"><span class="g">[로그]</span> 플레이어ID · 날짜/시간 · 행동 · 소지금 · 단계</span><span class="cl"><span class="g">[연동]</span> 로그 → Google Sheets API → 스프레드시트</span><span class="cl"><span class="g">[UA]  </span> 초반 자금을 강조한 광고 시험</span><span class="cl"><span class="g">[분석]</span> 광고 전후 DAU · MTS 비교 <span class="d">(소규모 표본)</span></span><span class="cl"><span class="g">[GM]  </span> 리뷰 · 고객 문의 확인</span><span class="cl"><span class="g">[제안]</span> 초기 자금 상향 → 다음 업데이트<span class="cur"></span></span></pre>
        </div>
        <div class="city"><div class="bd"></div><div class="bd"></div><div class="bd"></div></div>
      </div>`
  };

  /* ------------------------------------------------------------- panels */
  const panelsEl = $('#panels');
  panelsEl.innerHTML = PROJECTS.map((p, i) => {
    const bg = p.img ? `<img class="panel__bg" src="${p.img}" alt="" loading="${i < 2 ? 'eager' : 'lazy'}">` : '';
    const scene = p.scene ? SCENES[p.scene] : '';
    return `
    <article class="panel ${p.img ? 'panel--img' : 'panel--scene'}" id="p-${p.no}" data-stage="${p.no}" aria-label="${esc(p.title)}">
      ${bg}
      <div class="panel__main">
        <div class="panel__top"><span>STAGE ${p.no} / ${TOTAL}</span><b>${esc(p.cat)}</b></div>
        <h3 class="panel__title">${esc(p.title)}</h3>
        <p class="panel__role">${esc(p.role)}</p>
        <p class="panel__period">${esc(p.period)}</p>
        <ul class="panel__hl">${p.hl.map((h) => `<li>${esc(h)}</li>`).join('')}</ul>
        <ul class="tags">${p.skills.map((s) => `<li>${esc(s)}</li>`).join('')}</ul>
        <div class="panel__actions"><button class="btn btn--solid" type="button" data-open="${i}" aria-haspopup="dialog">DETAIL +</button></div>
      </div>
      ${scene}
    </article>`;
  }).join('');

  /* loop-reveal lines inside scenes (code / console) */
  function loopReveal(el) {
    const lines = $$('.cl', el);
    if (reduced) { lines.forEach((l) => l.classList.add('on')); return; }
    let i = 0; let visible = false;
    new IntersectionObserver((en) => { visible = en[0].isIntersecting; }).observe(el);
    setInterval(() => {
      if (!visible) return;
      if (i < lines.length) { lines[i].classList.add('on'); i += 1; }
      else if (i < lines.length + 4) { i += 1; }
      else { lines.forEach((l) => l.classList.remove('on')); i = 0; }
    }, 650);
  }
  $$('[data-reveal]').forEach(loopReveal);

  /* ---------------------------------------------------------- drawer UI */
  const drawer = $('#drawer');
  const veil = $('#veil');
  let lastFocus = null;

  function openDrawer(i) {
    const p = PROJECTS[i];
    $('#d-cat').innerHTML = `<i class="ck" aria-hidden="true"></i> STAGE ${p.no} · ${esc(p.cat)}`;
    $('#d-title').textContent = p.title;
    $('#d-meta').textContent = p.period;
    $('#d-role').textContent = p.role;
    $('#d-list').innerHTML = p.outcomes.map((o) => `<li>${esc(o)}</li>`).join('');
    $('#d-skills').innerHTML = p.skills.map((s) => `<li>${esc(s)}</li>`).join('');
    $('#d-note').textContent = p.note || '';
    $('#d-links').innerHTML = (p.links || []).map((l) => `<a href="${esc(l.h)}" target="_blank" rel="noopener">${esc(l.t)}</a>`).join('');
    lastFocus = document.activeElement;
    veil.hidden = false;
    setTimeout(() => { veil.classList.add('on'); drawer.classList.add('open'); }, 24);
    drawer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    setTimeout(() => $('#d-close').focus(), 60);
  }
  function closeDrawer() {
    veil.classList.remove('on');
    drawer.classList.remove('open');
    drawer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    setTimeout(() => { veil.hidden = true; }, 280);
    if (lastFocus) lastFocus.focus();
  }
  panelsEl.addEventListener('click', (e) => {
    const b = e.target.closest('[data-open]');
    if (b) openDrawer(Number(b.dataset.open));
  });
  $('#d-close').addEventListener('click', closeDrawer);
  veil.addEventListener('click', closeDrawer);
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && drawer.classList.contains('open')) closeDrawer(); });

  /* ------------------------------------------------------- copy email */
  const copyBtn = $('#copy');
  copyBtn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText('miinseo.ch0@gmail.com');
      copyBtn.firstChild.textContent = 'COPIED ✓';
      setTimeout(() => { copyBtn.firstChild.textContent = 'COPY EMAIL'; }, 1800);
    } catch (err) { location.href = 'mailto:miinseo.ch0@gmail.com'; }
  });

  /* ----------------------------------------------------- scroll reveals */
  const rvObserver = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('in'); rvObserver.unobserve(en.target); } });
  }, { threshold: 0.12 });
  $$('.rv').forEach((el, i) => { el.style.transitionDelay = `${(i % 4) * 70}ms`; rvObserver.observe(el); });
  $$('.panel').forEach((el) => rvObserver.observe(el));

  /* ---------------------------------------- nav highlight + stage chip */
  const stageChip = $('#stage');
  const navLinks = $$('[data-nav]');
  const ratios = new Map();
  const setNav = (key) => navLinks.forEach((a) => a.classList.toggle('is-on', a.dataset.nav === key));
  const secObserver = new IntersectionObserver((entries) => {
    entries.forEach((en) => ratios.set(en.target, en.intersectionRatio));
    let best = null; let bestRatio = 0;
    ratios.forEach((r, el) => { if (r > bestRatio) { best = el; bestRatio = r; } });
    if (!best) return;
    const key = best.dataset.section;
    if (key === 'hero') { stageChip.textContent = 'START'; setNav(''); }
    else if (key === 'info') { stageChip.textContent = 'INFO'; setNav('info'); }
    else if (key === 'contact') { stageChip.textContent = 'CLEAR'; setNav('contact'); }
  }, { threshold: [0.2, 0.5, 0.8] });
  $$('[data-section]').forEach((s) => secObserver.observe(s));
  const panelObserver = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) { stageChip.textContent = `STAGE ${en.target.dataset.stage}/${TOTAL}`; setNav('work'); }
    });
  }, { threshold: 0.45 });
  $$('.panel').forEach((p) => panelObserver.observe(p));
  const liveObserver = new IntersectionObserver((entries) => {
    entries.forEach((en) => en.target.classList.toggle('live', en.isIntersecting));
  }, { rootMargin: '120px 0px' });
  $$('.panel').forEach((p) => liveObserver.observe(p));

  /* ------------------------------------------------ draggable collage */
  const collage = $('#collage');
  let zTop = 10;
  $$('.card', collage).forEach((card) => {
    let dx = 0; let dy = 0;
    card.addEventListener('pointerdown', (e) => {
      card.setPointerCapture(e.pointerId);
      const cr = card.getBoundingClientRect(); const wr = collage.getBoundingClientRect();
      card.style.left = `${cr.left - wr.left}px`; card.style.top = `${cr.top - wr.top}px`;
      dx = e.clientX - cr.left; dy = e.clientY - cr.top;
      card.style.zIndex = ++zTop; card.classList.add('drag');
    });
    card.addEventListener('pointermove', (e) => {
      if (!card.classList.contains('drag')) return;
      const wr = collage.getBoundingClientRect();
      const x = Math.min(Math.max(e.clientX - wr.left - dx, -20), wr.width - card.offsetWidth + 20);
      const y = Math.min(Math.max(e.clientY - wr.top - dy, -20), wr.height - card.offsetHeight + 20);
      card.style.left = `${x}px`; card.style.top = `${y}px`;
    });
    const end = () => card.classList.remove('drag');
    card.addEventListener('pointerup', end); card.addEventListener('pointercancel', end);
  });

  /* ---------------------- hero: UI flow diagram (상점 → 장착 → 스테이지 → 결과) */
  const svg = $('#flow');
  const NS = 'http://www.w3.org/2000/svg';
  const W = 170; const H = 120; const HEAD = 26;
  const NODES = [
    { id: 'TITLE', x: 10, y: 20 }, { id: 'SHOP', x: 235, y: 20 }, { id: 'EQUIP', x: 460, y: 20 },
    { id: 'STAGE', x: 460, y: 230 }, { id: 'RESULT', x: 235, y: 230 }
  ];
  const EDGES = [
    { d: 'M180 80 H228', a: '228,80 218,74 218,86', cap: '시작', cx: 192, cy: 68 },
    { d: 'M405 80 H453', a: '453,80 443,74 443,86', cap: '장착', cx: 417, cy: 68 },
    { d: 'M545 140 V223', a: '545,223 539,213 551,213', cap: '출전', cx: 556, cy: 186 },
    { d: 'M460 290 H412', a: '412,290 422,284 422,296', cap: '결과', cx: 420, cy: 278 },
    { d: 'M320 230 V147', a: '320,147 314,157 326,157', cap: '다시', cx: 330, cy: 192 }
  ];
  const EDGE_OF = { '0-1': 0, '1-2': 1, '2-3': 2, '3-4': 3, '4-1': 4 };
  const el = (name, attrs = {}, parent) => {
    const n = document.createElementNS(NS, name);
    Object.entries(attrs).forEach(([k, v]) => n.setAttribute(k, v));
    if (parent) parent.appendChild(n);
    return n;
  };
  function wire(g, kind, x, y) {
    const r = (rx, ry, w, h, solid) => el('rect', { x: x + rx, y: y + ry, width: w, height: h, class: `wf${solid ? ' solid' : ''}` }, g);
    if (kind === 'TITLE') { r(35, 38, 100, 16, true); r(55, 66, 60, 9); r(55, 82, 60, 9); r(55, 98, 60, 9); }
    if (kind === 'SHOP') { for (let i = 0; i < 3; i++) for (let j = 0; j < 2; j++) r(14 + i * 52, 38 + j * 36, 42, 28, i === 1 && j === 0); }
    if (kind === 'EQUIP') { for (let i = 0; i < 3; i++) r(14 + i * 52, 42, 42, 42, i === 1); r(14, 98, 142, 8); }
    if (kind === 'STAGE') { r(14, 104, 142, 3, true); r(26, 84, 54, 3, true); r(96, 66, 54, 3, true); r(44, 66, 14, 14, true); }
    if (kind === 'RESULT') { r(38, 40, 16, 16, true); r(77, 40, 16, 16, true); r(116, 40, 16, 16); r(50, 80, 70, 18); }
  }
  EDGES.forEach((e, i) => {
    const g = el('g', { class: 'fedge-g', 'data-e': i }, svg);
    el('path', { d: e.d, class: 'fedge' }, g);
    el('polygon', { points: e.a, class: 'fedge fedge--head', style: 'stroke-dasharray:none;fill:currentColor' }, g);
    const t = el('text', { x: e.cx, y: e.cy, class: 'fcap' }, g); t.textContent = e.cap;
  });
  const nodeEls = NODES.map((n) => {
    const g = el('g', { class: 'fnode' }, svg);
    el('rect', { x: n.x, y: n.y, width: W, height: H, class: 'body' }, g);
    el('rect', { x: n.x, y: n.y, width: W, height: HEAD, class: 'head' }, g);
    const t = el('text', { x: n.x + 12, y: n.y + 17 }, g); t.textContent = n.id;
    wire(g, n.id, n.x, n.y);
    return g;
  });
  const ripple = el('circle', { cx: 0, cy: 0, r: 16, class: 'fripple' }, svg);
  const cursor = el('g', { class: 'fcursor' }, svg);
  el('polygon', { points: '0,0 0,22 6,17 10,26 14,24 10,15 18,15' }, cursor);

  const centerOf = (n) => ({ x: n.x + 112, y: n.y + 78 });
  let step = 0; let prev = 0; let heroVisible = true;
  function go() {
    const cur = step === 0 ? 0 : ((step - 1) % 4) + 1;
    nodeEls.forEach((g, i) => g.classList.toggle('on', i === cur));
    const p = centerOf(NODES[cur]);
    cursor.style.transform = `translate(${p.x}px, ${p.y}px)`;
    $$('.fedge', svg).forEach((n) => n.classList.remove('on'));
    const idx = EDGE_OF[`${prev}-${cur}`];
    if (step > 0 && idx !== undefined) $$('.fedge', $$('.fedge-g', svg)[idx]).forEach((n) => n.classList.add('on'));
    setTimeout(() => {
      ripple.setAttribute('cx', p.x + 4); ripple.setAttribute('cy', p.y + 4);
      ripple.classList.remove('go'); void ripple.getBoundingClientRect(); ripple.classList.add('go');
    }, 700);
    prev = cur; step += 1;
  }
  const first = centerOf(NODES[0]);
  cursor.style.transform = `translate(${first.x}px, ${first.y}px)`;
  nodeEls[0].classList.add('on');
  if (!reduced) {
    new IntersectionObserver((en) => { heroVisible = en[0].isIntersecting; }).observe($('#hero'));
    setInterval(() => { if (heroVisible) go(); }, 1700);
  }
})();
