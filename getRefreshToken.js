// getRefreshToken.js
import readline from 'readline';
import { google } from 'googleapis';
import dotenv from 'dotenv';

dotenv.config();

// Verifica as variáveis de ambiente
const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = process.env;

if (!GOOGLE_CLIENT_ID || !GOOGLE_CLIENT_SECRET) {
  console.error('❌ Variáveis de ambiente GOOGLE_CLIENT_ID ou GOOGLE_CLIENT_SECRET não definidas.');
  process.exit(1);
}

// Use o mesmo redirect_uri usado na geração do token
const REDIRECT_URI = 'urn:ietf:wg:oauth:2.0:oob';

// Define os escopos do Calendar
const SCOPES = [
  'https://www.googleapis.com/auth/calendar',
  'https://www.googleapis.com/auth/calendar.events'
];

// Cria o client OAuth2
const oauth2Client = new google.auth.OAuth2(
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  REDIRECT_URI
);

// Gera a URL de autorização
const authUrl = oauth2Client.generateAuthUrl({
  access_type: 'offline',
  prompt: 'consent',
  scope: SCOPES
});

console.clear();
console.log(`
###############################################################################
#                                                                             #
#    █████╗ ██╗   ██╗████████╗ ██████╗ ███╗   ██╗███████╗██╗  ██╗ ████████╗   #
#   ██╔══██╗██║   ██║╚══██╔══╝██╔═══██╗████╗  ██║██╔════╝╚██╗██╔╝ ╚══██╔══╝   #
#   ███████║██║   ██║   ██║   ██║   ██║██╔██╗ ██║█████╗   ╚███╔╝     ██║      #
#   ██╔══██║██║   ██║   ██║   ██║   ██║██║╚██╗██║██╔══╝   ██╔██╗     ██║      #
#   ██║  ██║╚██████╔╝   ██║   ╚██████╔╝██║ ╚████║███████╗██╔╝ ██╗    ██║      #
#   ╚═╝  ╚═╝ ╚═════╝    ╚═╝    ╚═════╝ ╚═╝  ╚═══╝╚══════╝╚═╝  ╚═╝    ╚═╝      #
#                                                                             #
#                AutoNext - Formação de Automação Inteligente                 #
#                                Curso Completo                               #
#                                                                             #
#                         Por: Érico Renato Almeida                           #
#                       Instagram: @erico.arenato                             #
#                     Site: https://ericorenato.com.br                        #
#                                                                             #
###############################################################################
`);

console.log('\n🔐 Abra a seguinte URL no navegador e siga o processo de autorização:\n');
console.log(authUrl);
console.log('\n📝 Após autorizar, cole o código abaixo:\n');

// Cria um prompt para receber o código de autorização
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Código de autorização: ', async (code) => {
  try {
    rl.close();
    const { tokens } = await oauth2Client.getToken(code);
    console.log('\n✅ Tokens obtidos com sucesso!\n');

    if (tokens.refresh_token) {
      console.log('🎉 Seu novo REFRESH TOKEN é:\n');
      console.log(tokens.refresh_token);
      console.log('\n💾 Salve este token no seu .env como GOOGLE_REFRESH_TOKEN.');
    } else {
      console.warn('⚠️ Nenhum refresh_token foi retornado. Use prompt: "consent" e access_type: "offline".');
    }
  } catch (error) {
    console.error('❌ Erro ao trocar o código por tokens:\n', error.response?.data || error.message || error);
  }
});
