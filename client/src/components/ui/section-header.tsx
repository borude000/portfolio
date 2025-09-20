interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({ 
  title, 
  subtitle, 
  centered = true, 
  className = "" 
}: SectionHeaderProps) {
  return (
    <div className={`mb-16 ${centered ? 'text-center' : ''} ${className}`}>
      <h2 className="text-3xl md:text-4xl font-sora font-bold text-dark mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-text max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
