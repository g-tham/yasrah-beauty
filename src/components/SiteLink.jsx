const BASE = import.meta.env.BASE_URL || '/yasrah-beauty/'

export default function SiteLink({ to, children, className = '', onClick, ...props }) {
  const href = !to || to === '/'
    ? BASE
    : `${BASE}${to.replace(/^\/+/, '')}`

  return (
    <a href={href} className={className} onClick={onClick} {...props}>
      {children}
    </a>
  )
}
