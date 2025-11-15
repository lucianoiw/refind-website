# Configuração do Google Analytics 4

Este guia mostra como configurar o Google Analytics 4 (GA4) no site do Refind.

## Passo 1: Criar conta no Google Analytics

1. Acesse [analytics.google.com](https://analytics.google.com/)
2. Clique em "Começar a medir" (ou "Start measuring")
3. Crie uma conta Google Analytics:
   - Nome da conta: `Refind`
   - Configure as opções de compartilhamento de dados conforme preferir

## Passo 2: Criar uma propriedade

1. Nome da propriedade: `Refind Website`
2. Fuso horário: `(GMT-03:00) Brasília`
3. Moeda: `Real brasileiro (BRL)`

## Passo 3: Configurar o stream de dados

1. Selecione plataforma: **Web**
2. URL do site: `https://refind.com.br` (ou seu domínio)
3. Nome do stream: `Refind Website`
4. Clique em "Criar stream"

## Passo 4: Copiar o Measurement ID

1. Após criar o stream, você verá o **Measurement ID** (formato: `G-XXXXXXXXXX`)
2. Copie esse ID

## Passo 5: Adicionar ao projeto

1. Abra o arquivo `.env.local` no projeto
2. Adicione a linha:
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```
   (substitua `G-XXXXXXXXXX` pelo seu Measurement ID real)

3. Salve o arquivo

## Passo 6: Testar

1. Reinicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

2. Acesse `http://localhost:3000`
3. Você verá o banner de cookies
4. Clique em "Aceitar"
5. Abra o Google Analytics (pode demorar alguns minutos)
6. Vá em **Relatórios** > **Tempo real** para ver sua visita

## Eventos configurados

O site já está configurado para trackear os seguintes eventos:

### Eventos de conversão:
- `waitlist_signup` - Quando alguém se inscreve na waitlist
  - Parâmetro `event_label`: origem (hero, navbar, pricing-basic, etc)

### Eventos de engajamento:
- `cta_click` - Cliques nos botões de CTA
  - Parâmetro `event_label`: localização do botão

- `scroll_to_section` - Scroll até seções da página
  - Parâmetro `event_label`: seção (demo, pricing)

## Configurar metas de conversão (opcional)

1. No Google Analytics, vá em **Configurar** > **Eventos**
2. Clique em **Marcar evento como conversão**
3. Encontre o evento `waitlist_signup`
4. Ative "Marcar como conversão"

Isso permitirá ver conversões no relatório de aquisição.

## Relatórios úteis

- **Tempo real**: Ver visitantes ativos agora
- **Aquisição**: De onde vêm os visitantes
- **Engajamento**: Quais páginas mais visitadas
- **Conversões**: Quantas inscrições na waitlist

## Problemas comuns

### Não vejo dados no GA4
- Aguarde alguns minutos (pode demorar até 24h para dados completos)
- Verifique se aceitou os cookies no banner
- Verifique se o Measurement ID está correto no `.env.local`
- Abra o DevTools > Console e procure por erros

### Banner de cookies não aparece
- Limpe o localStorage do navegador
- Acesse em aba anônima
- Verifique se o componente `CookieConsent` está no layout

## Privacidade e LGPD

✅ O site está configurado para compliance com LGPD:
- Banner de consentimento de cookies
- GA4 só é ativado após consentimento
- Política de privacidade atualizada com informações do GA4
- Usuário pode rejeitar cookies de analytics

## Suporte

Para dúvidas, consulte:
- [Documentação oficial do GA4](https://support.google.com/analytics/answer/9304153)
- [Políticas de privacidade do Google](https://policies.google.com/privacy)
