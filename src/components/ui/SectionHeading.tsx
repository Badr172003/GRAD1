import { motion } from 'framer-motion';

interface SectionHeadingProps {
  label?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeading({
  label,
  title,
  highlight,
  description,
  align = 'center',
  className = '',
}: SectionHeadingProps) {
  const centered = align === 'center';

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`${centered ? 'text-center mx-auto' : 'text-left'} max-w-2xl ${className}`}
    >
      {label && (
        <div className={`flex items-center gap-3 mb-4 ${centered ? 'justify-center' : 'justify-start'}`}>
          <span className="w-5 h-px bg-brand-400/50" aria-hidden="true" />
          <span className="text-brand-400 text-xs font-semibold tracking-[0.2em] uppercase">
            {label}
          </span>
          <span className="w-5 h-px bg-brand-400/50" aria-hidden="true" />
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight tracking-tight">
        {highlight ? (
          <>
            {title}{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-300 to-brand-500">
              {highlight}
            </span>
          </>
        ) : (
          title
        )}
      </h2>

      {description && (
        <p className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
