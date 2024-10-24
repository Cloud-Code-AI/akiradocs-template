import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Info, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

type CalloutType = 'info' | 'warning' | 'success' | 'error';

interface CalloutProps {
  type: CalloutType;
  title?: string;
  children: React.ReactNode;
  align?: 'left' | 'center' | 'right'; // Add align prop
}

const calloutStyles = {
  info: { icon: Info, className: 'border-blue-200 dark:border-blue-800' },
  warning: { icon: AlertTriangle, className: 'border-yellow-200 dark:border-yellow-800' },
  success: { icon: CheckCircle, className: 'border-green-200 dark:border-green-800' },
  error: { icon: XCircle, className: 'border-red-200 dark:border-red-800' }
};

export function Callout({ type, title, children, align = 'left' }: CalloutProps) {
  const { icon: Icon, className } = calloutStyles[type];
  const alignClass = align === 'center' ? 'mx-auto' : align === 'right' ? 'ml-auto' : '';

  return (
    <Alert className={`${className} ${alignClass} py-1`}>
      <Icon className="h-4 w-4" />
      {title && <AlertTitle>{title}</AlertTitle>}
      <AlertDescription>{children}</AlertDescription>
    </Alert>
  );
}
