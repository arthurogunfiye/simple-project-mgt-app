const Input = ({ label, textarea, ...props }, ref) => {
  return (
    <p className={paraStyles}>
      <label className={labelStyles}>{label}</label>
      {textarea ? (
        <textarea ref={ref} {...props} className={textareaStyles} />
      ) : (
        <input ref={ref} {...props} className={textareaStyles} />
      )}
    </p>
  );
};

export default Input;

const paraStyles = 'flex flex-col gap-1 my-4';
const labelStyles = 'text-sm font-bold uppercase text-stone-500';
const textareaStyles =
  'w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600';
