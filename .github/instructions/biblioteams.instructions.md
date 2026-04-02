---
name: "Biblioteams Project Instructions"
description: "React 19 + Vite + TypeScript + Zustand + Tailwind CSS v4 project conventions"
applyTo: "src/**"
---

# Biblioteams — Instrucciones del Proyecto

## Stack Tecnológico

- **React 19** con React Router 7 (client-side routing)
- **Vite 7** con SWC (no Babel) - mayor velocidad de compilación
- **TypeScript** en modo estricto para prevenir errores en tiempo de desarrollo
- **Zustand 5** para estado global - elegido por su simplicidad sobre Redux
- **Tailwind CSS v4** con tema custom en `src/index.css`
- Path aliases: `@` → `src/`, `@assets` → `src/assets/`

## Arquitectura de Carpetas

```
src/
├── components/   # Features con lógica de negocio
├── elements/     # Componentes atómicos reutilizables
├── pages/        # Contenedores de ruta (solo composición)
├── store/        # Stores Zustand por dominio
├── types/        # Tipos globales y .d.ts
└── utils/        # Funciones utilitarias y HOCs
```

### Responsabilidades por Carpeta

**components/**: Componentes de feature completo que encapsulan lógica de negocio.
- ✅ Pueden tener hooks propios, data y types
- ✅ Ejemplos: `Header`, `CathalogSearchBar`, `FilterCathalog`
- ❌ No reutilizar componentes de feature en otros features sin extraer a elements

**elements/**: Unidades atómicas presentacionales, sin lógica de negocio.
- ✅ Componentes puros que reciben props y renderizan UI
- ✅ Ejemplos: `CathalogCard`, `PaginationButton`, `DarkBackground`
- ❌ No incluir llamadas a APIs ni gestión de estado global

**pages/**: Solo composición y orquestación de components.
- ✅ Importar y ensamblar components
- ✅ Manejar rutas y parámetros de URL
- ❌ Evitar lógica compleja - delegar a hooks o components

**store/**: Stores Zustand organizados por dominio de negocio.
- ✅ Un archivo por store: `use[Store].ts` + `types.ts`
- ✅ Separar estado y acciones en tipos
- ❌ No crear stores globales monolíticos

## Estructura de Componentes

Cada componente vive en su carpeta PascalCase con archivos específicos:

```
ComponentName/
├── ComponentName.tsx      # Componente funcional (obligatorio)
├── useComponentName.ts    # Custom hook (si hay lógica significativa)
├── types.ts               # Tipos locales del componente
└── data.ts                # Datos estáticos, arrays de config
```

**¿Cuándo crear un custom hook?**
- ✅ Lógica de estado que se repite en múltiples componentes
- ✅ Efectos secundarios complejos (fetch, timers, subscriptions)
- ✅ Lógica de negocio que puede testearse independientemente
- ❌ Simple estado local que solo usa `useState`

## Convenciones de Código

### Componentes

```tsx
// ✅ CORRECTO: Export default desde archivo
import type { ComponentProps } from './types'

const ComponentName: React.FC<ComponentProps> = ({ prop1, prop2 }) => {
  return (
    <section className="flex flex-col gap-4">
      {/* ... */}
    </section>
  )
}

export default ComponentName

// ❌ INCORRECTO: Named export, class component
export class ComponentName extends React.Component { ... }
export const ComponentName = () => { ... }
```

**Razón**: Default exports son el patrón predominante en React y facilitan renombrado en imports.

### Custom Hooks

```tsx
// ✅ CORRECTO: Hook con lógica compleja, retorna objeto
const useChargeCathalog = () => {
  const [loading, setLoading] = useState(true)
  const [books, setBooks] = useState<CathalogBook[]>([])
  
  const sortedBooks = useMemo(
    () => books.sort((a, b) => a.title.localeCompare(b.title)),
    [books]
  )
  
  useEffect(() => {
    fetchBooks().then(setBooks).finally(() => setLoading(false))
  }, [])
  
  return { loading, books: sortedBooks }
}

// ❌ INCORRECTO: Lógica simple que no amerita hook
const useToggle = () => {
  const [value, setValue] = useState(false)
  return [value, () => setValue(!value)]
}
```

**Guías para hooks**:
- Usar `useMemo` para cálculos costosos (ordenamiento, filtrado, paginación)
- Usar `useReducer` para máquinas de estado con múltiples acciones
- Selectores de Zustand para evitar re-renders innecesarios

### Tipos y Interfaces

```tsx
// ✅ CORRECTO: Type para props, import type
import type { CathalogBook } from '@/types/cathalog-env'

type ComponentProps = {
  books: CathalogBook[]
  onSelect: (id: string) => void
  variant?: 'default' | 'compact'  // Union types estrictos
}

// ❌ INCORRECTO: Interface, string genérico
interface ComponentProps {
  books: any
  onSelect: Function
  variant: string
}
```

**Razón**: 
- `type` es más flexible y consistente con el patrón del proyecto
- Union types previenen errores en tiempo de compilación
- `import type` optimiza bundle size

### Datos Estáticos

```tsx
// ✅ CORRECTO: Exportar array tipado desde data.ts
// data.ts
export const navigationItems: NavigationItem[] = [
  { label: 'Inicio', path: '/', icon: 'home' },
  { label: 'Catálogo', path: '/catalogo', icon: 'book' },
] as const

// ComponentName.tsx
import { navigationItems } from './data'

const Navigation = () => (
  <nav>
    {navigationItems.map(item => (
      <NavLink key={item.path} to={item.path}>
        {item.label}
      </NavLink>
    ))}
  </nav>
)

// ❌ INCORRECTO: Definir datos inline en componente
const Navigation = () => {
  const items = [
    { label: 'Inicio', path: '/' },
    // ...
  ]
  return <nav>...</nav>
}
```

**Razón**: Separar datos de presentación facilita mantenimiento y testing.

## Estado Global (Zustand)

### Estructura de Store

```tsx
// store/cathalog/types.ts
export type CathalogState = {
  books: CathalogBook[]
  selectedBook: CathalogBook | null
  loading: boolean
}

export type CathalogActions = {
  setBooks: (books: CathalogBook[]) => void
  selectBook: (id: string) => void
  clearSelection: () => void
}

// store/cathalog/useCathalogStore.ts
import { create } from 'zustand'
import type { CathalogState, CathalogActions } from './types'

export const useCathalogStore = create<CathalogState & CathalogActions>((set) => ({
  books: [],
  selectedBook: null,
  loading: false,
  
  setBooks: (books) => set({ books }),
  
  selectBook: (id) => set((state) => ({
    selectedBook: state.books.find(book => book.id === id) ?? null
  })),
  
  clearSelection: () => set({ selectedBook: null })
}))
```

### Uso en Componentes

```tsx
// ✅ CORRECTO: Selectores individuales para evitar re-renders
const Component = () => {
  const books = useCathalogStore((state) => state.books)
  const selectBook = useCathalogStore((state) => state.selectBook)
  
  return <div onClick={() => selectBook(id)}>...</div>
}

// ❌ INCORRECTO: Suscribirse al store completo
const Component = () => {
  const store = useCathalogStore()  // Re-renderiza en cualquier cambio
  return <div onClick={() => store.selectBook(id)}>...</div>
}
```

**Razón**: Selectores granulares optimizan performance al evitar re-renders innecesarios.

## Estilos (Tailwind CSS v4)

### Convenciones de Clases

```tsx
// ✅ CORRECTO: Usar variables custom del tema
<div className="bg-primary text-on-primary font-comic-neue">
  <h1 className="text-2xl font-bold">Título</h1>
</div>

// ❌ INCORRECTO: Colores hardcodeados
<div className="bg-blue-500 text-white" style={{ fontFamily: 'Comic Sans' }}>
  <h1 style={{ fontSize: '24px' }}>Título</h1>
</div>
```

### Breakpoints Responsivos

```tsx
// ✅ CORRECTO: Mobile-first con breakpoints custom
<div className="grid grid-cols-1 max-tablet:grid-cols-2 max-desktop:grid-cols-3">
  {/* max-cellphone: ~480px */}
  {/* max-cellphone-hor: ~768px */}
  {/* max-tablet: ~1024px */}
  {/* max-tablet-hor: ~1280px */}
</div>

// ❌ INCORRECTO: Desktop-first sin aprovechar custom breakpoints
<div className="grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
```

**Razón**: 
- Mobile-first es el estándar actual para desarrollo web
- Breakpoints custom alineados con el diseño del proyecto
- Variables del tema garantizan consistencia visual

## Routing y URLs

```tsx
// ✅ CORRECTO: Rutas en español, parámetros query con useSearchParams
import { useSearchParams } from 'react-router-dom'

const CatalogoPage = () => {
  const [searchParams] = useSearchParams()
  const page = searchParams.get('page') ?? '1'
  
  return <Catalog page={parseInt(page)} />
}

// Rutas configuradas:
// /catalogo
// /catalogo?page=2
// /ingresa
// /registrate

// ❌ INCORRECTO: Rutas en inglés, query params manualmente parseadas
const CatalogPage = () => {
  const page = new URLSearchParams(window.location.search).get('page')
  return <Catalog page={page} />
}
```

**Componentes globales fuera de `<Routes>`**: Header, Footer, BurguerButton se renderizan en todos los layouts.

## Nomenclatura: Cathalog vs Catálogo

**IMPORTANTE**: Existe una convención dual en el proyecto:

```tsx
// ✅ CÓDIGO (componentes, hooks, tipos): CATHALOG
import { CathalogBook } from '@/types/cathalog-env'
import CathalogCard from '@/elements/CathalogCard'
const useChargeCathalog = () => { ... }

// ✅ UI/CONTENIDO (rutas, texto visible): CATÁLOGO / CATALOGO
<Route path="/catalogo" />
<h1>Catálogo de Libros</h1>
<button>Ver Catálogo</button>

// ❌ INCORRECTO: Mezclar nomenclaturas
const CatalogoCard = () => { ... }  // Debe ser CathalogCard
<Route path="/cathalog" />  // Debe ser /catalogo
```

**Razón**: "Cathalog" es un naming interno que distingue el dominio del proyecto. "Catálogo" es el término correcto en español para usuarios.

## Manejo de Errores y Operaciones Asíncronas

### Patrón Estándar para Fetch

```tsx
// ✅ CORRECTO: Manejo completo de estados
const useChargeCathalog = () => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [books, setBooks] = useState<CathalogBook[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/cathalog')
        if (!res.ok) {
          throw new Error(`HTTP ${res.status}: ${res.statusText}`)
        }
        const data: CathalogBook[] = await res.json()
        setBooks(data)
      } catch (err: unknown) {
        const message = err instanceof Error 
          ? err.message 
          : 'Error desconocido al cargar el catálogo'
        setError(message)
        console.error('Error fetching cathalog:', err)
      } finally {
        setLoading(false)
      }
    }
    
    fetchData()
  }, [])

  return { loading, error, books }
}

// ❌ INCORRECTO: Sin manejo de errores, any
const useChargeCathalog = () => {
  const [data, setData] = useState([])
  
  useEffect(() => {
    fetch('/api/cathalog')
      .then(res => res.json())
      .then(setData)
  }, [])
  
  return data
}
```

### Renderizado Condicional con Estados de Carga

```tsx
// ✅ CORRECTO: UI clara para cada estado
const CatalogoPage = () => {
  const { loading, error, books } = useChargeCathalog()
  
  if (loading) {
    return <LoadingSpinner message="Cargando catálogo..." />
  }
  
  if (error) {
    return <ErrorMessage error={error} onRetry={refetch} />
  }
  
  return <CathalogList books={books} />
}

// Alternativa con HOC:
const CatalogoPage = onLoadingCathalog(() => {
  const books = useCathalogStore(state => state.books)
  return <CathalogList books={books} />
})

// ❌ INCORRECTO: No manejar estados intermedios
const CatalogoPage = () => {
  const { books } = useChargeCathalog()
  return <CathalogList books={books} />  // books puede estar vacío durante carga
}
```

**Tres estados obligatorios**: `loading`, `data`, `error`

## Idioma y Comentarios

```tsx
// ✅ CORRECTO: Código en inglés, comentarios en español
type BookStatus = 'available' | 'borrowed' | 'reserved'

// Filtrar libros disponibles para préstamo
const availableBooks = books.filter(book => book.status === 'available')

// ❌ INCORRECTO: Mezcla inconsistente
type estadoLibro = 'disponible' | 'prestado'  // Tipo en español

// Filter available books
const librosDisponibles = books.filter(...)  // Comentario en inglés
```

**Excepciones al inglés**: Nombres de dominio específicos del proyecto (Cathalog).

## Best Practices Específicas del Proyecto

### Performance

1. **Memoización selectiva**: Usar `useMemo` solo para operaciones costosas (>100 items, cálculos complejos)
2. **Zustand selectores**: Suscribirse solo a las propiedades necesarias del store
3. **React.lazy**: Code-splitting para rutas no críticas (páginas de perfil, configuración)
4. **Key props estables**: Usar IDs únicos, no índices de array

### Accesibilidad

1. **Semántica HTML**: `<nav>`, `<main>`, `<article>` en lugar de `<div>` genéricos
2. **Alt text**: Todas las imágenes deben tener descripción
3. **Keyboard navigation**: Componentes interactivos accesibles con teclado
4. **ARIA labels**: Especialmente en componentes sin texto visible

### Testing

1. **Unit tests**: Hooks complejos y funciones utilitarias
2. **Integration tests**: Flujos de usuario críticos (búsqueda, filtrado)
3. **Datos mockeados**: Exportar mocks desde archivos `data.ts` para consistencia

### Git y Versionado

1. **Commits atómicos**: Un cambio lógico por commit
2. **Mensajes descriptivos**: "feat: add filtering to cathalog", "fix: pagination boundary error"
3. **Branch naming**: `feature/cathalog-search`, `bugfix/header-mobile`

## Recursos y Referencias

- TypeScript strict mode: https://www.typescriptlang.org/tsconfig#strict
- Zustand best practices: https://docs.pmnd.rs/zustand/guides/practice-with-no-store-actions
- Tailwind CSS v4: https://tailwindcss.com/docs
- React 19 features: https://react.dev/blog/2024/04/25/react-19

---

**Última actualización**: Marzo 2026
**Mantenedores**: Equipo Biblioteams
