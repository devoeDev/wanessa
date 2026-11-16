# Portfólio Wanessa Freire

Experiência editorial em React 19, Vite, Tailwind CSS 4, Lucide e Motion. Nenhuma dependência nova.

## Executar

Node 22+: `npm.cmd install`, `npm.cmd run dev`.
Produção: `npm.cmd run build`. Validação após o build: `npm.cmd test`.
Preview: `npm.cmd run preview`.

## Conteúdo verdadeiro

Edite `src/config.js` para cadastrar foto autorizada, CRN, WhatsApp (DDI + DDD + número, apenas dígitos), Instagram, e-mail, URL definitiva e política de privacidade. Os dados ausentes não são inventados. Sem telefone, os botões levam à seção de contato, com aviso de canais em breve. Sem retrato, as fotografias de alimentos são ilustrativas e dependem do Unsplash.

Áreas: `{ title, description }`. Depoimentos: `{ name, quote }`, somente com autorização. A seção fica oculta quando a lista está vazia. Biografia, princípios, diferenciais, etapas e FAQ são editáveis e devem ser revisados pela profissional antes da publicação. Não foram acrescentados serviços, resultados, formação ou especializações.

## Organização

- `src/App.jsx`: navegação, FAQ, contato e rodapé.
- `src/components`: hero, apresentação, cuidado, processo e seções reutilizáveis.
- `src/styles.css`: tokens, composição editorial e adaptações para celular, tablet e telas amplas.
- `scripts/seo.mjs`: gera Schema.org Person e robots no build. Com `profile.siteUrl`, gera também canonical, og:url e sitemap. Não usa domínio fictício.
- `scripts/verify.mjs`: verificações de conteúdo/configuração e dos metadados produzidos.

## Auditoria e alterações

A base tinha CSS duplicado, rotina de SEO não utilizada, depoimentos vazios visíveis e nenhum indicador de seção ativa. Foram substituídos os estilos por um sistema coeso em oliva, sálvia e marfim; refeitos hero, navegação e rodapé; adicionados menu com Escape, indicador ativo, FAQ acessível, microinterações e imagem responsiva. Motion usa LazyMotion com recursos de animação DOM, entradas únicas e preferência de movimento reduzido. Fontes usam display=swap, sem a família redundante Manrope. Imagens têm dimensões reservadas e lazy loading fora do hero.

## Publicação e limites

A configuração de hospedagem existente foi preservada. Para Vercel, use esta pasta como raiz, `npm run build` e saída `dist`. Esta intervenção trabalha nos arquivos locais; não confirma publicação.

O projeto não possui ESLint, TypeScript ou scripts de lint/typecheck. O build valida transformação e empacotamento de JSX. Os testes não substituem inspeção visual, auditoria WCAG ou medição Lighthouse. Google Fonts e Unsplash exigem conexão; substitua por arquivos locais quando o material autorizado estiver disponível.

## Fotografias reais

Os JPEGs originais foram preservados. As variantes WebP em `public/images` mant?m a propor??o integral e as cores naturais, em larguras 480, 800 e 1179 px. O componente `Portrait.jsx` usa picture/srcset, fallback JPEG e dimens?es expl?citas. A Hero carrega eager/high; as demais usam lazy/async.

Enquadramentos, alt e fontes ficam em `content.photos` no arquivo de configura??o. N?o h? filtros de cor ou altera??es no rosto. A revela??o usa uma cortina animada por transform. O parallax move a moldura em apenas 16 px ao longo da rolagem, somente em desktop com ponteiro preciso. Celulares e prefer?ncia de movimento reduzido mant?m as fotos est?ticas.
