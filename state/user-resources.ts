import { createStore } from 'zustand/vanilla'
import { persist } from 'zustand/middleware'
import { createIndexedDBStorage } from 'zustand-indexeddb';
import { Resources } from '@/constants/resources';

type CustomResourcesStateStore = {
  addResource: (resource: Resources) => void
  resources: Resources[]
}

export const customResourcesState = createStore<CustomResourcesStateStore>()(
  persist(
    (set) => ({
      addResource: (resource) => {
        set((state) => ({
          resources: [...state.resources, resource]
        }))
      },
      resources: []
    }),
    {
      name: "user-resources",
      storage: createIndexedDBStorage('user-resources', 'state'),
      partialize: (state) => ({ resources: state.resources }),
    }
  )
)
