# 1970s Custom Motorcycle Shop — Cena a Cena

Sequência cinematográfica de uma oficina de customização de motos estilo
"old school" anos 1970 (chopper/bobber shop). Cada cena tem o prompt usado,
o modelo e os links dos assets gerados via Morphix (Google Nano Banana Pro
para still + Google Veo 3.1 para o vídeo, semeado a partir do still).

> Geração de mídia usa créditos pagos da plataforma Morphix. As cenas 1-4
> têm still + vídeo completos; a cena 5 tem apenas o still — o vídeo não foi
> renderizado porque os créditos da conta se esgotaram (30 créditos
> restantes, insuficiente para outro render Veo). Retomar a geração paga
> quando houver créditos disponíveis, ou trocar para um modelo de vídeo mais
> barato.

## Ordem de montagem (corte final)

A ordem de geração (Cena 1 → 5, abaixo) não é a ordem cronológica de
construção — a Cena 1 mostra o chassi já praticamente pronto, o que não faz
sentido como abertura. Corte final remontado na ordem correta de um
processo de build, usando só ferramentas gratuitas/open source (sem gastar
créditos Morphix):

1. **Cena 2** — dobra de tubo e solda do quadro
2. **Cena 3** — modelagem do tanque peanut
3. **Cena 4** — lixamento do tanque/paralama
4. **Cena 5** — montagem do motor Panhead (só tinha still; vídeo de
   pan/zoom gerado localmente a partir do still com `ffmpeg` —
   filtro `zoompan`, 6s, mesmo codec/resolução/fps das outras cenas)
5. **Cena 1** — tracking shot do chassi pronto, como revelação final

Processo: download dos 4 vídeos + still da cena 5 (`curl`), geração do
clipe da cena 5 a partir do still (`ffmpeg zoompan`), e concatenação sem
reencode de vídeo (`ffmpeg -f concat -c:v copy`, só o áudio foi
reencodado para eliminar artefato de timestamp na emenda). Duração final:
38s (8+8+8+6+8). Vídeo final de 60MB não versionado no repositório —
segue a mesma política do `.gitignore` para `amaz-video/*.mp4` (binário
grande, regenerável).

> Este corte (v2, 38s) cobre só as Cenas 1-5. As Cenas 6-8 abaixo
> (pintura, montagem final e estrada) ainda não foram geradas — ver
> "Status de geração" logo abaixo. **Ordem completa planejada do vídeo
> final (8 cenas):** 2 → 3 → 4 → 6 → 5 → 7 → 1 → 8, isto é: solda do
> quadro → modelagem do tanque → lixamento → pintura → motor → montagem
> final na bancada (peças pintadas/cromadas) → revelação do chassi na
> oficina → moto rodando na estrada (encerramento).

## Cena 1 — Tracking shot pela oficina

Cinematic, slow-motion tracking shot inside an authentic 1970s old school
custom motorcycle shop. In the center, a grease-stained steel workbench with
vintage hand tools, wrenches, and hand-drawn blueprints. Spread out on the
floor is a matte black rigid drop-seat rolling chassis, high ape-hanger
handlebars, and dense multi-spoke wire wheels. In the background, vintage
oil signs, flickering warm Edison bulbs, and a gritty, smoke-filled garage
atmosphere. Photorealistic, 8k.

- Still (nano-banana-pro, 5504×3072): https://assets.morphix.pro/7vw439p4.png
- Vídeo (veo-3.1, 8s, 1080p): https://assets.morphix.pro/n5e7aa0w.mp4

## Cena 2 — Dobra de tubo e solda

Close-up cinematic shot of an old school mechanic manually bending steel
tubes using a vintage pipe bender. Intense sparks fly from an
oxy-acetylene welding torch as he fuses the tubular structure of a
low-slung rigid bobber frame. Gritty atmosphere, dark workshop with harsh
shadows, glowing red molten metal, focused on the raw, handmade
craftsmanship. 4k resolution.

- Still (nano-banana-pro, 5504×3072): https://assets.morphix.pro/mumo5dxi.png
- Vídeo (veo-3.1, 8s, 1080p): https://assets.morphix.pro/v5ygrrb0.mp4

## Cena 3 — Modelagem do tanque peanut

A weathered craftsman in a leather apron manually shaping a raw steel
peanut gas tank. He uses a wooden mallet and a vintage manual English
wheel to smooth the metal curves. Metal shavings and old files cover the
wooden workbench. Focused shot on his calloused hands working the metal,
classic chopper shop environment, high-contrast dramatic lighting.

- Still (nano-banana-pro, 5504×3072): https://assets.morphix.pro/0yw4iuy4.png
- Vídeo (veo-3.1, 8s, 1080p): https://assets.morphix.pro/53g9moy0.mp4

## Cena 4 — Lixamento do tanque/paralama

A mechanic wearing a vintage respirator mask manually hand-sanding a raw
metal motorcycle tank and a short bobber rear fender. Fine white primer
dust floats through shafts of sunlight piercing the dark garage. The
textures of coarse sandpaper scratching the grey guide coat are highly
detailed. Gritty, realistic workshop atmosphere, cinematic depth of field.

- Still (nano-banana-pro, 5504×3072): https://assets.morphix.pro/csdvixar.png
- Vídeo (veo-3.1, 8s, 1080p): https://assets.morphix.pro/m0ejl3kn.mp4

## Cena 5 — Montagem do motor Panhead (vídeo pendente)

High-detail cinematic close-up of a vintage, fully restored carbureted
Harley-Davidson Panhead engine being bolted into the matte black rigid
drop-seat frame. A mechanic's hands use an old-school chrome wrench on the
iconic pan-shaped rocker covers. The vintage Linkert carburetor and copper
fuel lines are clearly visible. Polished chrome contrasting with the dark
frame, mechanical perfection.

- Still (nano-banana-pro, 5504×3072): https://assets.morphix.pro/e216oir5.png
- Vídeo: **pendente** — render Veo 3.1 falhou por falta de créditos
  Morphix na conta. Prompt sugerido para quando houver créditos:

  > High-detail cinematic close-up of a vintage, fully restored carbureted
  > Harley-Davidson Panhead engine being bolted into the matte black rigid
  > drop-seat frame. A mechanic's hands turn an old-school chrome wrench on
  > the iconic pan-shaped rocker covers, tightening a bolt. The vintage
  > Linkert carburetor and copper fuel lines catch the light. Polished
  > chrome contrasting with the dark frame, mechanical perfection, slow
  > deliberate hand movement.

## Cena 6 — Pintura (tanque e paralama)

Close-up cinematic shot inside a dim paint booth of a vintage 1970s custom
motorcycle shop. A painter wearing a respirator and coveralls applies
smooth coats of deep matte black paint onto the peanut gas tank and bobber
rear fender, both suspended on wire hooks under a single hanging work
light. Fine paint mist drifts through the light beam, wet paint catching a
subtle sheen. Gritty, dim garage atmosphere, cinematic depth of field,
photorealistic, 8k.

- Status: **prompt pronto, geração pendente** (sem créditos disponíveis).

## Cena 7 — Montagem final na bancada (peças pintadas e cromadas)

Wide cinematic shot of the motorcycle shop workbench, now covered with
every finished component laid out in order: the matte black painted
peanut tank and bobber fender, freshly chromed dual exhaust pipes, chrome
ape-hanger handlebars, and the dense multi-spoke wire wheels polished to a
mirror shine. A mechanic's hands begin fitting the painted tank onto the
rigid frame, warm Edison bulb light glinting off the chrome. Gritty,
smoke-tinted 1970s garage atmosphere, photorealistic, 8k.

- Status: **prompt pronto, geração pendente** (sem créditos disponíveis).

## Cena 8 — Encerramento: a moto rodando na estrada

Wide cinematic tracking shot at golden hour: the finished matte black
rigid chopper, high ape-hanger handlebars and chrome dual exhaust pipes,
rides down an open two-lane rural road, dust and heat shimmer trailing
behind the rear wire wheel. Low camera angle tracking alongside, long
shadows, warm sunset light glinting off the chrome, cinematic lens flare,
photorealistic, 8k.

- Status: **prompt pronto, geração pendente** (sem créditos disponíveis).

## Problema conhecido — moto muda de formato entre cenas

Cada cena foi gerada de forma independente (um prompt de texto por cena,
sem nenhuma imagem de referência compartilhada), então o modelo de imagem
reinterpretou o desenho da moto a cada geração: geometria do quadro,
formato do tanque e padrão de raios das rodas **não são os mesmos** entre
as cenas 1-5. Visível comparando, por exemplo, o quadro da Cena 2 (solda)
com o chassi montado da Cena 1 (revelação) — ângulo de garfo, raio das
rodas e proporção do quadro divergem.

**Correção planejada (bloqueada por créditos):** regerar as cenas 2-5
usando uma única imagem "canônica" da moto como referência fixa
(`assetIds` no `generate_image`, não apenas prompt de texto), travando
quadro/tanque/rodas idênticos do início ao fim. Candidata a referência:
still da Cena 1 (`https://assets.morphix.pro/7vw439p4.png`), por ser a
única vista completa do chassi montado.

As cenas novas (6, 7 e 8) **ainda não foram geradas** — portanto devem
nascer já usando essa referência fixa desde a primeira geração (não só
corrigidas depois), para não repetir o mesmo problema. Ordem sugerida ao
gerar com crédito disponível: gerar a imagem de referência canônica
primeiro (ou confirmar a da Cena 1), depois gerar 2, 3, 4, 6, 5, 7, 8
sempre passando o `assetId` da referência, e só então os vídeos de cada
uma a partir do respectivo still.

Status: conta Morphix caiu para o plano FREE com 1 crédito restante —
insuficiente até para um único still. Retomar esta correção (cenas 2-5) e
a geração das cenas 6-8 assim que houver créditos; não prosseguir com
novas gerações até lá.

## Notas

- Todos os stills foram gerados com `google/nano-banana-pro` (16:9, 4K).
- Todos os vídeos foram gerados com `google/veo-3.1` (8s, 1080p),
  semeados (`start_frame_asset_id`) a partir do still correspondente, para
  manter consistência visual entre still e vídeo de cada cena.
- Assets hospedados em `assets.morphix.pro` — não versionados neste
  repositório (apenas os links). Fazer download local antes que expirem,
  se for necessário arquivar.
