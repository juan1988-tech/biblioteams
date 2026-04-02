---
name: "create-component"
description: "Scaffold a new component following Biblioteams project conventions (folder, tsx, types.ts, data.ts)"
argument-hint: "Component name and type: e.g. 'BookDetail in components' or 'RatingBadge in elements'"
agent: agent
---

Crea un nuevo componente para el proyecto Biblioteams siguiendo las convenciones del proyecto.

## Información que necesitas del usuario

- **Nombre del componente**: en formato PascalCase (por ejemplo `BookDetail`, `RatingBadge`)
- **Carpeta destino**: `src/components/` para componentes con lógica de negocio, o `src/elements/` para unidades atómicas presentacionales
- **¿Tiene datos estáticos?**: si el componente renderiza listas o configuraciones estáticas, se crea `data.ts`
- **¿Tiene lógica compleja?**: si requiere efectos, estado derivado o llamadas a APIs, se crea `use{ComponentName}.ts`

---

## Estructura obligatoria a generar

```
{ComponentName}/
├── {ComponentName}.tsx      ← componente funcional (SIEMPRE)
├── types.ts                  ← tipos e interfaces (SIEMPRE)
├── data.ts                   ← datos estáticos tipados (si aplica)
└── use{ComponentName}.ts     ← custom hook (si hay lógica significativa)
```

---

## Reglas de implementación

### `{ComponentName}.tsx`

```tsx
import type { ComponentNameProps } from './types'
// importar data.ts si hay datos estáticos
// importar hook si hay lógica

const ComponentName: React.FC<ComponentNameProps> = ({ prop1, prop2 }) => {
  return (
    <section className="...clases tailwind...">
      {/* contenido del componente */}
    </section>
  )
}

export default ComponentName
```

- Siempre `export default`, nunca named export
- Tipado con `React.FC<Props>` usando el tipo importado desde `./types`
- Clases Tailwind CSS v4 usando variables custom del tema (`bg-primary`, `text-tittle-blue`, `font-comic-neue`, etc.)
- Breakpoints mobile-first con custom breakpoints del proyecto: `max-cellphone:`, `max-cellphone-hor:`, `max-tablet:`, `max-tablet-hor:`, `max-desktop:`
- **Prohibido usar estilos en línea** (`style={{ }}`) — toda la estilización debe hacerse exclusivamente con clases Tailwind
- Usar etiquetas semánticas HTML: `<section>`, `<article>`, `<header>`, `<nav>` en lugar de `<div>` genéricos

### `types.ts`

```ts
// Usar `type` en lugar de `interface` salvo excepciones justificadas
export type ComponentNameProps = {
  field1: string
  field2: number
  variant?: 'default' | 'compact'   // union types estrictos, no string genérico
}

// Si el componente renderiza listas desde data.ts:
export type ComponentNameItem = {
  id: string
  label: string
}

export type ComponentNameSet = ComponentNameItem[]
```

- Usar `type` en lugar de `interface` como patrón principal
- Nunca usar `any` ni `Function`; tipado estricto siempre
- Exportar todos los tipos que se usen en otros archivos del componente

### `data.ts`

```ts
import type { ComponentNameSet } from './types'

export const componentNameList: ComponentNameSet = [
  { id: 'item-1', label: 'Primer elemento' },
  { id: 'item-2', label: 'Segundo elemento' },
]
```

- Datos tipados con los tipos de `./types`
- Nombres de variables en camelCase
- Comentarios en español si se necesita aclaración

### `use{ComponentName}.ts` (solo si aplica)

```ts
import { useState, useEffect, useMemo } from 'react'
import type { ComponentNameProps } from './types'

const useComponentName = (props: ComponentNameProps) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [data, setData] = useState<DataType[]>([])

  // useMemo para cálculos costosos
  const processedData = useMemo(() => data.filter(/* condición */), [data])

  useEffect(() => {
    // lógica de efectos
  }, [])

  return { loading, error, data: processedData }
}

export { useComponentName }
```

---

## Convenciones del proyecto a respetar

| Aspecto | Regla |
|---|---|
| Nomenclatura en código | `Cathalog` (no `Catalogo`) — naming interno del proyecto |
| Rutas y UI | `Catálogo` / `/catalogo` — término correcto en español |
| Idioma del código | Inglés (variables, funciones, tipos) |
| Idioma de comentarios | Español |
| Estado global | Zustand con selectores individuales por propiedad |
| Imports de tipos | Siempre `import type { ... }` para optimizar el bundle |

---

## Diferencia entre `components/` y `elements/`

**`src/components/`** → Features completas con lógica de negocio:
- Pueden tener hooks propios, llamadas a APIs, conexión a stores Zustand
- Ejemplos: `Header`, `CathalogSearchBar`, `FilterCathalog`, `WorkShops`

**`src/elements/`** → Unidades atómicas presentacionales:
- Solo reciben props y renderizan UI, sin estado global ni fetch
- Ejemplos: `CathalogCard`, `PaginationButton`, `DarkBackground`, `FilterParameter`

---

## Ejemplo de referencia real del proyecto

Componente `WorkShops` (en `src/components/WorkShops/`):

**`types.ts`**:
```ts
type WorkShopCardProps = {
  tittle: string
  description: string
  schedule: string
  button: "Quiero más información"
  className: {
    classNameElement: string
    classNameButton: string
  }
}

export type WorkShopCardSet = WorkShopCardProps[]
```

**`data.ts`**:
```ts
import type { WorkShopCardSet } from "./types"

export const workshopCardList: WorkShopCardSet = [
  {
    tittle: "Club de lectura infantil",
    description: "Actividades de fomento de lectura y actividades lúdicas para niños y jóvenes",
    schedule: "Viernes: 05:00 p.m. - 06:00 p.m.",
    className: {
      classNameElement: "bg-[url(/assets/images/activities/activities-club-infantil.jpg)]",
      classNameButton: "bg-green-light-button"
    },
    button: "Quiero más información"
  },
]
```

**`WorkShops.tsx`**:
```tsx
import { workshopCardList } from "./data"

const WorkShops: React.FC = () => {
  return (
    <section className="grid grid-cols-2 grid-rows-2 h-full max-cellphone-hor:grid-cols-1">
      {workshopCardList.map((workshop) => (
        <article className={`h-105 ${workshop.className.classNameElement} bg-no-repeat bg-cover text-white-font ps-4`}>
          <h3 className="font-bold text-font-h2-28">{workshop.tittle}</h3>
          <p className="text-font-h3-24">{workshop.description}</p>
        </article>
      ))}
    </section>
  )
}

export default WorkShops
```

---

## Checklist antes de entregar

- [ ] La carpeta tiene el mismo nombre en PascalCase que el componente
- [ ] `{ComponentName}.tsx` usa `export default` y está tipado con `React.FC`
- [ ] `types.ts` usa `type` (no `interface` como patrón principal) y no hay `any`
- [ ] `data.ts` importa tipos desde `./types` y exporta datos con nombre descriptivo
- [ ] Los estilos usan variables del tema Tailwind, no colores hardcodeados
- [ ] No hay estilos en línea (`style={{ }}`) — solo clases Tailwind
- [ ] Los imports de tipos usan `import type`
- [ ] Los comentarios están en español, el código en inglés
