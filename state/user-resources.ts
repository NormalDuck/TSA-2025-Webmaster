import { createStore } from 'zustand/vanilla'
import { persist } from 'zustand/middleware'
import { set, del, get } from 'idb-keyval';
import { resources, Resources } from '@/constants/resources';

type CustomResourcesState = { resources: Array<Resources> }

type CustomResourcesActions = {
  addResource: (nextPosition: Resources) => void
}

type CustomResourcesStateStore = CustomResourcesState & CustomResourcesActions

const storage = {
  getItem: async (name: string) => (await get(name)) || null,
  setItem: async (name: string, value: unknown) => await set(name, value),
  removeItem: async (name: string) => await del(name),
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
    { storage: storage, name: "custom-resources" },
  ),
)
