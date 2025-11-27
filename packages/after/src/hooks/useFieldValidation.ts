import { useState, useCallback } from 'react';

// ✅ Good Practice: 비즈니스 로직을 커스텀 훅으로 분리

export type FieldType = 'username' | 'email' | 'postTitle' | 'slug' | 'normal';
export type EntityType = 'user' | 'post';

interface ValidationOptions {
  fieldType?: FieldType;
  entityType?: EntityType;
  checkBusinessRules?: boolean;
}

export const useFieldValidation = (options: ValidationOptions = {}) => {
  const { fieldType = 'normal', entityType, checkBusinessRules = false } = options;
  const [error, setError] = useState('');

  const validate = useCallback((value: string) => {
    setError('');

    if (!value) return true;

    // Username 검증
    if (fieldType === 'username') {
      if (value.length < 3) {
        setError('사용자명은 3자 이상이어야 합니다');
        return false;
      }
      if (!/^[a-zA-Z0-9_]+$/.test(value)) {
        setError('영문, 숫자, 언더스코어만 사용 가능합니다');
        return false;
      }
      if (value.length > 20) {
        setError('사용자명은 20자 이하여야 합니다');
        return false;
      }

      // 비즈니스 규칙: 예약어 체크
      if (checkBusinessRules) {
        const reservedWords = ['admin', 'root', 'system', 'administrator'];
        if (reservedWords.includes(value.toLowerCase())) {
          setError('예약된 사용자명입니다');
          return false;
        }
      }
    }

    // Email 검증
    else if (fieldType === 'email') {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        setError('올바른 이메일 형식이 아닙니다');
        return false;
      }

      // 비즈니스 규칙: User 엔티티의 이메일은 회사 도메인만
      if (checkBusinessRules && entityType === 'user') {
        if (!value.endsWith('@company.com') && !value.endsWith('@example.com')) {
          setError('회사 이메일(@company.com 또는 @example.com)만 사용 가능합니다');
          return false;
        }
      }
    }

    // Post Title 검증
    else if (fieldType === 'postTitle') {
      if (value.length < 5) {
        setError('제목은 5자 이상이어야 합니다');
        return false;
      }
      if (value.length > 100) {
        setError('제목은 100자 이하여야 합니다');
        return false;
      }

      // 비즈니스 규칙: 금칙어 체크
      if (checkBusinessRules && entityType === 'post') {
        const bannedWords = ['광고', '스팸', '홍보'];
        const hasBannedWord = bannedWords.some(word => value.includes(word));
        if (hasBannedWord) {
          setError('제목에 금지된 단어가 포함되어 있습니다');
          return false;
        }
      }
    }

    return true;
  }, [fieldType, entityType, checkBusinessRules]);

  const clearError = useCallback(() => {
    setError('');
  }, []);

  return {
    error,
    validate,
    clearError,
  };
};

