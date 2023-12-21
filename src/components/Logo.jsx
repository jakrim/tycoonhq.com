import Image from 'next/future/image'

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

const imagePath = '/moralsLogos/moralsNoBackground.png';

export function Logo(props) {
  return (
    <div {...props} style={{ display: 'flex', alignItems: 'center' }}>
      {/* Image component to render your JPEG image */}
      <Image src={imagePath} alt='Morals Logo' width={60} height={60} />

      {/* Separate svg element for other graphical elements */}
      {/* <svg viewBox="0 0 225 60" aria-hidden="true"> */}
        <text x="35" y="25" fill="#171717" className='font-semibold'>MORALS</text>
      {/* </svg> */}
    </div>
  )
}
