export default function IconTachometerFast({
  width = '1em',
  heigth = '1em',
}: {
  width?: string
  heigth?: string
}) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" height={heigth} width={width}>
      <path d="M15.29 10.29l-2.78 2.78A2.09 2.09 0 0012 13a2 2 0 00-2 2 2.09 2.09 0 00.07.51l-.78.78a1 1 0 000 1.42 1 1 0 001.42 0l.78-.78A2.09 2.09 0 0012 17a2 2 0 002-2 2.09 2.09 0 00-.07-.51l2.78-2.78a1 1 0 00-1.42-1.42zM12 4A10 10 0 002 14a9.91 9.91 0 001.69 5.56 1 1 0 001.66-1.12 8 8 0 1113.3 0 1 1 0 00.27 1.39 1 1 0 00.56.17 1 1 0 00.83-.44A9.91 9.91 0 0022 14 10 10 0 0012 4z" />
    </svg>
  )
}
