---
workflow: general-video
flow: automation
storyboard: no
message: "O Amáz nasce da floresta: 45 unidades naturalmente perfeitas no Champagnat, com coberturas duplex de piscina privativa e compensação total de carbono."
destination: instagram-reels
aspect: 1080x1920
language: pt-BR
length: 48s
angle: real-estate-showcase
---

## Intent

Vídeo institucional curto para o lançamento AMÁZ (GT Building), Rua Fernando
Simas 869, Champagnat/Bigorrilho, Curitiba. Público: potenciais compradores
de alto padrão em redes sociais (Reels/Stories). Tom: sofisticado, natural,
"naturalmente perfeito" — nunca genérico de incorporadora. Sete cenas fixas
já roteirizadas pelo usuário em `../ROTEIRO.md` (fonte de verdade do texto e
da ordem): abertura (fachada pôr do sol) → localização (mapa) →
sustentabilidade (Amazônia + 4.500 t CO2) → plantas da cobertura duplex
(cena principal, câmera "caminha" cômodo a cômodo) → amenidades (4 fotos em
corte rápido) → clímax silencioso (piscina da cobertura ao pôr do sol) →
encerramento (logo GT Building + assinatura da marca).

## Assets

Todas as imagens são originais do caderno oficial de vendas — extraídas em
alta resolução do PDF do usuário e organizadas em `../media/`, uma pasta por
cena (`01_abertura` … `07_encerramento`), cada uma com um arquivo
`_PRINCIPAL` e por vezes `_ALT`. Nenhuma imagem é gerada ou alterada por IA;
apenas animadas (zoom/pan). Mapeamento completo cena → arquivo → página do
PDF está em `../ROTEIRO.md`.

- `../media/01_abertura/torre_fachada_por_do_sol_PRINCIPAL.jpg` — duas
  torres, fachada, fim de tarde — Cena 1.
- `../media/02_localizacao/mapa_localizacao_champagnat.jpg` — mapa com pins
  — Cena 2.
- `../media/03_sustentabilidade/amazonia_aerea_4500_toneladas_CO2.jpg` —
  aérea da Amazônia, estatística já impressa na peça — Cena 3.
- `../media/04_plantas_duplex/final1_416m2_andar_SUPERIOR_PRINCIPAL.jpg` e
  `..._INFERIOR_PRINCIPAL.jpg` — plantas da cobertura duplex 416 m² — Cena 4.
- `../media/05_amenidades/hall_manoa_PRINCIPAL.jpg`,
  `hall_samauma_PRINCIPAL.jpg`, `piscina_coberta_PRINCIPAL.jpg`,
  `wine_bar_PRINCIPAL.jpg` — Cena 5.
- `../media/06_climax_piscina/piscina_cobertura_por_do_sol_PRINCIPAL.jpg` —
  Cena 6.
- `../media/07_encerramento/logo_GT_Building_amazonia_PRINCIPAL.jpg` —
  Cena 7.

## Customizations

- Sem narração gravada ainda (etapa de TTS/gravação é decisão futura do
  usuário — Morphix `generate_audio` é a única etapa paga do fluxo, não
  disparar sem pedido explícito). Por ora, exibir a narração como legenda
  em tela, em português, para permitir revisão do corte sem áudio.
- Formato de saída vertical 9:16 (1080x1920), pensado para Reels/Stories.

## Notes

- Roteiro, narração e timing por cena são travados em `../ROTEIRO.md` —
  tratar como script confirmado, não reabrir o intake.
- Não regenerar/alterar nenhuma imagem do caderno; apenas animar
  (zoom/pan/highlight) sobre os originais, conforme instrução explícita do
  usuário.
- Créditos finais opcionais ("Vídeo produzido com IA — Morphix &
  HyperFrames") ficaram de fora deste corte; usuário decide se entram.
