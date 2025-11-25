(() => {
  const items = [
    { file: '조홍준 포트폴리오 - 1) 기획 (고객반응 분석 및 리서치).png', title: '1) 기획 - 고객반응 분석 및 리서치' },
    { file: '조홍준 포트폴리오 - 2) 기획 (기획안)..png', title: '2) 기획 - 기획안' },
    { file: '조홍준 포트폴리오 - 3) 기획 (유저 시나리오).png', title: '3) 기획 - 유저 시나리오' },
    { file: '조홍준 포트폴리오 - 4) 기획 (기능명세).png', title: '4) 기획 - 기능명세' },
    { file: '조홍준 포트폴리오 - 5) 기획 (애널리틱스 세팅 및 추적 관리).png', title: '5) 기획 - 애널리틱스 세팅 및 추적 관리' },
    { file: '조홍준 포트폴리오 - 6) 기획 (유저 시나리오 분석 및 피드백).png', title: '6) 기획 - 유저 시나리오 분석 및 피드백' },
    { file: '조홍준 포트폴리오 - 7) 기획 (스프린트 회고).png', title: '7) 기획 - 스프린트 회고' },
    { file: '조홍준 포트폴리오 - 기타) 마케팅 (SNS 콘텐츠 기획안).png', title: '기타 - 마케팅 SNS 콘텐츠 기획안' },
    { file: '조홍준 포트폴리오 - 기타) 운영 (서비스 정책).png', title: '기타 - 운영 서비스 정책' },
    { file: '조홍준 포트폴리오 - 기타) 운영 (업무 및 일정 관리).png', title: '기타 - 운영 업무 및 일정 관리' },
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
      title: 'AI 에이전트로 만든 페이지',
      caption: 'OpenAI의 AI 에이전트인 Codex와 Github Page 기능을 활용하여 만들었습니다.',
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
