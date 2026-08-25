# Timelapse — Construção de uma Motocicleta Bobber Old School
### Prompt mestre corrigido e detalhado para geração de vídeo por IA

---

## 0. O que foi corrigido no prompt original

O texto original tinha ambiguidades que, em geração de IA, quase sempre causam
o problema que você mesmo apontou como proibido: **troca de personagem e de
moto no meio do vídeo**. Isso acontece porque cada cena, gerada isolada, é
interpretada pela IA sem memória da cena anterior. Correções feitas:

| Trecho original | Problema | Correção |
|---|---|---|
| "a moto escolhido, um panhead carburado" | Confunde moto com motor | **O motor** escolhido é o Panhead carburado — a moto ainda não existe, ela nasce a partir dele |
| "quadro da moto no estilo drop-seat rígido" | Termo técnico sem contexto | **Quadro rígido tipo "hardtail" com drop-seat** (sem suspensão traseira, assento baixo apoiado direto no quadro) — características que devem se manter idênticas em todas as cenas seguintes |
| "old scholl" | Erro de digitação | "old school" |
| "Rout 66" | Erro de digitação | "Route 66" |
| "motagem" | Erro de digitação | "montagem" |
| Sem descrição fixa de personagem/moto | Maior causa de inconsistência em IA generativa | Criadas **fichas de continuidade** (Seções 2 e 3) que devem ser reaproveitadas literalmente em toda cena gerada |
| Sem definição de formato técnico (proporção, duração, fps, áudio) | Gera pipeline solto entre cenas | Definido em Seção 4 |
| "criar um estilo bobber da minha foto" | Precisa de uma ficha de personagem consistente, não só uma descrição solta | Como a geração de imagem esbarrou em bloqueios de plano pago (Seção 1), o personagem virou fictício mas com identidade 100% fixa na Seção 2 (careca, stubble, colete de couro, tênis Vans) |

---

## 1. Geração de imagem do personagem — tentativas e decisão final

Tentei gerar a imagem de referência do personagem (character sheet) por
três caminhos diferentes, nesta ordem, e todos esbarraram em bloqueio de
plano pago:

1. **Morphix** — descartado a seu pedido (sem créditos disponíveis).
2. **HeyGen** (avatar a partir da sua foto, via `create_prompt_avatar`) —
   cheguei a subir sua foto como asset (upload concluído com sucesso), mas
   a chamada de geração retornou **"Avatar creation requires a paid
   plan"** — sua conta HeyGen está no plano gratuito, que não libera esse
   recurso.
3. **Adobe Firefly** (ferramentas conectadas nesta sessão) — indisponível
   para este uso: as ferramentas de imagem da Adobe aqui só fazem seleção/
   máscara e ajustes (brilho, cor, recorte) em cima de uma imagem já
   existente; edição/geração generativa de conteúdo novo **não está
   habilitada** nesta conexão.

**Decisão (sua, confirmada):** já que nenhuma ferramenta de geração de
imagem está disponível sem custo extra agora, seguimos sem gerar uma
imagem de referência. O personagem passa a ser **fictício, mas com
identidade 100% fixa** — não precisa mais reproduzir seu rosto real, só
precisa ser **sempre o mesmo do início ao fim da produção** (sua exigência
nº 1, que continua valendo). A ficha detalhada da Seção 2 já cumpre esse
papel: é o texto que você cola, **palavra por palavra, em toda cena**, ao
usar a ferramenta de geração de vídeo por IA que você escolher (Sora, Veo,
Kling, Runway etc.) — é isso, e não uma imagem, que trava a consistência
quando não há reference-image disponível.

Se mais adiante você tiver créditos em alguma dessas ferramentas (ou outra
de sua preferência), o mesmo texto da Seção 2 serve como prompt para gerar
a imagem de referência a qualquer momento — o documento não muda.

---

## 2. Ficha de continuidade — Personagens (não alterar em nenhuma cena)

### Personagem principal — o construtor/motociclista
- **Identidade visual (personagem fictício de identidade fixa — mesma
  descrição em todas as cenas, do início ao fim):** homem, cerca de 45–50
  anos, cabeça raspada/careca, pele clara com tom levemente bronzeado,
  olhos castanhos, rosto anguloso, barba por fazer rala (stubble curto,
  não cheia), compleição mediana/atlética, altura média.
- **Cabelo:** careca (sem cabelo) — mantém a cabeça raspada em **todas** as
  cenas, do início ao fim.
- **Figurino old school/bobber (fixo em todas as cenas, sujo de graxa
  progressivamente ao longo da construção):** camiseta branca lisa ou
  camisa henley cinza de manga curta, colete de couro preto old school por
  cima nas cenas de oficina, calça jeans reta escura, **tênis Vans old
  school** (modelo baixo, xadrez preto e branco ou preto liso — no lugar da
  bota tradicional, por pedido do usuário), pulseiras/bracelete de couro no
  pulso, óculos de sol aviador pendurado na gola quando não estiver
  soldando/pintando, relógio analógico. Sem acessórios modernos (nada de
  smartwatch, boné com logo atual).
- **Marcas de identidade:** cabeça 100% raspada e stubble curto são os dois
  traços que mais precisam se repetir literalmente em cada prompt de cena
  — são os elementos que mais rápido "escapam" em gerações de IA.
- **Postura:** mãos de trabalhador, gestos precisos e old school (sem pressa
  "cinematográfica" exagerada, ritmo de mestre artesão).

### Personagem coadjuvante — ajudante de oficina (confirmado no elenco)
- **Identidade visual fixa (mesma descrição em toda cena em que aparecer):**
  homem mais jovem, 20–30 anos, cabelo curto castanho escuro penteado para
  trás, rosto magro, sem barba ou com bigode fino old school, compleição
  magra/ágil.
- **Figurino fixo:** camiseta cinza de manga curta enrolada até o ombro,
  calça jeans desbotada, boné old school dobrado para trás (aba curva),
  botas de trabalho old school, luvas de couro curtas quando manuseia
  peças quentes/soldadas.
- **Participação:** aparece apenas nas Cenas 1, 2 e 6, entregando
  ferramentas/peças ao personagem principal — nunca é o protagonista da
  cena, nunca aparece na Cena 9 (Route 66).

> **Regra de ouro:** todo prompt de cena enviado ao gerador de vídeo deve
> **colar o parágrafo do personagem acima, palavra por palavra**, junto com
> a imagem de referência. Nunca descrever o personagem "de memória" ou
> resumido — pequenas variações de texto entre cenas já bastam para a IA
> gerar um rosto ligeiramente diferente.

---

## 3. Ficha de continuidade — A Motocicleta (não alterar em nenhuma cena)

Esta é a "bíblia técnica" da moto. Ela nasce na Cena 1 (peças soltas) e
termina na Cena 9 (rodando), mas **é sempre a mesma moto** — mesmas
proporções, mesma cor, mesmas peças, apenas em estágios diferentes de
montagem.

- **Motor:** Harley-Davidson Panhead, carburador (aspiração natural, sem
  injeção eletrônica), motor bicilíndrico em V a 45°, cárter e cabeçotes em
  alumínio/preto fosco envelhecido, escapes duplos old school (glasspack/
  megafone), **som real e grave de V-twin Panhead carburado** (não o som
  genérico de moto esportiva).
- **Quadro (frame):** rígido (hardtail), sem amortecedor traseiro, estilo
  "drop-seat" (travessa central rebaixada para o assento ficar próximo do
  chão), soldado à mão, aço tubular pintado em preto fosco old school.
- **Tanque de combustível:** modelo clássico "peanut tank" ou "king tank"
  (defina um e mantenha o mesmo desenho em todas as cenas), construído em
  chapa de aço batida à mão, sem plástico.
- **Reservatório/compartimento de óleo (oil bag):** formato cilíndrico
  horizontal sob o banco, mesma chapa metálica batida à mão, mesmo diâmetro
  em todas as cenas.
- **Rodas:** aro raiado (spoke wheels), pneus com banda de rodagem estreita
  estilo vintage, dianteira em garfo rígido ou springer old school.
- **Banco (seat):** solo seat de couro, estofado individual, sem banco
  duplo.
- **Pintura final (confirmada):** base preta fosca old school, com detalhes
  em **vermelho e dourado** — pinstriping duplo (linha fina vermelha
  acompanhada de linha dourada) contornando tanque e para-lamas, e lettering
  old school no tanque combinando as duas cores ("mestre do pincel").
- **Acabamento:** peças cromadas (faróis, guidão, escapes) contrastando com
  a pintura fosca do quadro/tanque.

> **Regra de ouro:** assim como o personagem, cole esta ficha completa (ou a
> versão resumida "moto-lock" abaixo) em cada prompt de cena, e sempre que o
> gerador aceitar imagem de referência, anexe uma imagem/frame da moto já
> definida (pode ser um render/ficha técnica gerada antes da Cena 1) além do
> texto.

**Versão resumida para colar em prompts curtos ("moto-lock"):**
> *bobber motorcycle, carbureted Harley-Davidson Panhead V-twin engine,
> rigid drop-seat hardtail frame painted matte black, hand-hammered sheet
> metal peanut fuel tank, cylindrical hand-hammered oil bag under the solo
> leather seat, spoked wheels, chrome handlebar and exhaust pipes, matte
> black paint with hand-painted red and gold pinstriping and lettering on
> the tank — exact same motorcycle in every shot, only assembly stage
> changes*

---

## 4. Especificações técnicas do vídeo

- **Formato:** **9:16 vertical (1080x1920)**, padrão Reels/Stories/TikTok
  (confirmado). Todas as 9 cenas devem ser enquadradas nativamente em
  vertical — não é um corte de um vídeo 16:9: composição pensada para o
  quadro alto desde o storyboard (oficina, bancadas e a moto centralizados
  verticalmente, closes de mãos/peças aproveitando a altura do quadro, e na
  Cena 9 a estrada em plano baixo com a moto ocupando o centro do frame ao
  invés de um plano panorâmico largo que ficaria cortado nas laterais).
- **Duração sugerida por cena:** 6–10s cada, total aproximado de 60–90s
  (9 cenas), estilo timelapse com cortes secos ou fusão curta entre cenas.
- **Estilo visual:** fotografia old school, grão de filme sutil (film
  grain), paleta quente e levemente dessaturada (âmbar/sépia na oficina,
  contraste alto no sol da estrada), iluminação dura tipo lâmpada
  incandescente de oficina nas cenas internas e luz natural dourada
  (golden hour) na Cena 9.
- **Câmera:** predominância de tripé fixo com timelapse acelerado nas cenas
  de oficina (2–5), e câmera em movimento (tracking/drone baixo) na Cena 9.
- **Áudio:** ruído de oficina (marreta, esmerilhadeira, solda, martelo de
  chapeamento) nas Cenas 2–4; silêncio/trilha instrumental old
  rock-blues na Cena 5 (pintura); e o **som real e grave de escapamento
  Panhead carburado** dominando as Cenas 8 e 9.
- **Transições:** corte seco entre cenas (estética de timelapse
  documental), sem dissolves modernos que quebrem o clima old school.

---

## 5. Roteiro cena a cena (versão corrigida e enriquecida)

> Em cada cena abaixo, **sempre inicie o prompt real enviado ao gerador** com:
> 1. a ficha do personagem (Seção 2),
> 2. a versão "moto-lock" da moto (Seção 3),
> 3. e só depois a ação específica da cena.
> Isso é o que garante zero alteração de moto/personagem entre cenas.

### Cena 1 — Chegada na oficina (0:00–0:08)
Personagem principal chega a uma oficina old school com peças de motocicleta
espalhadas por bancadas e pelo chão: rodas raiadas encostadas na parede,
chapas de metal cortadas, ferramentas antigas penduradas, um motor
Harley-Davidson Panhead carburado já isolado sobre um cavalete de montagem,
com o **som real e grave de um V-twin Panhead** ecoando brevemente ao fundo
(referência sonora/trilha, ainda não ligado nesta cena) enquanto ele observa
o projeto — todas as peças da futura bobber estão ali, mas ainda
desmontadas. O ajudante de oficina (personagem coadjuvante) está ao fundo
organizando ferramentas na bancada. Luz de lâmpada incandescente, poeira
flutuando no facho de luz pela janela.

### Cena 2 — Fabricação do quadro rígido "drop-seat" (0:08–0:17)
Timelapse artesanal na bancada de solda: tubos de aço sendo cortados,
curvados e soldados à mão (faíscas de solda MIG/TIG), gabarito de montagem
do quadro rígido (hardtail) fixando os tubos enquanto o personagem principal
solda ponto a ponto até formar o quadro completo no estilo "drop-seat"
(travessa central rebaixada), com o ajudante de oficina segurando o gabarito
e entregando as peças de tubo cortadas. Uso de esmerilhadeira para
acabamento dos cordões de solda. Ritmo old school, sem CNC ou robótica
visível — tudo manual.

### Cena 3 — Construção artesanal do tanque de combustível (0:17–0:26)
Sobre uma bigorna/molde, o personagem principal martela e curva chapas de
aço a frio (metal shaping/wheeling machine old school) até formar o corpo
do tanque clássico (peanut tank), solda as duas metades da chapa,
lixa e aplica massa de acabamento. Closes nas mãos batendo o metal com
martelo de borracha, textura do metal cru refletindo a luz da oficina.

### Cena 4 — Construção do compartimento de óleo cilíndrico (0:26–0:34)
Mesmo processo artesanal em chapa metálica, agora enrolando a chapa em
forma cilíndrica (calandra manual old school), soldando a costura
longitudinal e as tampas das extremidades do oil bag, testando o encaixe
sob o banco do quadro já pronto (o mesmo quadro da Cena 2).

### Cena 5 — Pintura old school "mestre do pincel" (0:34–0:44)
Oficina de pintura old school (menos poeira, ambiente mais controlado):
tanque e quadro já pintados na base preta fosca definida na Seção 3, e o
próprio personagem principal — no papel de "mestre do pincel" —
usando pincel fino e mão firme, traça linhas de pinstriping em
**vermelho e dourado** e um lettering old school combinando as duas cores
na lateral do tanque. Luz suave de estúdio, câmera em close lento
acompanhando a ponta do pincel, destacando o contraste do vermelho/dourado
sobre o fundo preto fosco.

### Cena 6 — Todas as peças brilhando, prontas (0:44–0:52)
Painel/plano geral em um espaço protegido e limpo (bancada forrada ou
tapete de feltro): todas as peças já finalizadas — quadro pintado, tanque
com pinstriping, oil bag montado, rodas raiadas polidas, motor Panhead
limpo e brilhando, escapes cromados — organizadas lado a lado. Câmera em
travelling lento passando por cada peça em destaque, luz batendo e
refletindo no cromado e na pintura (esse é o "reveal" antes da montagem
final). O ajudante de oficina passa um pano nas peças, dando os últimos
retoques de limpeza antes do personagem principal assumir a montagem.

### Cena 7 — Montagem final com detalhe old school (0:52–1:02)
Timelapse de montagem: personagem principal instala o motor Panhead no
quadro rígido, encaixa o tanque, fixa o oil bag sob o banco solo, monta as
rodas raiadas, aperta parafuso a parafuso com chave old school (nada de
parafusadeira elétrica visível), conecta os cabos e a fiação exposta estilo
vintage. Cada peça que entra é exatamente a mesma peça mostrada nas cenas
anteriores (mesma cor, mesmo formato).

### Cena 8 — Moto pronta (1:02–1:08)
Plano final da bobber 100% montada, iluminação tipo "reveal" de estúdio
(contra-luz + luz lateral), o personagem principal dá um passo atrás,
observa a moto pronta com orgulho, liga o motor pela primeira vez — **som
real e grave de partida de Panhead carburado**, fumaça leve do escape.

### Cena 9 — Pilotando na Route 66 (1:08–1:18)
Corte para exterior: estrada Route 66 (placas/horizonte desértico
característicos), golden hour, o personagem principal — **com o mesmo
figurino, rosto e a mesma motocicleta exata** das cenas anteriores — pilota
a bobber old school, sentado ereto no solo seat, colete de couro preto por
cima da camiseta branca, tênis Vans, cabeça raspada exposta ou com bandana
old school amarrada (mesma base de figurino da Seção 2), som do escapamento
V-twin dominando a trilha. Câmera acompanha em tracking lateral baixo e
finaliza
com plano aberto da moto se afastando na estrada.

---

## 6. Checklist antes de gerar o vídeo

- [x] Personagem principal definido: **fictício, com identidade 100% fixa**
      (Seções 1 e 2) — geração de imagem via Morphix, HeyGen e Adobe
      tentada e bloqueada por plano pago; segue como ficha em texto
- [x] Proporção final: **9:16** (confirmado)
- [x] Cor de pintura final da moto: **preta fosca com detalhes em vermelho
      e dourado** (confirmado)
- [x] Elenco confirmado: protagonista + ajudante de oficina coadjuvante
      (Seção 2), ambos com ficha visual fixa
- [ ] Colar a ficha de personagem (Seção 2) e a ficha "moto-lock" (Seção 3)
      **literalmente, no início de todo prompt de cena**, ao gerar cada uma
      das 9 cenas na ferramenta de vídeo por IA escolhida
- [ ] Se em algum momento você tiver créditos disponíveis em alguma
      ferramenta de imagem, gerar a partir da Seção 2 uma imagem de
      referência fixa e reutilizá-la (seed/reference-image) em todas as
      cenas — passo opcional, não bloqueia a produção

---

## 7. Onde gerar em plataforma gratuita

Nenhuma das ferramentas conectadas a esta sessão (Morphix, HeyGen, Adobe,
Canva) tem um caminho gratuito para este tipo de vídeo cinematográfico —
todas exigem plano pago ou créditos para gerar imagem/vídeo com esse nível
de qualidade e continuidade (Seção 1). **Isso precisa ser feito fora desta
conversa**, direto no site/app da plataforma escolhida, colando os textos
deste documento. Nenhuma delas está conectada às minhas ferramentas, então
não consigo operar a geração por você — mas indico as opções com camada
gratuita real hoje:

| Plataforma | Camada gratuita | Observação |
|---|---|---|
| **Kling AI** (klingai.com) | Créditos diários grátis | Boa qualidade de vídeo, aceita imagem de referência (image-to-video) e texto; hoje é uma das melhores opções gratuitas para esse estilo cinematográfico |
| **Luma Dream Machine** (lumalabs.ai) | Gerações limitadas/mês grátis | Boa para closes e texturas (solda, chapa, pintura) |
| **Pika Labs** (pika.art) | Créditos grátis limitados | Boa para cenas de ação/movimento de câmera |
| **Hailuo/MiniMax** (hailuoai.video) | Créditos diários grátis | Alternativa quando as outras esgotarem os créditos do dia |
| **CapCut (recursos de IA)** | Grátis com marca d'água/limites | Mais fraco em fotorrealismo, mas útil para testar enquadramento 9:16 rapidamente |

**Como usar o documento em qualquer uma delas:**
1. Abra a plataforma escolhida e crie uma cena por vez (a maioria limita
   cada geração a 5–10s, o que já bate com a duração sugerida na Seção 4).
2. Em cada geração, **cole primeiro o texto completo da Seção 2**
   (personagens) **+ a versão "moto-lock" da Seção 3** (moto), e só depois
   a ação específica da cena (Seção 5).
3. Baixe cada clipe gerado e junte os 9 na ordem certa em qualquer editor
   gratuito (CapCut, DaVinci Resolve gratuito, ou o próprio editor da
   plataforma escolhida).
4. Como os créditos diários gratuitos costumam ser poucos, talvez seja
   necessário gerar 1–2 cenas por dia ao longo de alguns dias — isso é
   normal nesse tipo de plataforma.
