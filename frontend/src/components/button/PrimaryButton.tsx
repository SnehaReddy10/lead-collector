function PrimaryButton({
  label,
  type,
  className = '',
}: {
  label: string;
  type: 'submit' | 'reset' | 'button' | undefined;
  className?: string;
}) {
  return (
    <button
      type={type}
      className={`${className} bg-black h-min py-1 px-4 rounded-sm text-white`}
    >
      {label}
    </button>
  );
}

export default PrimaryButton;
