import confetti from 'canvas-confetti';

const ConfettiButton = () => {
  
    // Função que dispara os confetes
    const handleConfetti = () => {
      let params = {
        particleCount: 500, // Quantidade de confetes
        spread: 90, // O quanto eles se espalham
        startVelocity: 70, // Velocidade inicial
        origin: { x: 0, y: 0.5 }, // Posição inicial na tela
        angle: 45 // Ângulo em que os confetes serão lançados
      };
  
      // Joga confetes da esquerda para a direita
      confetti(params);
  
      // Joga confetes da direita para a esquerda
      params.origin.x = 1;
      params.angle = 135;
      confetti(params);
    };
  
    return (
      <div>
        <button onClick={handleConfetti} className="confetti-button">
          OK 👍🏼
        </button>
      </div>
    );
  };
  
  export default ConfettiButton;