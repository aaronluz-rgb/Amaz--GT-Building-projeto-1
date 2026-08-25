// Config gerado a partir de bobber-timelapse/PROMPT-MASTER.md (Seções 2, 3, 4 e 5).
// Uso: CONTEXT.* são as fichas de continuidade (Character Sheet / Object Lock);
// SCENES já traz, por cena, o prompt final pronto para colar em qualquer
// gerador de vídeo por IA (Kling, Luma, Pika, Google Flow etc.).

export const CONTEXT = {
  aspectRatio: "9:16",
  resolution: "1080x1920",

  characterSheet: `Homem, cerca de 45–50 anos, cabeça 100% raspada/careca (mantida em todas as cenas), pele clara com tom levemente bronzeado, olhos castanhos, rosto anguloso, barba por fazer rala (stubble curto, não cheia), compleição mediana/atlética, altura média. Figurino old school/bobber fixo, sujo de graxa progressivamente ao longo da construção: camiseta branca lisa ou camisa henley cinza de manga curta, colete de couro preto old school por cima nas cenas de oficina, calça jeans reta escura, tênis Vans old school (modelo baixo, xadrez preto e branco ou preto liso — no lugar da bota tradicional), pulseira/bracelete de couro no pulso, óculos de sol aviador pendurado na gola quando não estiver soldando/pintando, relógio analógico. Sem acessórios modernos (nada de smartwatch, boné com logo atual). Postura de trabalhador, gestos precisos e old school, ritmo de mestre artesão.`,

  sidekickSheet: `Ajudante de oficina: homem mais jovem, 20–30 anos, cabelo curto castanho escuro penteado para trás, rosto magro, sem barba ou com bigode fino old school, compleição magra/ágil. Figurino fixo: camiseta cinza de manga curta enrolada até o ombro, calça jeans desbotada, boné old school dobrado para trás (aba curva), botas de trabalho old school, luvas de couro curtas quando manuseia peças quentes/soldadas. Nunca é o protagonista da cena.`,

  motoLock: `bobber motorcycle, carbureted Harley-Davidson Panhead V-twin engine, rigid drop-seat hardtail frame painted matte black, hand-hammered sheet metal peanut fuel tank, cylindrical hand-hammered oil bag under the solo leather seat, spoked wheels, chrome handlebar and exhaust pipes, matte black paint with hand-painted red and gold pinstriping and lettering on the tank — exact same motorcycle in every shot, only assembly stage changes`,

  visualStyle: `Fotografia old school, grão de filme sutil (film grain), paleta quente e levemente dessaturada (âmbar/sépia na oficina, contraste alto no sol da estrada), iluminação dura tipo lâmpada incandescente de oficina nas cenas internas e luz natural dourada (golden hour) na Cena 9. Transições em corte seco entre cenas, sem dissolves modernos.`,

  negativePrompt: `troca de rosto do personagem principal, personagem com cabelo, personagem careca virando personagem com cabelo, mudança de figurino entre cenas, moto diferente entre cenas, mudança de cor da pintura, tanque/quadro/motor com formato diferente do definido, elementos modernos (parafusadeira elétrica, CNC, robótica, smartwatch, boné com logo atual), personagens extras não descritos no elenco`,
};

/**
 * Concatena o contexto global (personagem + moto-lock) com a ação
 * específica de uma cena, na ordem exigida pela "regra de ouro" do
 * roteiro: personagem(ns) primeiro, moto-lock em seguida, ação por último.
 */
function buildPrompt(scene) {
  const parts = [CONTEXT.characterSheet];
  if (scene.hasSidekick) parts.push(CONTEXT.sidekickSheet);
  parts.push(CONTEXT.motoLock, CONTEXT.visualStyle, scene.action);
  return parts.join("\n\n");
}

const sceneDefs = [
  {
    id: 1,
    title: "Chegada na oficina",
    timecode: "0:00–0:08",
    durationSeconds: 8,
    hasSidekick: true,
    cameraMovement:
      "Tripé fixo, plano geral estático (sem timelapse acelerado nesta cena introdutória), leve handheld sutil ao personagem principal entrar em quadro.",
    lighting: "Luz de lâmpada incandescente, poeira flutuando no facho de luz pela janela.",
    audio:
      "Som real e grave de um V-twin Panhead ecoando brevemente ao fundo (referência sonora/trilha, motor ainda não ligado nesta cena).",
    action: `Personagem principal chega a uma oficina old school com peças de motocicleta espalhadas por bancadas e pelo chão: rodas raiadas encostadas na parede, chapas de metal cortadas, ferramentas antigas penduradas, um motor Harley-Davidson Panhead carburado já isolado sobre um cavalete de montagem, enquanto ele observa o projeto — todas as peças da futura bobber estão ali, mas ainda desmontadas. O ajudante de oficina está ao fundo organizando ferramentas na bancada.`,
  },
  {
    id: 2,
    title: 'Fabricação do quadro rígido "drop-seat"',
    timecode: "0:08–0:17",
    durationSeconds: 9,
    hasSidekick: true,
    cameraMovement:
      "Tripé fixo, timelapse acelerado sobre a bancada de solda, leve zoom-in gradual no ponto de solda.",
    lighting: "Faíscas de solda MIG/TIG iluminando a cena, ambiente de oficina old school.",
    audio: "Ruído de oficina: esmerilhadeira e solda.",
    action: `Timelapse artesanal na bancada de solda: tubos de aço sendo cortados, curvados e soldados à mão, gabarito de montagem do quadro rígido (hardtail) fixando os tubos enquanto o personagem principal solda ponto a ponto até formar o quadro completo no estilo "drop-seat" (travessa central rebaixada), com o ajudante de oficina segurando o gabarito e entregando as peças de tubo cortadas. Uso de esmerilhadeira para acabamento dos cordões de solda. Ritmo old school, sem CNC ou robótica visível — tudo manual.`,
  },
  {
    id: 3,
    title: "Construção artesanal do tanque de combustível",
    timecode: "0:17–0:26",
    durationSeconds: 9,
    hasSidekick: false,
    cameraMovement:
      "Tripé fixo, timelapse acelerado, closes intercalados nas mãos batendo o metal (macro shot).",
    lighting: "Luz de oficina refletindo na textura do metal cru.",
    audio: "Ruído de oficina: martelo de chapeamento.",
    action: `Sobre uma bigorna/molde, o personagem principal martela e curva chapas de aço a frio (metal shaping/wheeling machine old school) até formar o corpo do tanque clássico (peanut tank), solda as duas metades da chapa, lixa e aplica massa de acabamento. Closes nas mãos batendo o metal com martelo de borracha, textura do metal cru refletindo a luz da oficina.`,
  },
  {
    id: 4,
    title: "Construção do compartimento de óleo cilíndrico",
    timecode: "0:26–0:34",
    durationSeconds: 8,
    hasSidekick: false,
    cameraMovement:
      "Tripé fixo, timelapse acelerado, ângulo levemente elevado acompanhando a calandra enrolando a chapa.",
    lighting: "Luz de oficina, mesma continuidade das Cenas 2 e 3.",
    audio: "Ruído de oficina: martelo de chapeamento e solda.",
    action: `Mesmo processo artesanal em chapa metálica, agora enrolando a chapa em forma cilíndrica (calandra manual old school), soldando a costura longitudinal e as tampas das extremidades do oil bag, testando o encaixe sob o banco do quadro já pronto (o mesmo quadro da Cena 2).`,
  },
  {
    id: 5,
    title: 'Pintura old school "mestre do pincel"',
    timecode: "0:34–0:44",
    durationSeconds: 10,
    hasSidekick: false,
    cameraMovement:
      "Câmera em movimento, close lento (slow push-in) acompanhando a ponta do pincel, velocidade real (sem timelapse).",
    lighting: "Luz suave de estúdio, ambiente de pintura mais controlado (menos poeira).",
    audio: "Silêncio ou trilha instrumental old rock-blues.",
    action: `Oficina de pintura old school: tanque e quadro já pintados na base preta fosca, e o próprio personagem principal — no papel de "mestre do pincel" — usando pincel fino e mão firme, traça linhas de pinstriping em vermelho e dourado e um lettering old school combinando as duas cores na lateral do tanque, destacando o contraste do vermelho/dourado sobre o fundo preto fosco.`,
  },
  {
    id: 6,
    title: "Todas as peças brilhando, prontas",
    timecode: "0:44–0:52",
    durationSeconds: 8,
    hasSidekick: true,
    cameraMovement:
      "Travelling lento (dolly lateral) passando por cada peça em destaque, velocidade real.",
    lighting: "Luz batendo e refletindo no cromado e na pintura — plano tipo 'reveal'.",
    audio: "Silêncio ou trilha instrumental old rock-blues, sem ruído de oficina.",
    action: `Painel/plano geral em um espaço protegido e limpo (bancada forrada ou tapete de feltro): todas as peças já finalizadas — quadro pintado, tanque com pinstriping, oil bag montado, rodas raiadas polidas, motor Panhead limpo e brilhando, escapes cromados — organizadas lado a lado. O ajudante de oficina passa um pano nas peças, dando os últimos retoques de limpeza antes do personagem principal assumir a montagem.`,
  },
  {
    id: 7,
    title: "Montagem final com detalhe old school",
    timecode: "0:52–1:02",
    durationSeconds: 10,
    hasSidekick: false,
    cameraMovement:
      "Tripé fixo, timelapse acelerado, plano geral da bancada de montagem com cortes rápidos entre etapas.",
    lighting: "Luz de oficina, mesma continuidade das cenas anteriores.",
    audio: "Ruído de oficina: chave de boca, encaixe de peças metálicas.",
    action: `Timelapse de montagem: personagem principal instala o motor Panhead no quadro rígido, encaixa o tanque, fixa o oil bag sob o banco solo, monta as rodas raiadas, aperta parafuso a parafuso com chave old school (nada de parafusadeira elétrica visível), conecta os cabos e a fiação exposta estilo vintage. Cada peça que entra é exatamente a mesma peça mostrada nas cenas anteriores (mesma cor, mesmo formato).`,
  },
  {
    id: 8,
    title: "Moto pronta",
    timecode: "1:02–1:08",
    durationSeconds: 6,
    hasSidekick: false,
    cameraMovement:
      "Câmera em movimento, contra-luz + luz lateral tipo reveal de estúdio, leve dolly-in no personagem.",
    lighting: "Iluminação tipo 'reveal' de estúdio: contra-luz + luz lateral.",
    audio: "Som real e grave de partida de Panhead carburado.",
    action: `Plano final da bobber 100% montada, o personagem principal dá um passo atrás, observa a moto pronta com orgulho, liga o motor pela primeira vez — fumaça leve do escape.`,
  },
  {
    id: 9,
    title: "Pilotando na Route 66",
    timecode: "1:08–1:18",
    durationSeconds: 10,
    hasSidekick: false,
    cameraMovement:
      "Câmera em movimento, tracking lateral baixo (câmera baixa acompanhando a moto), finaliza com plano aberto (wide shot) da moto se afastando na estrada.",
    lighting: "Golden hour, luz natural dourada.",
    audio: "Som do escapamento V-twin dominando a trilha.",
    action: `Corte para exterior: estrada Route 66 (placas/horizonte desértico característicos), o personagem principal — com o mesmo figurino, rosto e a mesma motocicleta exata das cenas anteriores — pilota a bobber old school, sentado ereto no solo seat, colete de couro preto por cima da camiseta branca, tênis Vans, cabeça raspada exposta ou com bandana old school amarrada.`,
  },
];

export const SCENES = sceneDefs.map((scene) => ({
  ...scene,
  prompt: buildPrompt(scene),
}));

export const TOTAL_DURATION_SECONDS = SCENES.reduce(
  (sum, scene) => sum + scene.durationSeconds,
  0,
);

export default { CONTEXT, SCENES, TOTAL_DURATION_SECONDS };
