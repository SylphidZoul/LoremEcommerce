import * as React from 'react'
import { Svg } from '../StyledComponents/StyledPresentation'

export const Planet = (props) => {
  return (
    <Svg viewBox='0 0 64 64' {...props}>
      <circle cx={32} cy={32} fill='#69d6f4' r={24} />
      <path
        d='M28 54h4v1c-.1.34-.21.66-.34.98h-.01c.01.01.01.02 0 .02-1.46 3.6-4.98 6-8.93 6H11.65A9.65 9.65 0 012 52.35V50h8l2 4z'
        fill='#ccd1d9'
      />
      <path
        d='M24 42c1.1 0 2 .9 2 2 0 .55-.22 1.05-.59 1.41-.36.37-.86.59-1.41.59H8c-1.1 0-2-.9-2-2 0-.55.22-1.05.59-1.41.36-.37.86-.59 1.41-.59h15.82z'
        fill='#fcd770'
      />
      <path d='M24 46l4 8H12l-2-4H8v-4z' fill='#ffeaa7' />
      <path
        d='M60 44H44c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V46c0-1.1-.9-2-2-2z'
        fill='#d3a06c'
      />
      <path d='M56 44v4h-8v-4h4.79z' fill='#b27946' />
      <path
        d='M20 11.21v.07c0 1.77-.53 3.51-1.51 4.99L16 20l-3.45 5.17c-.34.52-.93.83-1.55.83s-1.21-.31-1.55-.83l-.32-.47-5.62-8.43A9.057 9.057 0 012 11.28V11c0-2.48 1.01-4.74 2.64-6.36A8.954 8.954 0 0111 2a9 9 0 019 9z'
        fill='#ff826e'
      />
      <circle cx={11} cy={11} fill='#fcd770' r={5} />
      <path
        d='M46.22 20.45c-.3.15-.6.29-.91.42-.2.08-.43.13-.65.13-.45 0-.86-.18-1.52-1-.09-.2-.14-.43-.14-.66 0-.22.05-.45.13-.65.13-.31.27-.61.42-.91.53-1.18 1.13-2.33 1.8-3.44.31-.54.64-1.06.99-1.58.83-1.28 1.75-2.5 2.76-3.67.64-.77 1.32-1.51 2.04-2.23L53 5l.76-.76a4.246 4.246 0 016 0 4.246 4.246 0 010 6L59 11l-1.86 1.86c-.72.72-1.46 1.4-2.23 2.04a33.514 33.514 0 01-3.67 2.76c-.52.35-1.04.68-1.58.99-1.11.67-2.26 1.27-3.44 1.8z'
        fill='#e6e9ed'
      />
      <g fill='#fcd770'>
        <path d='M59 11l3 9-1 1-6.09-6.09v-.01c.77-.64 1.51-1.32 2.23-2.04zM53 5l-1.86 1.86c-.72.72-1.4 1.46-2.04 2.23h-.01L43 3l1-1zM40 13l5.35 1.34c-.67 1.11-1.27 2.26-1.8 3.44l-5.12-2.56L38 15l.26-.26zM49.66 18.65L51 24l-2 2-2.78-5.55c1.18-.53 2.33-1.13 3.44-1.8z' />
      </g>
      <path d='M17 11c0-3.309-2.691-6-6-6s-6 2.691-6 6 2.691 6 6 6 6-2.691 6-6zM7 11c0-2.206 1.794-4 4-4s4 1.794 4 4-1.794 4-4 4-4-1.794-4-4zM52.043 10.54l1.414-1.414 1.414 1.414-1.414 1.414zM54.872 7.713l1.414-1.414L57.7 7.713l-1.414 1.414zM49.287 13.297l1.343-1.342 1.414 1.414L50.7 14.71z' />
      <path d='M60 43h-5.547A25.025 25.025 0 0057 32c0-5.08-1.516-9.919-4.361-14.076a38.593 38.593 0 002.209-1.661L61 22.414l2.144-2.144-3-9.001.32-.32A5.2 5.2 0 0062 7.242 5.249 5.249 0 0056.757 2a5.215 5.215 0 00-3.707 1.534l-.322.322-8.999-3L41.586 3l6.152 6.152a38.11 38.11 0 00-1.661 2.208A24.776 24.776 0 0032 7c-3.865 0-7.674.897-11.109 2.601C20.207 4.749 16.038 1 11 1 5.486 1 1 5.486 1 11v.275a9.97 9.97 0 001.68 5.547l5.367 8.05A24.963 24.963 0 007 32c0 3.116.565 6.136 1.673 9H8c-1.654 0-3 1.346-3 3 0 1.302.839 2.402 2 2.816V49H1v3.349C1 58.222 5.778 63 11.651 63H22.72c4.109 0 7.823-2.398 9.581-6.008a24.802 24.802 0 008.7-1.665V60c0 1.654 1.346 3 3 3h16c1.654 0 3-1.346 3-3V46A3.005 3.005 0 0060 43zm-11 2h6v2h-6zm-5-2h-2.986c.579-3.024.922-6.404.976-10h12.977a22.964 22.964 0 01-2.777 10zM32.969 54.798L33 53h-4.382l-3.189-6.379A2.996 2.996 0 0026.816 45h11.711c-1.352 5.386-3.457 8.946-5.558 9.798zM26.816 43a2.999 2.999 0 00-2.125-1.912A57.963 57.963 0 0124.02 33h15.97c-.057 3.697-.428 7.067-1.014 10zM9.038 31c.063-1.472.251-2.929.59-4.352a2.866 2.866 0 003.759-.925L16.535 21h6.451c-.579 3.024-.922 6.404-.976 10zM25.03 21h13.953c.606 3.058.944 6.462.999 10H24.019c.058-3.696.424-7.069 1.011-10zM32 9c1.777 0 3.605 2.012 5.072 5.514l-.76.76 1.304.652c.34.965.649 1.988.92 3.074H25.479C27.042 12.789 29.606 9 32 9zm11.08 7.422l-3.392-1.696.619-.618 3.514.878c-.258.472-.502.952-.741 1.436zm-.84 1.816l-.025.054c-.098.227-.15.466-.181.708h-1.446a39.766 39.766 0 00-.479-1.827zM54.961 31H41.982c-.053-3.518-.382-6.913-.968-10h1.584a2.642 2.642 0 003.109.785l.055-.025 2.964 5.928 3.381-3.382-1.294-5.177c.054-.033.106-.069.16-.103A22.758 22.758 0 0154.961 31zm-5.947-10.821l.878 3.514-.619.618-1.696-3.392c.485-.238.965-.482 1.437-.74zm11.698-.881l-4.338-4.338c.503-.453.997-.917 1.477-1.398l.711-.711zM56.757 4A3.246 3.246 0 0160 7.242c0 .867-.337 1.681-.95 2.293l-2.613 2.613a36.633 36.633 0 01-11.516 7.798c-.423.178-.921-.152-.921-.605a.67.67 0 01.053-.261 36.647 36.647 0 017.798-11.518l2.612-2.613v.001A3.227 3.227 0 0156.757 4zm-12.054-.712l6.446 2.149-.711.712c-.481.481-.945.975-1.398 1.477zm.167 9.899l-5.176-1.295-1.098 1.098c-.657-1.427-1.384-2.619-2.167-3.55a22.712 22.712 0 018.545 3.586c-.035.055-.071.107-.104.161zm-23.911-1.356a22.916 22.916 0 016.676-2.41c-1.764 2.09-3.227 5.425-4.22 9.579h-5.547l1.452-2.178c.995-1.493 1.54-3.21 1.639-4.991zM3 11.275V11c0-4.411 3.589-8 8-8s8 3.589 8 8v.275a7.977 7.977 0 01-1.344 4.438l-5.934 8.9c-.323.484-1.122.484-1.445 0l-5.934-8.9A7.981 7.981 0 013 11.275zM9.026 33H22.02c.042 2.766.255 5.446.637 8H10.836a22.778 22.778 0 01-1.81-8zM8 43h16a1.001 1.001 0 010 2H8a1.001 1.001 0 010-2zm1 4h14.382l3 6H12.618l-2-4H9zm13.72 14H11.651C6.881 61 3 57.119 3 52.349V51h6.382l2 4h19.573c-1.143 3.547-4.489 6-8.235 6zm13.644-6.42c1.764-2.09 3.228-5.426 4.221-9.58h.599A2.966 2.966 0 0041 46v7.163c-1.5.64-3.048 1.113-4.636 1.417zM61 60c0 .552-.449 1-1 1H44c-.551 0-1-.448-1-1V46c0-.552.449-1 1-1h3v4h10v-4h3c.551 0 1 .448 1 1z' />
      <path d='M57 57h2v2h-2zM53 57h2v2h-2zM13 49h2v2h-2zM17 49h2v2h-2zM21 49h2v2h-2zM27 35h2v2h-2zM31 35h2v2h-2zM35 35h2v2h-2zM31 27h2v2h-2zM27 27h2v2h-2zM35 27h2v2h-2z' />
    </Svg>
  )
}
