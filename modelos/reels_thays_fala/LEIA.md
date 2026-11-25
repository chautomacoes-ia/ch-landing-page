# Reels da Thays falando (aprovado pelo Caio em 25/11/2026)

Receita que funcionou:
1. Foto de partida 16:9 gerada no Runway (nano-banana-pro, referência modelos/thays_base_v2.jpg): plano médio da cintura para cima, centralizada, espaço em volta, sorriso leve de lábios fechados. Pronta: modelos/thays_falando_base.jpg (use a URL raw dela).
2. generate_talking_video com essa imagem, voiceId cabLxBh81HurPAAJfEHo ("Bea", brasileira natural), roteiro de 15 a 20 s em frases curtas, com [cheerfully]/[warmly] no começo das frases para ela sorrir.
3. Baixe o MP4 (sai 1088x704) como thays_falando_raw.mp4 nesta pasta, ache as pausas com
   ffmpeg -i thays_falando_raw.mp4 -af silencedetect=noise=-28dB:d=0.09 -f null -
   e escreva caps.json [início, fim, texto] repetindo exatamente a fala (no máx. 3 linhas por legenda).
4. node shots.js && bash montar.sh  -> saida.mp4 (1080x1920). Capa: frame em 0,8 s.
Regras: rosto livre, legendas entre 1300 e 1560 px, aviso "Personagem virtual criada com IA" dentro da área segura, revisão independente antes de agendar.
