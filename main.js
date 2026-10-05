document.addEventListener('DOMContentLoaded', () => {

  /* =========================================================
     스크롤 시 헤더 배경 제어
  ========================================================== */

  const header = document.querySelector('header');

  window.addEventListener('scroll', () => {

    if (window.scrollY > 40) {

      header.style.background = 'rgba(13, 14, 18, 0.95)';
      header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.4)';

    } else {

      header.style.background = 'rgba(13, 14, 18, 0.7)';
      header.style.boxShadow = 'none';

    }

  });



  /* =========================================================
     제품 카드 등장 애니메이션
  ========================================================== */

  const cards = document.querySelectorAll('.product-card');

  const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';

      }

    });

  }, {
    threshold: 0.1
  });


  cards.forEach(card => {

    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';

    card.style.transition =
      'opacity 0.6s ease, transform 0.6s ease';

    observer.observe(card);

  });



  /* =========================================================
     봇별 설정
  ========================================================== */

    // maintenance: 1이면 점검 안내, 0이면 동의 화면. uptime은 정상 운영 시 표시값입니다.
  const botConfigs = {

    /* =======================================================
       HYPER Canvas
    ======================================================== */

    canvas: {

      name: 'HYPER Canvas',
      maintenance: 1,
      uptime: '100%',

      inviteUrl:
        'https://discord.com/oauth2/authorize?client_id=1550495194011668500&permissions=8&integration_type=0&scope=bot+applications.commands',

      summary: [

        {
          icon: 'fa-shield-halved',
          text: '서비스 이용약관 및 콘텐츠 운영정책을 준수합니다.'
        },

        {
          icon: 'fa-trash-can',
          text: '생성 프롬프트는 서비스 처리에 필요한 동안만 일시적으로 처리되며, 운영자가 별도 저장하지 않습니다.'
        },

        {
          icon: 'fa-server',
          text: '이미지 생성 과정에서 외부 AI 서비스로 프롬프트가 전달될 수 있습니다.'
        },

        {
          icon: 'fa-scale-balanced',
          text: '대한민국의 적용 가능한 법령 및 Discord 정책을 준수해야 합니다.'
        }

      ],


      legalDocuments: {

        terms: {

          title: '📜 HYPER Canvas 이용약관',

          html: `

            <p>
              <strong>시행일: 2026년 9월 19일</strong>
            </p>

            <h3>제1조 (목적)</h3>

            <p>
              본 약관은 HYPER Works가 운영하는 Discord 봇
              HYPER Canvas의 이용조건과 운영자 및 이용자의
              권리·의무를 정합니다.
            </p>

            <h3>제2조 (운영자)</h3>

            <p>
              <strong>운영팀:</strong> HYPER Works<br>
              <strong>운영자:</strong> ukiki87<br>
              <strong>문의:</strong>
              <a href="mailto:ukiki8787@gmail.com">
                ukiki8787@gmail.com
              </a><br>
              <strong>공식 Discord:</strong>
              <a
                href="https://discord.gg/FMpjCAHy5F"
                target="_blank"
                rel="noopener noreferrer"
              >
                공식 Discord 서버
              </a>
            </p>

            <h3>제3조 (서비스)</h3>

            <p>
              HYPER Canvas는 Discord에서 AI 이미지 생성 및
              관련 기능을 제공하는 서비스입니다.
              프롬프트 처리, 이미지 생성, 쿨타임 및 이용 제한,
              콘텐츠 검토 등의 기능이 제공될 수 있습니다.
            </p>

            <h3>제4조 (이용자의 의무)</h3>

            <p>
              이용자는 대한민국의 적용 가능한 법령,
              Discord 이용약관 및 커뮤니티 가이드라인,
              본 약관과 콘텐츠 운영정책을 준수해야 합니다.
            </p>

            <h3>제5조 (적용 법령)</h3>

            <p>
              서비스에는 서비스의 성격과 이용 형태에 따라
              대한민국의 관계 법령이 적용될 수 있습니다.
              법령과 본 약관이 충돌하는 경우 해당 법령이 우선합니다.
            </p>

            <h3>제6조 (금지행위)</h3>

            <p>
              불법 콘텐츠, 아동·청소년 성착취 콘텐츠,
              동의 없는 성적 딥페이크, 개인정보 침해,
              명예훼손·사칭, 타인의 저작권·상표권·초상권 침해,
              범죄·테러 조장, 악성코드 및 서비스 공격,
              시스템 제한 우회, 비정상적 대량 요청 등은 금지됩니다.
            </p>

            <h3>제7조 (AI 생성물)</h3>

            <p>
              AI 생성 결과는 항상 정확하거나 이용자의 의도와
              일치한다고 보장되지 않습니다.
              이용자는 생성물을 사용하기 전에 필요한 권리와
              적법성을 확인해야 합니다.
            </p>

            <h3>제8조 (프롬프트 및 관리자 페이지)</h3>

            <p>
              프롬프트는 이미지 생성 및 서비스 처리에 필요한 동안
              일시적으로 처리됩니다.
              <strong>
                운영자는 관리자 페이지에 표시된 생성 프롬프트를
                별도로 저장·보관하지 않습니다.
              </strong>
            </p>

            <h3>제9조 (외부 서비스)</h3>

            <p>
              이미지 생성 및 기타 기능을 위해 외부 AI·번역·호스팅
              서비스 등이 사용될 수 있으며,
              기능 제공에 필요한 프롬프트가 외부 서비스로
              전송될 수 있습니다.
            </p>

            <h3>제10조 (이용 제한 및 중단)</h3>

            <p>
              약관·정책 위반, 법령 위반, 서비스 악용,
              보안 문제 또는 운영상 필요한 경우 서비스 이용이
              제한되거나 중단될 수 있습니다.
            </p>

            <h3>제11조 (면책)</h3>

            <p>
              AI 결과의 오류, 외부 서비스 장애 등 운영자가
              합리적으로 통제하기 어려운 사유에 대해서는
              관련 법령이 허용하는 범위에서 책임을 부담합니다.
            </p>

            <h3>제12조 (문의)</h3>

            <p>
              HYPER Works 공식 Discord 또는
              <a href="mailto:ukiki8787@gmail.com">
                ukiki8787@gmail.com
              </a>
              으로 문의할 수 있습니다.
            </p>

            <h3>제13조 (변경 및 준거법)</h3>

            <p>
              운영자는 필요한 경우 약관을 변경할 수 있으며
              중요한 변경은 확인 가능한 방법으로 안내합니다.
              서비스 이용과 관련된 사항에는 대한민국 법령을 적용합니다.
            </p>

          `

        },


        privacy: {

          title: '🔒 HYPER Canvas 개인정보처리방침',

          html: `

            <p>
              <strong>시행일: 2026년 9월 19일</strong>
            </p>

            <h3>1. 운영자</h3>

            <p>
              <strong>HYPER Works / ukiki87</strong><br>
              문의:
              <a href="mailto:ukiki8787@gmail.com">
                ukiki8787@gmail.com
              </a><br>
              공식 Discord:
              <a
                href="https://discord.gg/FMpjCAHy5F"
                target="_blank"
                rel="noopener noreferrer"
              >
                공식 Discord 서버
              </a>
            </p>

            <h3>2. 처리될 수 있는 정보</h3>

            <p>
              Discord 사용자·서버·채널 식별정보,
              명령어 및 서비스 이용에 필요한 정보,
              이미지 생성 프롬프트, 생성 요청 상태,
              쿨타임·이용 제한 정보,
              오류 및 장애 대응에 필요한 정보 등이
              서비스 과정에서 일시적으로 처리될 수 있습니다.
            </p>

            <h3>3. 처리 목적</h3>

            <p>
              AI 이미지 생성, 요청 처리, 쿨타임 및 이용 제한,
              보안·악용 방지, 오류·장애 대응 및
              서비스 안정성 유지를 위해 처리합니다.
            </p>

            <h3>4. 프롬프트 저장 및 삭제</h3>

            <p>
              <strong>
                운영자는 생성 프롬프트를 장기간 보관하기 위한
                별도의 데이터베이스를 운영하지 않습니다.
              </strong>
              프롬프트는 서비스 처리에 필요한 동안
              일시적으로 처리됩니다.
            </p>

            <h3>5. 관리자 페이지</h3>

            <p>
              관리자 페이지에 프롬프트가 일시적으로 표시될 수 있으나
              운영자는 해당 프롬프트를 별도로 저장하거나
              장기간 보관하지 않습니다.
            </p>

            <h3>6. 외부 서비스</h3>

            <p>
              AI 이미지 생성 등 기능을 위해 외부 서비스로
              프롬프트가 전송될 수 있습니다.
              외부 서비스의 자체적인 보관·처리는 해당 서비스의
              개인정보처리방침 및 이용약관에 따릅니다.
            </p>

            <h3>7. 법령</h3>

            <p>
              개인정보 처리에는 대한민국의 적용 가능한
              개인정보 보호 관련 법령이 적용될 수 있습니다.
            </p>

            <h3>8. 이용자 주의사항</h3>

            <p>
              주민등록번호, 비밀번호, 인증번호, API 키,
              금융정보, 주소, 전화번호 등 불필요하거나
              민감한 개인정보를 프롬프트에 입력하지 마세요.
            </p>

            <h3>9. 문의</h3>

            <p>
              개인정보 처리 관련 문의:
              <a href="mailto:ukiki8787@gmail.com">
                ukiki8787@gmail.com
              </a>
              또는 HYPER Works 공식 Discord
            </p>

          `

        },


        policy: {

          title: '🛡️ HYPER Canvas 콘텐츠 운영정책',

          html: `

            <p>
              <strong>시행일: 2026년 9월 19일</strong>
            </p>

            <h3>금지·제한 콘텐츠</h3>

            <p>
              아동·청소년 성착취 콘텐츠,
              실제 인물의 동의 없는 성적 이미지·딥페이크,
              개인정보 노출 목적 콘텐츠,
              사칭·명예훼손 목적 콘텐츠,
              범죄·테러 조장,
              악성코드·사이버 공격 목적 콘텐츠,
              타인의 권리를 침해하는 콘텐츠 및
              대한민국 법령이나 외부 AI 서비스 정책에
              위반되는 콘텐츠는 제한 또는 거부될 수 있습니다.
            </p>

            <h3>저작권</h3>

            <p>
              이용자는 입력 자료를 적법하게 이용할 권한이 있어야 하며,
              타인의 저작물·상표·사진 등을 권리자의 허락 없이
              이용하여 권리를 침해해서는 안 됩니다.
            </p>

            <h3>실존인물</h3>

            <p>
              실제 인물을 대상으로 한 생성은 해당 인물의 초상,
              명예, 개인정보 및 기타 권리를 침해하지 않는
              범위에서 이용해야 합니다.
            </p>

            <h3>신고</h3>

            <p>
              신고는 HYPER Works 공식 Discord 또는
              <a href="mailto:ukiki8787@gmail.com">
                ukiki8787@gmail.com
              </a>
              으로 접수할 수 있습니다.
            </p>

            <h3>제재</h3>

            <p>
              위반 정도에 따라 요청 거부, 기능 제한,
              쿨타임 적용 또는 연장, 서비스 이용 제한 등의
              조치가 이루어질 수 있습니다.
            </p>

          `

        }

      }

    },



    /* =======================================================
       HYPER Guard
    ======================================================== */

    guard: {

      name: 'HYPER Guard',
      maintenance: 0,
      uptime: '100%',

      inviteUrl:
        'https://discord.com/oauth2/authorize?client_id=1550795954012033114&permissions=8&integration_type=0&scope=bot+applications.commands',

      summary: [

        {
          icon: 'fa-shield-halved',
          text: '서비스 이용약관 및 콘텐츠 운영정책을 준수합니다.'
        },

        {
          icon: 'fa-trash-can',
          text: '채팅 로그는 내부적으로만 처리되며 필터링 후 즉시 삭제됩니다.'
        },

        {
          icon: 'fa-database',
          text: '운영자는 별도의 데이터베이스를 운영하지 않습니다.'
        },

        {
          icon: 'fa-scale-balanced',
          text: '대한민국의 관계 법령 및 Discord 정책을 준수합니다.'
        }

      ],


      legalDocuments: {

        terms: {

          title: '📜 HYPER Guard 이용약관',

          html: `

            <p>
              <strong>시행일: 2026년 9월 19일</strong>
            </p>

            <h3>제1조 (목적)</h3>

            <p>
              본 약관은 HYPER Works가 운영하는 Discord 봇
              HYPER Guard의 이용조건과 운영자 및 이용자의
              권리·의무를 정합니다.
            </p>

            <h3>제2조 (운영자)</h3>

            <p>
              <strong>운영팀:</strong> HYPER Works<br>
              <strong>운영자:</strong> ukiki87<br>
              <strong>문의:</strong>
              <a href="mailto:ukiki8787@gmail.com">
                ukiki8787@gmail.com
              </a><br>
              <strong>공식 Discord:</strong>
              <a
                href="https://discord.gg/FMpjCAHy5F"
                target="_blank"
                rel="noopener noreferrer"
              >
                공식 Discord 서버
              </a>
            </p>

            <h3>제3조 (서비스)</h3>

            <p>
              HYPER Guard는 Discord 서버 내 채팅 관리 및
              보안 기능을 제공합니다.
              비속어·욕설·선정적 단어 감지,
              로그 기록, 관리자 보고 등의 기능이 포함됩니다.
            </p>

            <h3>제4조 (데이터 처리)</h3>

            <p>
              채팅 로그는 내부적으로 처리되며
              필터링 및 서비스 운영에 필요한 범위에서
              처리될 수 있습니다.
            </p>

            <h3>제5조 (적용 법령)</h3>

            <p>
              서비스에는 대한민국의 관계 법령이 적용될 수 있습니다.
            </p>

            <h3>제6조 (금지행위)</h3>

            <p>
              불법 콘텐츠, 아동·청소년 성착취,
              개인정보 침해, 명예훼손·사칭,
              범죄·테러 조장, 악성코드 및 서비스 공격 등은
              금지됩니다.
            </p>

            <h3>제7조 (이용 제한 및 중단)</h3>

            <p>
              약관·정책 위반, 법령 위반, 서비스 악용,
              보안 문제 발생 시 서비스 이용이 제한되거나
              중단될 수 있습니다.
            </p>

            <h3>제8조 (문의 및 변경)</h3>

            <p>
              문의는 HYPER Works 공식 Discord 또는
              이메일로 가능합니다.
              운영자는 필요한 경우 약관을 변경할 수 있으며
              중요한 변경은 확인 가능한 방법으로 안내합니다.
            </p>

          `

        },


        privacy: {

          title: '🔒 HYPER Guard 개인정보처리방침',

          html: `

            <p>
              <strong>시행일: 2026년 9월 19일</strong>
            </p>

            <h3>1. 운영자</h3>

            <p>
              <strong>HYPER Works / ukiki87</strong><br>
              문의:
              <a href="mailto:ukiki8787@gmail.com">
                ukiki8787@gmail.com
              </a><br>
              공식 Discord:
              <a
                href="https://discord.gg/FMpjCAHy5F"
                target="_blank"
                rel="noopener noreferrer"
              >
                공식 Discord 서버
              </a>
            </p>

            <h3>2. 처리될 수 있는 정보</h3>

            <p>
              Discord 사용자·서버·채널 식별정보,
              채팅 메시지 내용,
              위반 내역 로그 및 관리자 보고용 정보가
              서비스 과정에서 처리될 수 있습니다.
            </p>

            <h3>3. 처리 목적</h3>

            <p>
              채팅 관리 및 보안 유지,
              유해어 감지 및 관리자 보고,
              서버 규정 준수 및 커뮤니티 환경 개선을 위해
              처리합니다.
            </p>

            <h3>4. 데이터 저장 및 삭제</h3>

            <p>
              운영 목적에 필요한 범위에서 데이터를 처리하며,
              불필요한 장기 보관을 최소화하는 것을 원칙으로 합니다.
            </p>

            <h3>5. 외부 서비스</h3>

            <p>
              HYPER Guard의 기능 제공을 위해 필요한 경우
              Discord 등 서비스 운영에 필요한 외부 서비스가
              사용될 수 있습니다.
            </p>

            <h3>6. 법령</h3>

            <p>
              개인정보 처리에는 대한민국의 개인정보 보호 관련
              법령 및 기타 관계 법령이 적용될 수 있습니다.
            </p>

            <h3>7. 이용자 주의사항</h3>

            <p>
              주민등록번호, 비밀번호, 금융정보 등
              불필요하거나 민감한 개인정보를
              채팅에 입력하지 마세요.
            </p>

            <h3>8. 문의</h3>

            <p>
              개인정보 처리 관련 문의:
              <a href="mailto:ukiki8787@gmail.com">
                ukiki8787@gmail.com
              </a>
              또는 HYPER Works 공식 Discord
            </p>

          `

        },


        policy: {

          title: '⚖️ HYPER Guard 콘텐츠 운영정책',

          html: `

            <p>
              <strong>시행일: 2026년 9월 19일</strong>
            </p>

            <h3>금지·제한 콘텐츠</h3>

            <p>
              아동·청소년 성착취 콘텐츠,
              개인정보 노출 목적 콘텐츠,
              사칭·명예훼손 목적 콘텐츠,
              범죄·테러 조장,
              악성코드·사이버 공격 목적 콘텐츠,
              대한민국 법령이나 Discord 정책에
              위반되는 콘텐츠는 제한될 수 있습니다.
            </p>

            <h3>저작권</h3>

            <p>
              이용자는 입력 자료를 적법하게 이용할 권한이 있어야 하며,
              타인의 저작물·상표 등을 권리자의 허락 없이
              이용해서는 안 됩니다.
            </p>

            <h3>실존인물</h3>

            <p>
              실제 인물을 대상으로 한 채팅 관리 기능은
              해당 인물의 권리를 침해하지 않는 범위에서만
              이용해야 합니다.
            </p>

            <h3>신고</h3>

            <p>
              신고는 HYPER Works 공식 Discord 또는
              <a href="mailto:ukiki8787@gmail.com">
                ukiki8787@gmail.com
              </a>
              으로 접수할 수 있습니다.
            </p>

            <h3>제재</h3>

            <p>
              위반 정도에 따라 요청 거부, 기능 제한,
              서비스 이용 제한 등의 조치가 이루어질 수 있습니다.
            </p>

          `

        }

      }

    },



    /* =======================================================
      HYPER Chat
    ======================================================== */

    ai: {

      name: 'HYPER Chat',
      maintenance: 0,
      uptime: '100%',

      /*
       * 사용자가 제공한 Discord 초대 URL
       */
      inviteUrl:
        'https://discord.com/oauth2/authorize?client_id=1553379902571683940&permissions=8&integration_type=0&scope=bot',

      summary: [

        {
          icon: 'fa-shield-halved',
          text: '서비스 이용약관 및 콘텐츠 운영정책을 준수합니다.'
        },

        {
          icon: 'fa-comments',
          text: '입력한 질문은 AI 답변과 서비스 운영을 위해 처리될 수 있습니다.'
        },

        {
          icon: 'fa-server',
          text: 'AI 기능 제공 과정에서 질문 또는 질문의 일부가 외부 AI 서비스로 전달될 수 있습니다.'
        },

        {
          icon: 'fa-scale-balanced',
          text: '대한민국의 적용 가능한 법령 및 Discord 정책을 준수해야 합니다.'
        }

      ],


      legalDocuments: {

        /* =====================================================
           HYPER Chat 이용약관
        ====================================================== */

        terms: {

          title: '📜 HYPER Chat 이용약관',

          html: `

            <p>
              <strong>시행일: 2026년 9월 27일</strong>
            </p>


            <h3>제1조 (목적)</h3>

            <p>
              본 약관은 HYPER Works가 운영하는 Discord 봇
              HYPER Chat의 이용조건과 운영자 및 이용자의
              권리·의무를 정합니다.
            </p>


            <h3>제2조 (운영자)</h3>

            <p>
              <strong>운영팀:</strong> HYPER Works<br>
              <strong>운영자:</strong> ukiki87<br>
              <strong>문의:</strong>
              <a href="mailto:ukiki8787@gmail.com">
                ukiki8787@gmail.com
              </a><br>
              <strong>공식 Discord:</strong>
              <a
                href="https://discord.gg/FMpjCAHy5F"
                target="_blank"
                rel="noopener noreferrer"
              >
                공식 Discord 서버
              </a>
            </p>


            <h3>제3조 (서비스)</h3>

            <p>
              HYPER Chat은 Discord에서 AI 기반 답변 기능을
              제공하는 서비스입니다.
              이용자의 질문을 처리하고 답변을 생성하며,
              질문에 대한 설명, 요약, 번역, 코딩,
              계산 및 일반적인 정보 제공 등의 기능이
              제공될 수 있습니다.
            </p>


            <h3>제4조 (이용자의 의무)</h3>

            <p>
              이용자는 대한민국의 적용 가능한 법령,
              Discord 이용약관 및 커뮤니티 가이드라인,
              본 약관과 콘텐츠 운영정책을 준수해야 합니다.
            </p>


            <h3>제5조 (적용 법령)</h3>

            <p>
              서비스에는 대한민국의 관계 법령 중
              서비스의 성격과 이용 형태에 따라 적용되는
              규정이 적용될 수 있습니다.
              법령과 본 약관이 충돌하는 경우
              해당 법령이 우선합니다.
            </p>


            <h3>제6조 (금지행위)</h3>

            <p>
              불법 콘텐츠, 아동·청소년 성착취 콘텐츠,
              동의 없는 성적 딥페이크, 개인정보 침해,
              명예훼손·사칭, 타인의 저작권·상표권·초상권 침해,
              범죄·테러 조장, 악성코드 및 서비스 공격,
              시스템 제한 우회, 비정상적 대량 요청 등은
              금지됩니다.
            </p>


            <h3>제7조 (AI 답변)</h3>

            <p>
              AI가 제공하는 답변은 항상 정확하거나
              최신의 정보라고 보장되지 않습니다.
              중요한 의사결정에 활용하기 전에는
              이용자가 필요한 정보를 별도로 확인해야 합니다.
              코드, 번역, 계산, 설명 및 기타 답변에도
              오류가 포함될 수 있습니다.
            </p>


            <h3>제8조 (질문 처리 및 표시)</h3>

            <p>
              이용자가 입력한 질문은 AI 답변 제공,
              금지어 확인, 서비스 운영 및 오류 대응을
              위해 처리될 수 있습니다.
              질문과 답변은 Discord 채널에 표시될 수 있으며,
              서버 관리자가 지정한 로그 채널이 있는 경우
              운영에 필요한 일부 정보가 로그로 전송될 수 있습니다.
            </p>


            <h3>제9조 (외부 서비스)</h3>

            <p>
              AI 기능 제공을 위해 외부 AI 서비스가
              사용될 수 있습니다.
              기능 제공에 필요한 질문 또는 질문의 일부가
              외부 서비스로 전달될 수 있으며,
              외부 서비스 자체의 처리 및 보관에는
              해당 서비스의 정책이 적용될 수 있습니다.
            </p>


            <h3>제10조 (이용 제한 및 중단)</h3>

            <p>
              약관·정책 위반, 법령 위반, 서비스 악용,
              보안 문제 또는 운영상 필요한 경우
              서비스 이용이 제한되거나 중단될 수 있습니다.
              서비스의 안정적인 운영을 위해 사용자별 또는
              서버별 이용 제한 및 쿨타임이 적용될 수 있습니다.
            </p>


            <h3>제11조 (면책)</h3>

            <p>
              AI 답변의 오류, 외부 서비스 장애,
              Discord 서비스 장애 등 운영자가 합리적으로
              통제하기 어려운 사유에 대해서는
              관련 법령이 허용하는 범위에서 책임을 부담합니다.
              고의 또는 법률상 면제할 수 없는 책임까지
              면제하는 것으로 해석되지 않습니다.
            </p>


            <h3>제12조 (문의)</h3>

            <p>
              HYPER Works 공식 Discord 또는
              <a href="mailto:ukiki8787@gmail.com">
                ukiki8787@gmail.com
              </a>
              으로 문의할 수 있습니다.
            </p>


            <h3>제13조 (변경 및 준거법)</h3>

            <p>
              운영자는 필요한 경우 약관을 변경할 수 있으며
              중요한 변경은 확인 가능한 방법으로 안내합니다.
              서비스 이용과 관련된 사항에는
              대한민국 법령을 적용합니다.
            </p>

          `

        },


        /* =====================================================
           HYPER Chat 개인정보처리방침
        ====================================================== */

        privacy: {

          title: '🔒 HYPER Chat 개인정보처리방침',

          html: `

            <p>
              <strong>시행일: 2026년 9월 27일</strong>
            </p>


            <h3>1. 운영자</h3>

            <p>
              <strong>HYPER Works / ukiki87</strong><br>

              문의:
              <a href="mailto:ukiki8787@gmail.com">
                ukiki8787@gmail.com
              </a><br>

              공식 Discord:
              <a
                href="https://discord.gg/FMpjCAHy5F"
                target="_blank"
                rel="noopener noreferrer"
              >
                공식 Discord 서버
              </a>
            </p>


            <h3>2. 처리될 수 있는 정보</h3>

            <p>
              Discord 사용자·서버·채널 식별정보,
              AI 질문 내용, 요청 상태,
              사용자 및 서버별 쿨타임 정보,
              콘텐츠 관리 및 유해어 확인 정보,
              오류 및 장애 대응에 필요한 정보,
              서버 설정 및 로그 채널 정보 등이
              서비스 과정에서 처리될 수 있습니다.
            </p>


            <h3>3. 처리 목적</h3>

            <p>
              AI 답변 제공,
              서비스 이용 제한 및 쿨타임 적용,
              악용 방지,
              오류 처리,
              서버 로그 및 설정 기능 제공,
              서비스 보안 및 안정성 유지를 위해 처리합니다.
            </p>


            <h3>4. 질문 및 답변 처리</h3>

            <p>
              이용자의 질문은 답변을 생성하기 위한 목적으로
              처리되며 Discord 채널에 표시될 수 있습니다.
              운영자는 질문과 답변을 장기간 보관하기 위한
              별도의 데이터베이스를 운영하지 않는 것을 원칙으로 합니다.
              다만 Discord 자체의 메시지 보관 정책 및
              서버 관리자의 설정에 따라 메시지가 남을 수 있습니다.
            </p>


            <h3>5. 서버 로그 및 설정</h3>

            <p>
              서버별 로그 기능을 제공하기 위해
              서버 ID와 지정된 로그 채널 ID 등의 설정 정보가
              내부 데이터베이스에 저장될 수 있습니다.
              유해어 감지나 오류 발생 등의 운영 정보가
              서버 관리자가 지정한 로그 채널로 전송될 수 있습니다.
            </p>


            <h3>6. 외부 서비스</h3>

            <p>
              AI 답변 기능 제공을 위해 질문 또는 질문의 일부가
              외부 AI 서비스로 전달될 수 있습니다.
              외부 서비스의 개인정보 처리 및 보관은
              해당 서비스의 개인정보처리방침 및 이용약관에
              따를 수 있습니다.
            </p>


            <h3>7. 이용자 주의사항</h3>

            <p>
              주민등록번호, 비밀번호, 인증번호,
              API 키, 금융정보, 계좌·카드정보,
              상세 주소, 전화번호 등 불필요하거나
              민감한 개인정보를 AI 질문에 입력하지 마세요.
            </p>


            <h3>8. 서버 관리자에 의한 확인</h3>

            <p>
              Discord 서버의 관리자는 서버 운영 및
              커뮤니티 관리 목적에 따라 채널에 표시되는
              질문과 답변 또는 지정 로그 채널의 내용을
              확인할 수 있습니다.
            </p>


            <h3>9. 법령</h3>

            <p>
              개인정보 처리에는 대한민국의 개인정보 보호 관련
              법령 및 기타 적용 가능한 관계 법령이
              적용될 수 있습니다.
            </p>


            <h3>10. 문의</h3>

            <p>
              개인정보 처리 관련 문의:
              <a href="mailto:ukiki8787@gmail.com">
                ukiki8787@gmail.com
              </a>
              또는 HYPER Works 공식 Discord
            </p>


            <h3>11. 변경</h3>

            <p>
              개인정보처리방침의 내용이 변경되는 경우
              변경된 내용을 확인할 수 있는 방법으로
              안내하도록 합니다.
            </p>

          `

        },


        /* =====================================================
           HYPER Chat 콘텐츠 운영정책
        ====================================================== */

        policy: {

          title: '🛡️ HYPER Chat 콘텐츠 운영정책',

          html: `

            <p>
              <strong>시행일: 2026년 9월 27일</strong>
            </p>


            <h3>1. 금지·제한 콘텐츠</h3>

            <p>
              아동·청소년 성착취 콘텐츠,
              동의 없는 성적 이미지·딥페이크,
              개인정보 노출 목적 콘텐츠,
              사칭·명예훼손 목적 콘텐츠,
              범죄·테러 조장,
              악성코드·사이버 공격 목적 콘텐츠,
              타인의 권리를 침해하는 콘텐츠,
              대한민국 법령 또는 외부 AI 서비스 정책에
              위반되는 콘텐츠는 제한 또는 거부될 수 있습니다.
            </p>


            <h3>2. 저작권</h3>

            <p>
              이용자는 입력 자료를 적법하게 이용할 권한이
              있어야 합니다.
              타인의 저작물·상표·사진·코드 등을
              권리자의 허락 없이 이용하여
              권리를 침해해서는 안 됩니다.
            </p>


            <h3>3. 개인정보 및 실존인물</h3>

            <p>
              실제 인물의 개인정보, 명예, 초상 및 기타
              권리를 침해하는 목적으로 서비스를 이용해서는 안 됩니다.
              공개되지 않은 개인정보를 수집·추출·공개하는
              요청은 제한될 수 있습니다.
            </p>


            <h3>4. 코딩 및 기술 관련 요청</h3>

            <p>
              일반적인 개발, 학습, 코드 작성,
              코드 분석 및 관리 목적의 기술 요청은
              서비스 범위 내에서 이용할 수 있습니다.
              악성코드 제작, 무단 침입, 사이버 공격,
              인증 우회 및 타인의 시스템을 공격하기 위한
              요청은 제한 또는 거부될 수 있습니다.
            </p>


            <h3>5. 신고</h3>

            <p>
              콘텐츠 또는 서비스 이용과 관련된 신고는
              HYPER Works 공식 Discord 또는
              <a href="mailto:ukiki8787@gmail.com">
                ukiki8787@gmail.com
              </a>
              으로 접수할 수 있습니다.
            </p>


            <h3>6. 제재</h3>

            <p>
              정책 위반 정도에 따라
              요청 거부, 기능 제한, 쿨타임 적용 또는 연장,
              서비스 이용 제한, 서버 관리자의 조치 및
              기타 서비스 운영에 필요한 조치가
              이루어질 수 있습니다.
            </p>

          `

        }

      }

    }

  };



  const botButtonIds = {
    canvas: 'inviteBotBtn',
    guard: 'inviteGuardBtn',
    ai: 'inviteAIBtn'
  };

  Object.entries(botConfigs).forEach(([botKey, config]) => {

    const card = document
      .getElementById(botButtonIds[botKey])
      ?.closest('.product-card');

    if (!card) return;

    const isMaintenance = config.maintenance === 1;
    const statusBadge = card.querySelector('.status-badge');
    const uptimeValue = card.querySelector('.bot-stat-item .stat-value');

    statusBadge.classList.toggle('status-maintenance', isMaintenance);
    statusBadge.classList.toggle('status-live', !isMaintenance);
    statusBadge.querySelector('.status-label').textContent =
      isMaintenance ? '점검 중' : '가동 중';

    uptimeValue.textContent =
      isMaintenance ? '-%' : config.uptime;
    uptimeValue.classList.toggle('highlight-green', !isMaintenance);

  });


  /* =========================================================
     모달 요소
  ========================================================== */

  let currentBotKey = 'canvas';

  const legalModal =
    document.getElementById('legalModal');

  const inviteConsentView =
    document.getElementById('inviteConsentView');

  const maintenanceView =
    document.getElementById('maintenanceView');

  const maintenanceModalBadge =
    document.getElementById('maintenanceModalBadge');

  const legalDocumentView =
    document.getElementById('legalDocumentView');

  const documentTitle =
    document.getElementById('documentTitle');

  const documentBody =
    document.getElementById('documentBody');

  const termsConsent =
    document.getElementById('termsConsent');

  const confirmInviteBtn =
    document.getElementById('confirmInviteBtn');

  const modalBadge =
    legalModal.querySelector('.legal-modal-badge');

  const modalTitle =
    document.getElementById('legalModalTitle');

  const consentSummaryContainer =
    legalModal.querySelector('.consent-summary');



  /* =========================================================
     초대 동의 모달 열기
  ========================================================== */

  function openLegalModal(botKey) {

    currentBotKey = botKey;

    const config = botConfigs[botKey];

    if (!config) return;


    modalBadge.textContent = config.name;
    maintenanceModalBadge.textContent = config.name;

    modalTitle.textContent =
      `${config.name} 초대 전 동의`;


    consentSummaryContainer.innerHTML =
      config.summary
        .map(item => `
          <div>
            <i class="fa-solid ${item.icon}"></i>
            <span>${item.text}</span>
          </div>
        `)
        .join('');


    termsConsent.checked = false;

    confirmInviteBtn.disabled = true;


    legalModal.classList.add('open');

    if (config.maintenance === 1) {
      legalModal.setAttribute(
        'aria-labelledby',
        'maintenanceModalTitle'
      );
      showMaintenanceView();
    } else {
      legalModal.setAttribute(
        'aria-labelledby',
        'legalModalTitle'
      );
      showConsentView();
    }

    legalModal.setAttribute(
      'aria-hidden',
      'false'
    );

    document.body.classList.add('modal-open');


  }



  /* =========================================================
     모달 닫기
  ========================================================== */

  function closeLegalModal() {

    legalModal.classList.remove('open');

    legalModal.setAttribute(
      'aria-hidden',
      'true'
    );

    document.body.classList.remove('modal-open');

    showConsentView();

  }



  /* =========================================================
     동의 화면
  ========================================================== */

  function showConsentView() {

    inviteConsentView.classList.remove('hidden');

    maintenanceView.classList.add('hidden');

    legalDocumentView.classList.add('hidden');

  }


  function showMaintenanceView() {

    inviteConsentView.classList.add('hidden');

    maintenanceView.classList.remove('hidden');

    legalDocumentView.classList.add('hidden');

  }



  /* =========================================================
     법적 문서 상세 보기
  ========================================================== */

  function showLegalDocument(docType) {

    const config = botConfigs[currentBotKey];

    if (!config) return;


    const doc =
      config.legalDocuments[docType];

    if (!doc) return;


    documentTitle.textContent =
      doc.title;

    documentBody.innerHTML =
      doc.html;


    inviteConsentView.classList.add('hidden');

    legalDocumentView.classList.remove('hidden');

  }



  /* =========================================================
     봇 초대 버튼
  ========================================================== */

  document
    .getElementById('inviteBotBtn')
    ?.addEventListener('click', () => {

      openLegalModal('canvas');

    });


  document
    .getElementById('inviteGuardBtn')
    ?.addEventListener('click', () => {

      openLegalModal('guard');

    });


  document
    .getElementById('inviteAIBtn')
    ?.addEventListener('click', () => {

      openLegalModal('ai');

    });



  /* =========================================================
     이용약관 / 개인정보처리방침 /
     콘텐츠 운영정책 버튼
  ========================================================== */

  document
    .querySelectorAll('.legal-open-inner')
    .forEach(btn => {

      btn.addEventListener('click', () => {

        showLegalDocument(
          btn.dataset.legal
        );

      });

    });



  /* =========================================================
     모달 닫기
  ========================================================== */

  document
    .querySelectorAll('[data-close-modal]')
    .forEach(el => {

      el.addEventListener(
        'click',
        closeLegalModal
      );

    });



  /* =========================================================
     동의 화면으로 돌아가기
  ========================================================== */

  document
    .querySelector('.back-to-consent')
    ?.addEventListener(
      'click',
      showConsentView
    );



  /* =========================================================
     동의 체크박스
  ========================================================== */

  termsConsent?.addEventListener(
    'change',
    () => {

      confirmInviteBtn.disabled =
        !termsConsent.checked;

    }
  );



  /* =========================================================
     Discord 초대 진행
  ========================================================== */

  confirmInviteBtn?.addEventListener(
    'click',
    () => {

      if (!termsConsent.checked) {
        return;
      }


      const config =
        botConfigs[currentBotKey];

      if (!config) return;


      /*
       * 동의 후 해당 봇의 Discord 초대 페이지 열기
       */

      window.open(
        config.inviteUrl,
        '_blank',
        'noopener,noreferrer'
      );


      closeLegalModal();

    }
  );



  /* =========================================================
     ESC 키로 모달 닫기
  ========================================================== */

  document.addEventListener(
    'keydown',
    (event) => {

      if (
        event.key === 'Escape' &&
        legalModal.classList.contains('open')
      ) {

        closeLegalModal();

      }

    }
  );

});