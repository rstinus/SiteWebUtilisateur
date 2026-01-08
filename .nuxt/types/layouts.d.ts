import type { ComputedRef, MaybeRef } from 'vue'
export type LayoutKey = "chronos" | "default" | "zenora"
declare module 'nuxt/app' {
  interface PageMeta {
    layout?: MaybeRef<LayoutKey | false> | ComputedRef<LayoutKey | false>
  }
}