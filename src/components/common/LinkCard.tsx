import { ReactNode } from 'react'

export default function LinkCard({ children }: { children: ReactNode }) {
  return <div className={'link-card'}>{children}</div>
}
