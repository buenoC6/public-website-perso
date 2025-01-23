// @ts-ignore
export function Section({ children, primary = false, id, style = undefined }) {
  return (
    <section
      style={style}
      className={primary ? 'section-primary' : 'section-secondary'}
      id={id}
    >
      <div className={'background-section-overlay'}></div>
      <div className={'section-container'}>{children}</div>
    </section>
  )
}
