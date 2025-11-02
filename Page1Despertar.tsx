import { useState, useEffect } from 'react';

interface Page1DespertarProps {
  onNext: () => void;
}

export default function Page1Despertar({ onNext }: Page1DespertarProps) {
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    // Add a state to history to detect back button
    window.history.pushState(null, '', window.location.href);

    const handlePopState = () => {
      // When user tries to go back, redirect to page 2
      window.history.pushState(null, '', window.location.href);
      onNext();
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [onNext]);

  const handleButtonClick = () => {
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
      {/* Subtle texture */}
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_50%_50%,rgba(34,168,255,0.1),transparent_50%)]" />

      {/* Sale Notification */}
      {showNotification && (
        <div className="fixed top-4 left-0 right-0 z-50 flex justify-center animate-[slideDown_0.5s_ease-out] px-4">
          <img
            src="https://i.imgur.com/C85gtVe.png"
            alt="Venda aprovada"
            className="w-full max-w-[280px] sm:max-w-xs md:max-w-sm h-auto"
            style={{ imageRendering: '-webkit-optimize-contrast' }}
            loading="eager"
          />
        </div>
      )}

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 py-12 sm:py-20">
        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-normal text-center mb-8 sm:mb-12 leading-tight max-w-4xl text-[#f3f3f3]">
          Gozo Rápido Nunca Mais: <span className="bg-[#093A4B] text-[#f3f3f3] px-1 sm:px-2 py-0.5 rounded inline-block">descubra as 7 posições</span> que fazem você durar mais sem remédio, sem treino chato e sem constrangimento.
        </h1>

        {/* Avatar space */}
        <div className="mb-8 sm:mb-12 w-full max-w-sm md:max-w-md px-4">
          <img
            src="https://i.imgur.com/lYlCy4m.jpeg"
            alt="Avatar"
            className="w-full rounded-2xl border-4 border-[#22a8ff] shadow-2xl"
          />
        </div>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl md:text-2xl text-[#f3f3f3] text-center mb-6 sm:mb-8 max-w-2xl px-4">
          Sem pílulas, sem respiração esquisita e sem precisar ser atleta.
          <br /><br />
          Por apenas <strong>R$1,99</strong>, receba o <strong>Guia das Posições que Fazem Você Durar Mais</strong>, e veja quais posições reduzem o estímulo e aumentam o controle mesmo que você sempre goze rápido demais.
          <br /><br />
          <strong className="uppercase">PORÉM, VAMOS COMBINAR UMA COISA? 👇</strong>
          <br /><br />
          ❌ Chega de acabar em segundos e ver a decepção no olhar dela
          <br /><br />
          ❌ Chega de achar que é "culpa sua"
          <br /><br />
          ❌ Chega de evitar o sexo por medo de falhar
          <br /><br />
          Agora é sobre controle, prazer e confiança total e tudo começa hoje, com 1 guia simples.
          <br /><br />
          <strong className="uppercase">Acordo feito? Então prossiga 👇</strong>
        </p>


        {/* CTA Button */}
        <button
          onClick={handleButtonClick}
          className="group relative bg-[#D09D11] text-[#02090F] px-8 sm:px-12 py-4 sm:py-5 rounded-full text-lg sm:text-xl font-bold transition-all duration-300 hover:shadow-2xl hover:scale-105 active:scale-95 mx-4"
        >
          <span className="relative z-10 flex items-center gap-2 sm:gap-3">
            CLIQUE AQUI 🔥
          </span>
          <div className="absolute inset-0 rounded-full bg-[#D09D11] blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
        </button>
      </div>
    </div>
  );
}
