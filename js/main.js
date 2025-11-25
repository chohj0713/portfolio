(() => {
  const items = [
    { file: 'portfolio-1-planning-cx-research.png', title: '1) 기획 - 고객반응 분석 및 리서치' },
    { file: 'portfolio-2-planning-plan-draft.png', title: '2) 기획 - 기획안' },
    { file: 'portfolio-3-planning-user-scenarios.png', title: '3) 기획 - 유저 시나리오' },
    { file: 'portfolio-4-planning-feature-spec.png', title: '4) 기획 - 기능명세' },
    { file: 'portfolio-5-planning-analytics-tracking.png', title: '5) 기획 - 애널리틱스 세팅 및 추적 관리' },
    { file: 'portfolio-6-planning-user-flow.png', title: '6) 기획 - 유저 시나리오 분석 및 플로우' },
    { file: 'portfolio-7-planning-sprint-retro.png', title: '7) 기획 - 스프린트 회고' },
    { file: 'portfolio-8-content-sns-plan.png', title: '기타 - 콘텐츠 (SNS 콘텐츠 기획안)' },
    { file: 'portfolio-9-operations-policy.png', title: '기타 - 운영 (운영 정책 초안)' },
    { file: 'portfolio-10-operations-issues-schedule.png', title: '기타 - 운영 (이슈 및 일정 관리)' },
  ];

  const gallery = document.querySelector('.grid');
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');
  const modalTitle = document.getElementById('modal-title');
  const modalIndex = document.getElementById('modal-index');
  const modalCaption = document.getElementById('modal-caption');
  const modalClose = document.getElementById('modal-close');
  const about = document.getElementById('about');

  items.forEach((item, idx) => {
    const card = document.createElement('article');
    card.className = 'card';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', item.title);

    const img = document.createElement('img');
    img.src = 'images/' + encodeURI(item.file);
    img.alt = item.title;
    img.loading = 'lazy';

    const overlay = document.createElement('div');
    overlay.className = 'overlay';

    const title = document.createElement('h3');
    title.textContent = item.title;

    overlay.appendChild(title);
    card.appendChild(img);
    card.appendChild(overlay);
    card.addEventListener('click', () => openModal(item, idx));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModal(item, idx);
      }
    });
    gallery.appendChild(card);
  });

  function openModal(item, idx, captionText = '', indexLabel) {
    modalImg.src = 'images/' + encodeURI(item.file);
    modalImg.alt = item.title;
    modalTitle.textContent = item.title;
    const label = indexLabel ? indexLabel : `${idx + 1} / ${items.length}`;
    modalIndex.textContent = label;
    modalCaption.textContent = captionText;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
  modalClose.addEventListener('click', closeModal);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
  });

  if (about) {
    const aboutData = {
      file: 'screenshot_vibe_coding.png',
      title: 'AI 에이전트가 만든 페이지',
      caption:
        'OpenAI의 AI 에이전트인 Codex와 Github Page 기능을 활용하여 만들었습니다.\n이 페이지처럼 현재 운영하는 프로덕트도 간단하게 조작해볼 수 있는 프로토타입을 만들어 유저들에게 피드백을 받고 있습니다.',
    };
    const openAbout = () => openModal(aboutData, 0, aboutData.caption, 'INFO');
    about.addEventListener('click', openAbout);
    about.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openAbout();
      }
    });
  }
})();
