import { useState, useEffect, useRef } from 'react';

interface Page2RevelacaoProps {
  onNext: () => void;
}

export default function Page2Revelacao({ onNext }: Page2RevelacaoProps) {
  const [showNotification, setShowNotification] = useState(false);
  const backgroundAudioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    backgroundAudioRef.current = new Audio('https://orafaaah.com/wp-content/uploads/2025/10/i-see-red.mp3');
    backgroundAudioRef.current.loop = true;
    backgroundAudioRef.current.play().catch(error => {
      console.log('Autoplay prevented:', error);
    });

    return () => {
      if (backgroundAudioRef.current) {
        backgroundAudioRef.current.pause();
        backgroundAudioRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    // Add a state to history to detect back button
    window.history.pushState(null, '', window.location.href);

    const handlePopState = () => {
      // When user tries to go back, redirect to page 3
      window.history.pushState(null, '', window.location.href);
      if (backgroundAudioRef.current) {
        backgroundAudioRef.current.pause();
      }
      onNext();
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [onNext]);

  const handleJokeButton = () => {
    const button = document.getElementById('joke-btn');
    if (button) {
      button.classList.add('animate-shake');
      setTimeout(() => button.classList.remove('animate-shake'), 500);
    }
  };

  const handleNextButton = () => {
    if (backgroundAudioRef.current) {
      backgroundAudioRef.current.pause();
    }

    const audio = new Audio('https://orafaaah.com/wp-content/uploads/2025/10/msg.mp3');
    audio.play();

    setShowNotification(true);

    setTimeout(() => {
      setShowNotification(false);
      onNext();
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#02090F] relative overflow-hidden">
      {/* Minimal border effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#22a8ff] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#22a8ff] to-transparent" />
        <div className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-transparent via-[#22a8ff] to-transparent" />
        <div className="absolute top-0 bottom-0 right-0 w-px bg-gradient-to-b from-transparent via-[#22a8ff] to-transparent" />
      </div>

      {/* Sale Notification */}
      {showNotification && (
        <div className="fixed top-4 left-0 right-0 z-50 flex justify-center animate-[slideDown_0.5s_ease-out] px-4">
          <img
            src="https://i.imgur.com/FO7iXGS.png"
            alt="Venda aprovada"
            className="w-full max-w-[280px] sm:max-w-xs md:max-w-sm h-auto"
            style={{ imageRendering: '-webkit-optimize-contrast' }}
            loading="eager"
          />
        </div>
      )}

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 py-12 sm:py-20">
        {/* Image */}
        <div className="mb-8 sm:mb-12 w-full max-w-sm md:max-w-md px-4">
          <img
            src="https://i.imgur.com/BwVpuWl.jpeg"
            alt="Featured"
            className="w-full rounded-2xl border-4 border-[#22a8ff] shadow-2xl"
          />
        </div>

        {/* Headline */}
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center mb-6 sm:mb-8 leading-tight max-w-3xl text-[#f3f3f3] px-4">
          A verdade é uma só: nenhuma pílula vai te dar o controle que seu próprio corpo já tem.
        </h1>

        {/* Description */}
        <div className="max-w-2xl text-center mb-8 sm:mb-10 space-y-4 px-4">
          <p className="text-[#f3f3f3] text-base sm:text-lg leading-relaxed">
            Você chega em casa exausto, mas ela te olha com aquele sorriso...
            <br /><br />
            Vocês começam, tudo vai bem até que vem o medo: <span className="font-bold">"não posso gozar agora".</span>
            <br />
            E quando tenta segurar... já foi.
          </p>
          <p className="text-[#f3f3f3] text-base sm:text-lg leading-relaxed">
            No fundo, você sabe que não é falta de vontade. <span className="font-bold">É fisiologia.</span> O corpo reage antes da mente e você nunca aprendeu como controlar o estímulo físico.
          </p>
          <p className="text-[#f3f3f3] text-base sm:text-lg leading-relaxed">
            Até que um grupo de pesquisadores e terapeutas sexuais descobriu algo curioso:
            <br /><br />
            📍 <span className="font-bold">certas posições reduzem a pressão no ponto mais sensível</span> e mudam o tempo de resposta do seu corpo.
            <br />
            Homens comuns começaram a testar e os resultados foram imediatos.
          </p>
          <p className="text-[#f3f3f3] text-base sm:text-lg leading-relaxed">
            ⚙️ <span className="font-bold">duravam até 3x mais, sem esforço</span>
            <br />
            ⚙️ <span className="font-bold">ganhavam confiança, mesmo depois de falhar</span>
            <br />
            ⚙️ e, o melhor: <span className="font-bold">sem depender de remédio algum</span>
          </p>
          <p className="text-[#f3f3f3] text-base sm:text-lg leading-relaxed">
            Tudo isso foi compilado no <span className="font-bold">Guia das Posições que Fazem Você Durar Mais</span> o passo 1 da sua virada.
          </p>
        </div>

        {/* Question */}
        <p className="text-xl sm:text-2xl md:text-3xl text-[#f3f3f3] text-center mb-4 sm:mb-6 font-medium px-4">
          Agora seja sincero... Se eu liberar uma cópia desse protocolo por apenas{' '}
          <span className="font-black underline decoration-4 decoration-[#D09D11]">R$1,99</span>{' '}
          pra você testar ainda hoje, você aceitaria?
        </p>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-[#f3f3f3] text-center mb-8 sm:mb-12 px-4">
          Eu sei, parece pegadinha... <span className="font-bold">Mas não é!</span>
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full max-w-2xl px-4">
          <button
            id="joke-btn"
            onClick={handleNextButton}
            className="flex-1 bg-[#093A4B] text-[#f3f3f3] px-6 sm:px-8 py-4 sm:py-5 rounded-xl text-base sm:text-lg font-semibold border-2 border-[#22a8ff] hover:border-[#D09D11] transition-all duration-300 hover:bg-[#22a8ff]/10"
          >
            🤔 Duvido, mas quero ver
          </button>

          <button
            onClick={handleNextButton}
            className="flex-1 group relative bg-[#D09D11] text-[#02090F] px-6 sm:px-8 py-4 sm:py-5 rounded-xl text-base sm:text-lg font-bold transition-all duration-300 hover:shadow-2xl hover:scale-105 active:scale-95"
          >
            <span className="relative z-10">🔥 Quero só se for agora</span>
            <div className="absolute inset-0 rounded-xl bg-[#D09D11] blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
          </button>
        </div>
      </div>
    </div>
  );
}
