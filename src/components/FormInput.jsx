const FormInput = ({ label, name, type, defaultValue, size }) => {
  return (
    <div>
      <fieldset className="fieldset place-items-center">
        <legend className="fieldset-legend text-center capitalize">
          {label}
        </legend>
        <input
          type={type}
          name={name}
          className={`input input-bordered ${size}`}
          placeholder="Type here"
          defaultValue={defaultValue}
        />
      </fieldset>
    </div>
  );
};

export default FormInput;
