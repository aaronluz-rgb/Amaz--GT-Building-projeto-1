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
| **Google Flow** (labs.google/flow) | Teste gratuito por tempo/uso limitado — depois exige Google AI Pro/Ultra (pago) | Ver observação especial abaixo — é a ferramenta mais alinhada à sua exigência nº 1 |

### Nota especial — Google Flow e o recurso "Ingredients to Video"

O Google Flow (Veo, via labs.google/flow) tem um recurso chamado
**"Ingredients to Video"**: você sobe até 3 imagens de referência (ex.: uma
imagem do personagem principal, uma do ajudante, uma da moto) e o modelo
mantém a aparência delas fixa em todas as cenas geradas a partir dali —
é literalmente a solução de fábrica para o problema que você levantou
desde o início (moto e personagens nunca podem mudar). Se você tiver
acesso ao Flow (hoje depende de assinatura Google AI Pro/Ultra na maioria
das regiões, com algum uso de teste limitado):

1. Gere (ou peça a mim para redigir) uma imagem única de cada
   "ingrediente" — protagonista, ajudante e a moto montada — usando o
   texto das Seções 2 e 3 como prompt em qualquer gerador de imagem.
2. Suba essas 3 imagens como "Ingredients" no Flow.
3. Gere cada uma das 9 cenas (Seção 5) apontando para esses mesmos
   ingredientes — a ferramenta cuida da consistência visual por você, sem
   precisar colar a ficha de texto inteira em cada prompt.

**Como usar o documento nas demais plataformas (sem esse recurso):**
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

---

## 8. Correção pós-teste — moto mudou de formato e o colete sumiu

Você testou e relatou dois problemas no vídeo gerado: **a moto mudou de
formato perto do final** e **o personagem apareceu sem o colete de couro**
(estilo do "dono da moto" não ficou como definido). Isso é um sintoma
clássico de geração de vídeo por IA e tem duas causas prováveis:

1. **Prompt longo demais.** A ficha completa das Seções 2+3 tem mais de
   1.500 caracteres. A maioria das plataformas gratuitas (Kling, Pika,
   Luma, Hailuo) tem um limite de prompt bem menor — o excesso costuma ser
   **cortado silenciosamente** ou perder peso, e é comum que detalhes de
   figurino (como "colete de couro") sejam os primeiros a se perder.
2. **Falta de reforço no fim do prompt.** Modelos de vídeo tendem a dar
   mais peso às últimas instruções lidas. Se a trava de consistência só
   aparece no início do prompt e a ação da cena é longa, o modelo
   "esquece" a trava até o final do clipe — efeito mais visível quanto mais
   tarde a cena aparece na sequência (por isso o problema apareceu perto
   do final).

### A correção: trava curta, repetida no início E no fim

Em vez da ficha completa (Seções 2 e 3), use esta versão **curta e
compacta** — ela cabe no limite de praticamente qualquer plataforma e deve
ser colada **duas vezes em cada prompt de cena: uma no início, outra bem no
final**, depois da ação:

**Trava curta do personagem (colar sempre, início e fim):**
> *Bald man, shaved head, short stubble beard, ALWAYS wearing an open
> black leather vest over a white t-shirt — never remove the vest, never
> add hair, same outfit in every frame.*

**Trava curta da moto (colar sempre, início e fim):**
> *Matte black bobber motorcycle with red and gold pinstriping, rigid
> hardtail drop-seat frame, peanut fuel tank, cylindrical oil bag, spoked
> wheels, chrome exhaust — exact same shape, proportions and color in
> every frame, do not redesign the motorcycle.*

**Modelo de prompt por cena (formato final a usar na plataforma):**
```
[TRAVA CURTA — PERSONAGEM]
[TRAVA CURTA — MOTO]

[AÇÃO ESPECÍFICA DA CENA — mantenha curta e direta, 2–3 frases no máximo]

[TRAVA CURTA — PERSONAGEM, repetida]
[TRAVA CURTA — MOTO, repetida]
```

**Outras medidas que ajudam:**
- Se a plataforma tiver campo de **prompt negativo**, use sempre:
  `remove vest, no vest, different motorcycle, redesigned motorcycle,
  different tank shape, different frame shape, character with hair`.
- Se a plataforma permitir **imagem de referência fixa** (reference-image
  ou "ingredients", como no Google Flow), prefira sempre isso ao texto —
  imagem trava muito mais forte que texto repetido.
- Gere as cenas finais (7, 8 e 9) **de novo, isoladas**, usando só a trava
  curta acima — não precisa regerar o vídeo inteiro, só as cenas onde o
  problema apareceu.
- O arquivo `bobber-timelapse/hyperframes.config.js` já foi atualizado com
  essa trava curta (`CONTEXT.characterLockShort` e `CONTEXT.motoLockShort`)
  e o `buildPrompt()` agora repete a trava no início e no fim de cada
  `scene.prompt` automaticamente.

---

## 9. Correção específica — gerando com Nano Banana (Gemini)

Você mandou 3 imagens geradas no Nano Banana (Gemini) e o problema ali é
mais grave que só "faltou o colete": **as 3 fotos mostram 3 homens
diferentes** — nenhum careca, nenhum com o colete definido. Isso não é um
desvio de detalhe, é uma pessoa nova sendo inventada a cada geração.

**Causa:** o Nano Banana, como qualquer gerador de imagem por texto, não
tem memória de um rosto específico entre gerações separadas. Se cada uma
das 9 imagens for pedida como um prompt de texto novo (mesmo colando a
ficha completa), o modelo reinterpreta a descrição do zero toda vez e
sorteia um rosto diferente — texto aproxima idade/roupa/cenário, mas não
trava identidade facial.

**A correção certa para o Nano Banana especificamente — modo edição, não
geração nova:** o Nano Banana é muito melhor em **editar uma imagem já
existente** (mantendo o que já está nela) do que em gerar do zero. O fluxo
precisa mudar para:

1. **Gere só UMA imagem de referência primeiro** — o personagem principal
   sozinho, em pé, olhando de frente, sem ação nenhuma ainda. Use a ficha
   completa da Seção 2 como prompt. Repita/regenere até essa imagem sair
   com cabeça careca + colete de couro do jeito certo — só avance quando
   essa primeira imagem estiver aprovada por você.
2. **Para cada cena seguinte, não abra um prompt novo do zero.** Na mesma
   conversa do Gemini, **anexe a última imagem aprovada/gerada** e peça uma
   edição sobre ela, não uma criação nova. Modelo de instrução:
   > *"Nesta mesma imagem, mantenha o personagem exatamente idêntico
   > (mesmo rosto, careca, mesmo colete de couro preto, mesma roupa) e a
   > moto exatamente idêntica. Altere apenas a ação/cenário para:
   > [ação específica da Cena X, da Seção 5]. Não redesenhe o personagem
   > nem a moto — apenas mude a pose/ambiente conforme descrito."*
3. **Use sempre a imagem mais recente aprovada como base da próxima
   edição** — não volte a usar a imagem original da Cena 1 para gerar a
   Cena 5, use a imagem da Cena 4 (a cadeia precisa ser sequencial, cada
   cena editando a anterior) para a moto ir "evoluindo" de peça solta até
   montada, mas com o mesmo personagem em todas.
4. Se em algum ponto a edição sair errada (personagem mudou), **não
   continue a partir dela** — peça a edição de novo a partir da última
   imagem que estava certa.

Resumindo: no Nano Banana o "character-lock" não é o texto repetido (isso
é para plataformas de vídeo puro-texto, Seção 8) — é o **encadeamento de
edições sobre a mesma imagem**, sempre dentro da mesma conversa.

---

## 10. Segunda rodada de teste — diagnóstico e imagem-âncora escolhida

Você mandou as 9 fotos geradas. Análise direta:

**A Cena 9 (Route 66) é a única que bateu com a ficha:** colete de couro
preto aberto, camiseta branca, jeans, tênis estilo Vans. **Essa é agora a
imagem-âncora oficial do projeto**, salva em
`bobber-timelapse/assets/referencia-aprovada-cena9-route66.jpg`. A partir
de agora, **toda edição parte dela** (não da Cena 1).

**Confirmando o problema que você reportou — pelo menos 3 pessoas
diferentes na sequência:**
- Cena 1 (chegada): jaqueta de couro (não colete), botas (não Vans), cabelo
  castanho penteado — figurino errado e diferente da Cena 9.
- Cenas 3, 4 e 5 (tanque, oil bag, pintura): um homem **completamente
  diferente** — mais velho, cabelo grisalho, óculos, avental — não é o
  mesmo ator das Cenas 1 ou 9 em nenhum traço.
- Cenas 2 e 6 (solda, peças prontas): outros homens de barba, também
  diferentes entre si e do protagonista.
- Cena 8 (moto pronta): parecido com a Cena 1 (jaqueta), mas de novo sem o
  colete/camiseta branca da Cena 9.
- **Cena 7 (montagem final, parafuso a parafuso) não foi gerada** — a
  sequência pulou direto das peças na mesa (Cena 6) para a moto pronta
  (Cena 8).

**Bug extra encontrado — texto sendo desenhado dentro da imagem:** várias
fotos saíram com letras falsas incrustadas ("SINGLE PHOTOGRAPH — COHESIVE
IMAGE" no canto, "PINSTRIPING MESTRE / MOTO ESTILO" e "OLD SCHOOL" pintados
no tanque). Isso não foi pedido — é o modelo tentando "rotular" a imagem.
**Correção:** adicione ao final de todo prompt: `no text, no captions, no
watermark, no labels, no logos on the tank besides hand-painted pinstriping
lines` — e evite frases de metadado tipo "single photograph, cohesive
image" dentro do prompt criativo (se você usa algum app/wrapper que injeta
esse texto automaticamente, é ele quem está vazando para dentro da imagem).

### Prompts prontos — regerar Cenas 1 a 8 a partir da imagem-âncora

Anexe **sempre a imagem `referencia-aprovada-cena9-route66.jpg`** (ou a
última cena boa gerada a partir dela) no Nano Banana e cole o prompt
correspondente. Ordem sugerida: 1 → 2 → 3 → 4 → 5 → 6 → 7 → 8, cada uma
editando a imagem da cena anterior (a moto "desmonta" para trás a partir da
Cena 9, ou você monta a sequência normalmente e só usa a Cena 9 como
âncora de rosto/figurino em toda edição, o que for mais prático no app).

**Instrução fixa a repetir em toda edição (cole antes da ação):**
> *"Mantenha exatamente o mesmo personagem desta imagem (mesmo rosto,
> mesmo colete de couro preto aberto sobre camiseta branca, mesmo jeans,
> mesmo tênis) — não troque a roupa por jaqueta, não remova o colete.
> Mude apenas a ação e o cenário para: [ação abaixo]. No text, no
> captions, no watermark, no labels."*

1. **Cena 1:** chegando a uma oficina old school com peças de moto
   espalhadas — rodas raiadas na parede, chapas cortadas, motor Panhead
   isolado num cavalete — observando o projeto, ajudante ao fundo
   organizando ferramentas.
2. **Cena 2:** soldando à mão o quadro rígido "drop-seat" na bancada,
   faíscas de solda, ajudante segurando o gabarito e entregando tubos.
3. **Cena 3:** martelando chapa de aço numa bigorna para formar o tanque
   peanut clássico, closes nas mãos batendo o metal.
4. **Cena 4:** enrolando chapa metálica numa calandra manual para formar o
   oil bag cilíndrico, testando o encaixe sob o banco.
5. **Cena 5:** fazendo pinstriping à mão em vermelho e dourado sobre o
   tanque já pintado de preto fosco, pincel fino, sem lettering nenhum
   escrito (sem palavras no tanque).
6. **Cena 6:** ao lado de todas as peças prontas e brilhando organizadas
   numa bancada — quadro pintado, tanque com pinstriping, oil bag, rodas
   polidas, motor limpo — ajudante passando um pano nas peças.
7. **Cena 7:** montando a moto — instalando o motor no quadro, encaixando
   o tanque, apertando parafusos com chave old school (sem parafusadeira
   elétrica).
8. **Cena 8:** dando um passo atrás olhando a moto 100% montada com
   orgulho, motor ligado pela primeira vez, fumaça leve do escape.
