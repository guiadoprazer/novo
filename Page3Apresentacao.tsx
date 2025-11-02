import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const NOTIFICATION_IMAGES = [
  'https://i.imgur.com/rhbvlNv.png',
  'https://i.imgur.com/TUlN4It.png',
  'https://i.imgur.com/3wbYQih.png',
];

const FAQ_ITEMS = [
  {
    question: '1️⃣ Preciso ter experiência pra aplicar as posições?',
    answer: 'Nada disso. O guia mostra passo a passo com explicações simples, mesmo pra quem nunca tentou nada antes.',
  },
  {
    question: '2️⃣ Esse método é seguro e confiável?',
    answer: 'Sim. Todas as posições são naturais, baseadas em fisiologia real e usadas por terapeutas sexuais.',
  },
  {
    question: '3️⃣ Em quanto tempo vou notar diferença?',
    answer: 'Muitos homens sentem o efeito já no mesmo dia, aplicando a primeira posição.',
  },
  {
    question: '4️⃣ Funciona mesmo pra quem já tentou de tudo?',
    answer: 'Sim. Porque aqui não é "truque mental", é ajuste físico que muda a resposta do seu corpo.',
  },
  {
    question: '5️⃣ Vou precisar mudar toda minha rotina sexual?',
    answer: 'Não. Você só muda as posições certas e aplica com consciência. O prazer continua, só que com mais controle.',
  },
  {
    question: '6️⃣ E se eu não gostar do resultado?',
    answer: 'Sem risco. É conteúdo digital, e o valor é simbólico menos que um café.',
  },
  {
    question: 'SEGREDO OCULTO REVELADO 🔓',
    answer: 'special',
    fullContent: `Sei que o Guia das Posições que Fazem Você Durar Mais já vai te ajudar… mas posso te levar ainda mais longe.

Você pode acessar agora mesmo o KIT ANTI-GOZO: Duração, Controle e Satisfação, por apenas R$7,99, que inclui:

📘 Guia das Posições que Fazem Você Durar Mais
🎁 Técnica da Respiração que Engana o Corpo — áudio guiado para segurar o clímax.
🎁 Frases Mentais Anti-Gozo — comandos mentais usados por homens de alto controle.
🎁 O Roteiro do Aquecimento Secreto — ritual antes da relação que prolonga a resistência.

Funciona pra qualquer homem que quer dominar o próprio corpo e impressionar na cama sem depender de nada externo.

Tudo isso por apenas R$7,99.`,
  },
];

export default function Page3Apresentacao() {
  const [showNotification, setShowNotification] = useState(false);
  const [currentNotificationIndex, setCurrentNotificationIndex] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    let isFirstNotification = true;
    let audioContext: HTMLAudioElement | null = null;

    const playNotificationSound = () => {
      if (isFirstNotification) {
        // First notification: try to play, if fails, setup touch listener
        const audio = new Audio('https://orafaaah.com/wp-content/uploads/2025/10/msg.mp3');
        const playPromise = audio.play();

        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              // Audio played successfully
              audioContext = audio;
            })
            .catch(() => {
              // Autoplay blocked, setup touch listener
              const enableAudio = () => {
                const unlockAudio = new Audio('https://orafaaah.com/wp-content/uploads/2025/10/msg.mp3');
                unlockAudio.play().then(() => {
                  unlockAudio.pause();
                  unlockAudio.currentTime = 0;
                  audioContext = unlockAudio;
                }).catch(() => {});

                document.removeEventListener('touchstart', enableAudio);
                document.removeEventListener('click', enableAudio);
              };

              document.addEventListener('touchstart', enableAudio, { once: true });
              document.addEventListener('click', enableAudio, { once: true });
            });
        }
        isFirstNotification = false;
      } else {
        // Subsequent notifications: use existing context or create new
        const audio = new Audio('https://orafaaah.com/wp-content/uploads/2025/10/msg.mp3');
        audio.play().catch(() => {});
      }
    };

    const showNotificationWithDelay = () => {
      const randomDelay = Math.floor(Math.random() * (20000 - 5000 + 1)) + 5000;

      setTimeout(() => {
        playNotificationSound();
        setShowNotification(true);

        setTimeout(() => {
          setShowNotification(false);
          setCurrentNotificationIndex((prev) => (prev + 1) % NOTIFICATION_IMAGES.length);
          showNotificationWithDelay();
        }, 3000);
      }, randomDelay);
    };

    showNotificationWithDelay();

    return () => {
      if (audioContext) {
        audioContext.pause();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#02090F] relative overflow-hidden">
      {/* Sale Notification - iPhone style at top */}
      {showNotification && (
        <div className="fixed top-4 left-0 right-0 z-50 flex justify-center animate-[slideDown_0.5s_ease-out] px-4">
          <img
            src={NOTIFICATION_IMAGES[currentNotificationIndex]}
            alt="Venda aprovada"
            className="w-full max-w-[280px] sm:max-w-xs md:max-w-sm h-auto"
            style={{ imageRendering: '-webkit-optimize-contrast' }}
            loading="eager"
          />
        </div>
      )}

      {/* Particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#22a8ff] rounded-full animate-fall opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Subtle glow around video area */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-4xl h-[60%] bg-[#22a8ff] opacity-[0.02] blur-[100px] rounded-full" />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 py-12 sm:py-20">
        {/* Headline */}
        <h1 className="text-xl sm:text-2xl md:text-4xl font-normal text-center mb-8 sm:mb-12 leading-tight max-w-3xl text-[#f3f3f3]">
          Recupere seu controle na cama em <span className="text-[#D09D11] font-bold drop-shadow-[0_0_10px_rgba(208,157,17,0.5)]">poucos minutos</span> com o guia das posições certas e evite a vergonha de acabar rápido demais.
        </h1>

        {/* Image container */}
        <div className="w-full max-w-4xl mb-6 sm:mb-8 rounded-2xl overflow-hidden shadow-2xl border-4 border-[#22a8ff] mx-4">
          <div className="relative w-full bg-[#093A4B]">
            <img
              src="https://i.pinimg.com/originals/59/c9/10/59c910969bee535e4782173cfbc7edae.gif"
              alt="Protocolo de Potência"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* FAQ Section */}
        <div className="w-full max-w-3xl px-4 mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-[#f3f3f3]">
            Perguntas Frequentes
          </h2>

          <div className="space-y-3">
            {FAQ_ITEMS.slice(0, -1).map((item, index) => (
              <div
                key={index}
                className="border border-[#22a8ff]/40 rounded-lg overflow-hidden transition-all duration-300 bg-[#093A4B]/50"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 flex items-center justify-between text-left hover:bg-[#22a8ff]/5 transition-colors"
                >
                  <span className="text-sm sm:text-base font-medium text-[#f3f3f3] pr-4">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 transition-transform duration-300 text-[#22a8ff]/60 ${
                      openFaqIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaqIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-4 sm:px-5 pb-3 sm:pb-4 pt-2 text-[#f3f3f3]/80 text-sm border-t border-[#22a8ff]/20">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}

            {/* Special Offer FAQ - Highlighted */}
            <div className="border-4 border-[#D09D11] rounded-xl overflow-hidden bg-gradient-to-br from-[#093A4B] via-[#22a8ff]/20 to-[#093A4B] shadow-[0_0_40px_rgba(208,157,17,0.4)] transform hover:scale-[1.02] transition-all duration-300 animate-pulse-glow">
              <button
                onClick={() => setOpenFaqIndex(openFaqIndex === 6 ? null : 6)}
                className="w-full px-4 sm:px-6 py-5 sm:py-6 flex items-center justify-between text-left hover:bg-[#22a8ff]/30 transition-colors"
              >
                <span className="text-base sm:text-xl font-bold text-[#D09D11] pr-4 drop-shadow-[0_0_10px_rgba(208,157,17,0.5)]">
                  {FAQ_ITEMS[FAQ_ITEMS.length - 1].question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 transition-transform duration-300 text-[#D09D11] ${
                    openFaqIndex === 6 ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openFaqIndex === 6 ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-4 sm:px-6 pb-5 sm:pb-6 pt-4">
                  <div className="text-[#f3f3f3] text-sm sm:text-base mb-6 leading-relaxed whitespace-pre-line">
                    {FAQ_ITEMS[FAQ_ITEMS.length - 1].fullContent}
                  </div>

                  <div className="space-y-4">
                    <a
                      href="https://pay.lowify.com.br/checkout?product_id=wz8o4O"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-gradient-to-r from-[#D09D11] via-[#22a8ff] to-[#D09D11] text-[#02090F] px-4 sm:px-8 py-5 sm:py-6 rounded-xl text-base sm:text-xl md:text-2xl font-black transition-all duration-300 hover:shadow-[0_0_30px_rgba(208,157,17,0.6)] hover:scale-105 active:scale-95 text-center uppercase tracking-wide border-2 border-[#22a8ff] animate-shimmer bg-[length:200%_100%]"
                    >
                      🔥 Quero o KIT ANTI-GOZO completo por R$7,99
                    </a>

                    <a
                      href="https://pay.lowify.com.br/checkout?product_id=wz8o4O"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center text-[#f3f3f3]/70 hover:text-[#f3f3f3] text-sm sm:text-base underline transition-all duration-300 py-2"
                    >
                      ❌ Não, obrigado. Quero só o básico.
                    </a>
                  </div>

                  <p className="text-center text-[#f3f3f3]/60 text-xs sm:text-sm mt-6 italic">
                    ⚡ Oferta exclusiva disponível apenas nesta página
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
