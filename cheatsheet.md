# 🚀 Grid System - Cheatsheet Rápido

## 📦 Classes Principais

### Container
```html
<div class="grid-wrapper">
  <!-- Seu conteúdo aqui -->
</div>
```

---

## 🎯 Zonas do Grid (Column Start)

| Classe | Descrição | Quando usar |
|--------|-----------|-------------|
| `grid-start-edge` | Início absoluto | Raramente usado |
| `grid-start-inner` | Início do conteúdo | ⭐ Conteúdo principal |
| `grid-start-third` | Terço inicial | Layouts específicos |
| `grid-start-center` | Centro exato | Divisões ao meio |
| `grid-start-off-center` | Fora do centro | Layouts assimétricos |
| `grid-start-aside` | Início do aside | ⭐ Sidebars |

---

## 🏁 Zonas do Grid (Column End)

| Classe | Descrição | Quando usar |
|--------|-----------|-------------|
| `grid-end-edge` | Fim absoluto | Raramente usado |
| `grid-end-inner` | Fim do conteúdo | ⭐ Limite do conteúdo |
| `grid-end-center` | Centro exato | Metade esquerda |
| `grid-end-third` | Terço inicial | Layouts específicos |
| `grid-end-aside` | Fim antes do aside | ⭐ Conteúdo + sidebar |

---

## ⚡ Atalhos (Spans)

| Classe | Equivalente | Uso |
|--------|-------------|-----|
| `grid-span-full` | `start-edge` → `end-edge` | 🌟 Hero, backgrounds |
| `grid-span-inner` | `start-inner` → `end-inner` | 🌟 Conteúdo padrão |
| `grid-span-content` | `start-inner` → `center` | Metade esquerda |
| `grid-span-main` | `start-inner` → `off-center` | Conteúdo + espaço |
| `grid-span-aside-area` | `aside` → `end-inner` | Área do sidebar |

---

## 📐 Spacing Customizado

### Padding
```html
<div class="p-grid-col">      <!-- Padding = 1 coluna -->
<div class="px-grid-col">     <!-- Padding horizontal -->
<div class="py-grid-col">     <!-- Padding vertical -->
```

### Width
```html
<div class="w-grid-6-col">    <!-- Largura = 6 colunas -->
<div class="w-grid-12-col">   <!-- Largura = 12 colunas -->
<div class="w-grid-inner">    <!-- Largura = conteúdo interno -->
```

### Gap
```html
<div class="gap-grid-col">    <!-- Gap = 1 coluna -->
<div class="gap-grid-half">   <!-- Gap = 0.5 coluna -->
```

---

## 🎨 Padrões Comuns

### 1. Hero Full Width
```html
<div class="grid-wrapper">
  <section class="grid-span-full bg-blue-600 py-20">
    <!-- Hero aqui -->
  </section>
</div>
```

### 2. Conteúdo Centralizado
```html
<div class="grid-wrapper">
  <main class="grid-span-inner py-12">
    <!-- Conteúdo aqui -->
  </main>
</div>
```

### 3. Layout com Sidebar
```html
<div class="grid-wrapper">
  <article class="grid-start-inner grid-end-aside">
    <!-- Conteúdo -->
  </article>
  <aside class="grid-start-aside grid-end-inner">
    <!-- Sidebar -->
  </aside>
</div>
```

### 4. Background Completo + Conteúdo Contido
```html
<div class="grid-wrapper">
  <section class="grid-span-full bg-gray-50 py-20">
    <div class="grid-span-inner">
      <!-- Conteúdo limitado -->
    </div>
  </section>
</div>
```

### 5. Layout 50/50
```html
<div class="grid-wrapper">
  <div class="grid-start-inner grid-end-center">
    <!-- Esquerda -->
  </div>
  <div class="grid-start-center grid-end-inner">
    <!-- Direita -->
  </div>
</div>
```

---

## 📱 Responsivo

Use os prefixos do Tailwind normalmente:

```html
<!-- Mobile: full | Desktop: metade -->
<div class="grid-span-full md:grid-start-inner md:grid-end-center">
  <!-- Conteúdo -->
</div>

<!-- Muda posição no desktop -->
<div class="grid-start-inner lg:grid-start-center">
  <!-- Conteúdo -->
</div>
```

---

## 🔍 Debug

Para visualizar as zonas do grid:

```html
<div class="grid-wrapper min-h-screen">
  <div class="grid-start-edge grid-end-edge h-4 bg-red-200"></div>
  <div class="grid-start-inner grid-end-inner h-4 bg-blue-200"></div>
  <div class="grid-start-center grid-end-center h-4 bg-yellow-200"></div>
  <div class="grid-start-aside grid-end-aside h-4 bg-purple-200"></div>
</div>
```

---

## 📊 Breakpoints

| Tamanho | Breakpoint | Colunas | Largura Coluna |
|---------|-----------|---------|----------------|
| Mobile | < 768px | 26 | `100vw / 26` |
| Tablet | ≥ 768px | 36 | `100vw / 36` |
| Desktop | ≥ 1440px | 36 | `2.5rem` (40px) |

**Max Width:** 1440px em todas as telas

---

## ⚠️ Coisas para Lembrar

✅ **SIM:**
- Combine classes do grid com Tailwind normais
- Use responsivo com `md:`, `lg:`, etc.
- Misture spans com classes específicas
- Use `subgrid-item` para grids aninhados

❌ **NÃO:**
- Não use `grid-span-full` dentro de outro grid filho
- Não misture sistema de colunas do Tailwind com este grid
- Não use valores absolutos onde o grid já controla

---

## 💡 Dicas Pro

1. **Hero sempre full:**
   ```html
   <section class="grid-span-full">
   ```

2. **Conteúdo sempre inner:**
   ```html
   <main class="grid-span-inner">
   ```

3. **Background estendido:**
   ```html
   <div class="grid-span-full bg-gray-100">
     <div class="grid-span-inner">
       <!-- Conteúdo -->
     </div>
   </div>
   ```

4. **Grid dentro do grid:**
   ```html
   <div class="grid-span-inner">
     <div class="grid grid-cols-3 gap-6">
       <!-- Cards -->
     </div>
   </div>
   ```

---

## 🎯 Decisão Rápida

**"Onde colocar meu elemento?"**

| Se o elemento é... | Use... |
|-------------------|--------|
| Hero/Banner | `grid-span-full` |
| Texto/Conteúdo | `grid-span-inner` |
| Sidebar | `grid-start-aside grid-end-inner` |
| Background colorido | `grid-span-full` com filho `grid-span-inner` |
| Metade da tela | `grid-start-inner grid-end-center` |

---

## 📞 Precisa de Ajuda?

1. Verifique o arquivo `exemplos-de-uso.jsx`
2. Use o debug visual
3. Inspecione no DevTools (ative grid overlay)
4. Leia o guia completo em `sistema-grid-retool.md`

---

**Happy Coding! 🚀**
