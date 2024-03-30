import { useState } from 'react';
import { z } from 'zod';

export function useForm<T>(initialValues: T, schema: z.Schema<T>) {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Record<string, string | undefined>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: undefined,
    }));
  };

  const validate = (): boolean => {
    try {
      schema.parse(values);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const updateErrors: Record<string, string> = {};
        for (const issue of error.issues) {
          updateErrors[issue.path[0]] = issue.message;
        }
        setErrors(updateErrors);
      }
      return false;
    }
  };

  const handleSubmit = (callback: (data: T) => void) => (e: React.FormEvent) => {
    e.preventDefault();
    const isValid = validate();
    if (isValid) callback(values);
  };

  return { values, errors, handleChange, handleSubmit };
}
