// @ts-ignore
export function Section({ children, primary = false, id }) {
  return (
    <section
      className={primary ? 'section-primary' : 'section-secondary'}
      id={id}
    >
      <div className={'background-section-overlay'}></div>
      <div className={'section-container'}>{children}</div>
    </section>
  )
}
