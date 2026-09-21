const BASE = import.meta.env.BASE_URL || '/yasrah-beauty/'

function pageKey(to) {
  if (!to || to === '/') return 'home'
  return to.replace(/^\//, '').replace(/\//g, '-')
}

export default function SiteLink({ to, children, className = '', onClick, ...props }) {
  const href = `${BASE}?page=${encodeURIComponent(pageKey(to))}#${to}`

  return (
    <a href={href} className={className} onClick={onClick} {...props}>
      {children}
    </a>
  )
}
