# Leone Pavan Empreendimentos

Site institucional desenvolvido com Next.js 15, especializado em empreendimentos de alto padrão em Balneário Camboriú/SC.

## 🚀 Tecnologias

- **Next.js 15** - App Router
- **React 19** - JavaScript
- **Tailwind CSS** - Estilização
- **shadcn/ui** - Componentes UI
- **Radix UI** - Primitivos acessíveis
- **Framer Motion** - Animações
- **Swiper.js** - Sliders e galerias
- **React Hook Form + Zod** - Formulários validados

## 🎨 Design System

### Cores
- **Dark Base**: `#1A140E`
- **Dark Surface**: `#1C1C1C`
- **Light**: `#FFFAF5`
- **Gold**: `#B89A62`

### Efeitos Glass Morphism
- `.glass` - Glass principal
- `.glass-dark` - Glass escuro
- `.glass-subtle` - Glass sutil
- `.glass-form` - Glass para formulários

## 🌍 Internacionalização

O site é totalmente multilíngue com suporte para:

- **Português** (padrão, sem prefixo na URL)
- **English** (/en)
- **Español** (/es)

### Estrutura i18n
- Rotas automáticas com `next-intl`
- Middleware para detecção de idioma
- Traduções em `/messages/{locale}.json`
- Navegação localizada com `lib/navigation.js`

### Como usar traduções
```javascript
import { useTranslations } from 'next-intl'

export default function Component() {
  const t = useTranslations('namespace')
  return <h1>{t('key')}</h1>
}
```

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Executar produção
npm start
```

## 📁 Estrutura do Projeto

```
leone-site3/
├── app/
│   ├── layout.js        # Layout raiz com fonte Raleway
│   ├── page.js          # Home page
│   └── globals.css      # Estilos globais + tema dark premium
├── components/
│   └── ui/              # Componentes shadcn/ui
├── lib/
│   └── utils.js         # Utilitários (cn)
├── public/              # Assets estáticos
├── tailwind.config.js   # Config do Tailwind com tema
├── components.json      # Config do shadcn/ui
└── package.json
```

## 🎯 Próximos Passos

Aguardando instruções para desenvolvimento da home page.

## 📄 Licença

© 2004-2026 Leone Pavan Empreendimentos. Todos os direitos reservados.
