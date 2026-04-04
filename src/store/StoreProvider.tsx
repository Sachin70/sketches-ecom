'use client'

import { Provider } from 'react-redux'
import { store } from './store'
import { StoreRehydrator } from './StoreRehydrator'

export function StoreProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <StoreRehydrator />
      {children}
    </Provider>
  )
}

