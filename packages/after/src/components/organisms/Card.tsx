import { cn } from '@/lib/utils';

interface CardProps {
  children?: React.ReactNode;
  title?: string;
  subtitle?: string;
  variant?: 'default' | 'bordered' | 'elevated' | 'flat';
  headerActions?: React.ReactNode;
}

const variantStyles = {
  default: 'border border-[rgba(0,0,0,0.12)] shadow-[0px_2px_1px_-1px_rgba(0,0,0,0.2),0px_1px_1px_0px_rgba(0,0,0,0.14),0px_1px_3px_0px_rgba(0,0,0,0.12)]',
  bordered: 'border border-[rgba(0,0,0,0.12)]',
  elevated: 'border border-[rgba(0,0,0,0.08)] shadow-[0px_2px_4px_-1px_rgba(0,0,0,0.12),0px_1px_2px_0px_rgba(0,0,0,0.08),0px_1px_4px_0px_rgba(0,0,0,0.08)]',
  flat: 'border border-[rgba(0,0,0,0.08)] bg-[#fafafa]',
};

export const Card = ({
  children,
  title,
  subtitle,
  variant = 'default',
  headerActions,
}: CardProps) => {
  return (
    <div
      className={cn(
        'rounded-md mb-4 overflow-hidden bg-white',
        variantStyles[variant]
      )}
      style={{ fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif" }}
    >
      {(title || subtitle || headerActions) && (
        <div
          className="py-5 px-5 border-b border-[rgba(0,0,0,0.08)] flex justify-between items-center bg-[#fafafa]"
        >
          <div>
            {title && (
              <h3 className="m-0 text-lg font-medium leading-[1.6] text-[rgba(0,0,0,0.87)]">
                {title}
              </h3>
            )}
            {subtitle && (
              <p className="mt-1 mb-0 text-sm font-normal leading-[1.43] text-[rgba(0,0,0,0.6)]">
                {subtitle}
              </p>
            )}
          </div>
          {headerActions && <div>{headerActions}</div>}
        </div>
      )}
      <div className="py-5 px-5">{children}</div>
    </div>
  );
};
