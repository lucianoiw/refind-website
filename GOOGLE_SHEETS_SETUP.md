# Configuração do Google Sheets para Lista de Espera

Este guia mostra como configurar a integração com Google Sheets para salvar emails da lista de espera.

## 1. Criar uma Planilha no Google Sheets

1. Acesse [Google Sheets](https://sheets.google.com)
2. Crie uma nova planilha
3. Renomeie a primeira aba para `Sheet1` (se necessário)
4. Adicione cabeçalhos na primeira linha:
   - Coluna A: `Email`
   - Coluna B: `Data`
5. Copie o ID da planilha da URL (está entre `/d/` e `/edit`):
   ```
   https://docs.google.com/spreadsheets/d/SEU_SHEET_ID_AQUI/edit
   ```

## 2. Criar Service Account no Google Cloud

1. Acesse o [Google Cloud Console](https://console.cloud.google.com)
2. Crie um novo projeto ou selecione um existente
3. Habilite a **Google Sheets API**:
   - Menu → APIs & Services → Library
   - Busque por "Google Sheets API"
   - Clique em "Enable"

4. Crie uma Service Account:
   - Menu → IAM & Admin → Service Accounts
   - Clique em "Create Service Account"
   - Nome: `refind-waitlist` (ou qualquer nome)
   - Clique em "Create and Continue"
   - Pule as permissões (não é necessário)
   - Clique em "Done"

5. Crie uma chave JSON:
   - Clique na service account criada
   - Vá em "Keys" → "Add Key" → "Create new key"
   - Escolha JSON
   - Faça o download do arquivo

## 3. Compartilhar a Planilha com a Service Account

1. Abra o arquivo JSON baixado
2. Copie o valor de `client_email` (algo como `refind-waitlist@projeto.iam.gserviceaccount.com`)
3. Abra sua planilha do Google Sheets
4. Clique em "Share" (Compartilhar)
5. Cole o email da service account
6. Dê permissão de **Editor**
7. Clique em "Send"

## 4. Configurar Variáveis de Ambiente

1. Copie o arquivo `.env.local.example` para `.env.local`:
   ```bash
   cp .env.local.example .env.local
   ```

2. Abra o arquivo JSON da service account e preencha as variáveis:

   ```env
   GOOGLE_SERVICE_ACCOUNT_EMAIL=valor-de-client_email-do-json
   GOOGLE_PRIVATE_KEY="valor-de-private_key-do-json"
   GOOGLE_SHEET_ID=id-da-sua-planilha
   ```

   **Importante**:
   - O `GOOGLE_PRIVATE_KEY` deve estar entre aspas duplas
   - Mantenha os `\n` no private key
   - O ID da planilha é o que você copiou no passo 1

3. Exemplo:
   ```env
   GOOGLE_SERVICE_ACCOUNT_EMAIL=refind-waitlist@projeto-123.iam.gserviceaccount.com
   GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkq...\n-----END PRIVATE KEY-----\n"
   GOOGLE_SHEET_ID=1a2b3c4d5e6f7g8h9i0j
   ```

## 5. Testar

1. Reinicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

2. Acesse a aplicação e teste o formulário de lista de espera
3. Verifique se o email aparece na planilha do Google Sheets

## Troubleshooting

- **Erro 403**: Verifique se a planilha foi compartilhada com o email da service account
- **Erro 404**: Verifique se o `GOOGLE_SHEET_ID` está correto
- **Erro de autenticação**: Verifique se o `GOOGLE_PRIVATE_KEY` está formatado corretamente com as aspas e `\n`

## Segurança

⚠️ **IMPORTANTE**:
- Nunca commite o arquivo `.env.local` no Git
- O `.env.local` já está no `.gitignore`
- Não compartilhe suas credenciais publicamente
