import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva('badge', {
  variants: {
    variant: {
      primary: 'badge-primary',
      secondary: 'badge-secondary',
      success: 'badge-success',
      danger: 'badge-danger',
      warning: 'badge-warning',
      info: 'badge-info',
    },
    size: {
      small: 'badge-small',
      medium: 'badge-medium',
      large: 'badge-large',
    },
    pill: {
      true: 'badge-pill',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'medium',
    pill: false,
  },
});

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, size, pill, ...props }, ref) => {
    return (
      <span
        className={cn(badgeVariants({ variant, size, pill, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Badge.displayName = 'Badge';

export { badgeVariants };
