function FormInput({label, type}) {

  function capitalize(word) {
    let capitalizedWord = word[0].toUpperCase() + word.substring(1);
    return capitalizedWord
  }

  return ( 
    <div className={`${label}-container`}>
      <label htmlFor={label}>{capitalize(label)} </label>
      <input type={type} id={label} />
    </div>
   );
}

export default FormInput;