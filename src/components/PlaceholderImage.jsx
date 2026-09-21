export default function PlaceholderImage({ label = 'Editorial image placeholder', className = '' }) {
  return (
    <div className={`placeholder-image ${className}`} role="img" aria-label={label}>
      <div className="absolute inset-x-5 bottom-5 z-10 flex items-center justify-between gap-4 text-bone/80">
        <span className="text-[10px] uppercase tracking-[0.24em]">{label}</span>
        <span className="text-[10px] uppercase tracking-[0.24em]">YB</span>
      </div>
    </div>
  )
}
