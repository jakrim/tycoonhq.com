export function Logomark(props) {
  return (
    <svg width="125" height="90" viewBox="0 0 125 90" fill="none" aria-hidden="true" {...props}>
      <rect x="8" y="6" width="47" height="5" fill="#FFD700"/>
      <rect width="47" height="5" transform="matrix(-1 0 0 1 117 6)" fill="#FFD700"/>
      <rect x="50" y="83" width="77" height="5" transform="rotate(-90 50 83)" fill="#FFD700"/>
      <rect width="77" height="5" transform="matrix(0 -1 -1 0 75 83)" fill="#FFD700"/>
      <rect width="62" height="5" fill="#FFD700"/>
      <rect width="62" height="5" transform="matrix(-1 0 0 1 125 0)" fill="#FFD700"/>
      <rect x="56" width="6" height="90" fill="#FFD700"/>
      <rect width="6" height="90" transform="matrix(-1 0 0 1 69 0)" fill="#FFD700"/>
      <rect x="12" y="12" width="36" height="5" fill="#FFD700"/>
      <rect width="36" height="5" transform="matrix(-1 0 0 1 113 12)" fill="#FFD700"/>
      <rect x="42" y="12" width="6" height="64" fill="#FFD700"/>
      <rect width="6" height="64" transform="matrix(-1 0 0 1 83 12)" fill="#FFD700"/>
    </svg>
  )
}

export function Logo(props) {
  return (
    <svg viewBox="0 0 106 40" aria-hidden="true" {...props}>
      <Logomark width="40" height="40" className="fill-cyan-500" />
      <svg height="60" width="200">
        <text x="45" y="25" fill="#171717" className='font-semibold'>Tycoon</text>
      </svg>
    </svg>
  )
}
