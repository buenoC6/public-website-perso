export default function IconPerson({
  width = '1em',
  heigth = '1em',
}: {
  width?: string
  heigth?: string
}) {
  return (
    <svg fill="currentColor" viewBox="0 0 16 16" height={heigth} width={width}>
      <path d="M8 8a3 3 0 100-6 3 3 0 000 6zm2-3a2 2 0 11-4 0 2 2 0 014 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
    </svg>
  )
}
