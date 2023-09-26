'use client';

interface InputProps {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
  disabled?: boolean;
  placeholder?: string;
  children?: React.ReactNode
}

const Input: React.FC<InputProps> = ({
  label,
  id,
  required,
  type = 'text',
  disabled,
  placeholder,
  children
}) => {
  return ( 
    <div>
      <label 
        htmlFor={id} 
        className="
          mx-4
          my-1
          block 
          text-sm 
          font-medium 
          leading-6 
          text-zinc-100
          text-lg
        "
      >
        {label}{children}
      </label>
      <div className="">
        <input
          id={id}
          type={type}
          autoComplete={id}
          disabled={disabled}
          className="p-1.5 mx-4 text-zinc-100 bg-zinc-950 rounded border border-zinc-500/40 hover:border-zinc-700/40 hover:bg-zinc-900/10"
        />
      </div>
    </div>
   );
}
 
export default Input;