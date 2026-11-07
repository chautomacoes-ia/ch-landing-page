Artes do Instagram da CH, usadas pelo agendamento no Metricool. Este ramo não faz parte do site.

## modelos/ (usados pela tarefa semanal de redes sociais)
- `carrossel1.html`, `barbearia.html`: carrossel 1080x1350, um slide por `?s=N`. Paleta CH: fundo #05010f, roxo #7c3aed/#9d4edd, ciano #00d4ff; fontes Poppins (títulos) e Inter (texto).
- `indique.html`, `post2.html`: post único 1080x1350.
- `chat_video.html` + `render_video.js`: reels de conversa no WhatsApp (1080x1920, 30fps). Edite o ROTEIRO e rode `node render_video.js chat_video.html saida.mp4`. Sempre manter o selo "Exemplo de atendimento" e o aviso "Conversa ilustrativa" no final.
- Mídia publicada fica em `AAAA-MM/` e é servida por raw.githubusercontent.com/chautomacoes-ia/ch-landing-page/midia-instagram/AAAA-MM/arquivo
- `stories.html` + `render_stories.js`: stories 1080x1920, um por `?id=`. Para cada semana, copie para `stories_AAAA-MM-DD.html` (segunda da semana), troque o objeto `S` e rode `node render_stories.js <ids>` (ajuste o arquivo e a pasta de saída no script). O render acusa `ESTOURO` se algum texto sair da área segura (entre 250px e 1600px de altura).
- `stories_log.md`: histórico de todos os stories publicados (data, série, tema, palavra-chave do direct). Consulte antes de criar para não repetir tema, gancho ou palavra-chave das últimas 6 semanas.
