import { useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  showFooter?: boolean;
  footerContent?: React.ReactNode;
  footer?: React.ReactNode;
}

export const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  size = 'medium',
  showFooter = false,
  footerContent,
  footer,
}: ModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const modalClasses = ['modal-content', `modal-${size}`].join(' ');

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className={modalClasses} onClick={(e) => e.stopPropagation()}>
        {title && (
          <div className="modal-header">
            <h3 className="modal-title">{title}</h3>
            <button className="modal-close" onClick={onClose}>
              ×
            </button>
          </div>
        )}
        <div className="modal-body">
          {children}
        </div>
        {(footer || (showFooter && footerContent)) && (
          <div className="modal-footer">
            {footer || footerContent}
          </div>
        )}
      </div>
    </div>
  );
};
