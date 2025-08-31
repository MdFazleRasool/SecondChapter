import BasicInput from '@/shared/components/atoms/BasicInput';
import BasicText from '@/shared/components/atoms/BasicText';

export type FormInputProps = {
  label: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  error?: string;
};

export default function FormInput({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  required = false,
  error,
}: FormInputProps) {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="text-sm font-medium text-gray-700">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <BasicInput
              type={type}
              placeholder={placeholder}
              value={value}
              onChange={onChange} label={''}      />
      {error && <BasicText className="text-xs text-red-500">{error}</BasicText>}
    </div>
  );
}
