// Aca tambien hay que ver como dinamizar los estilos.

function FormInput({label, type, placeholder = ""}) {

  function capitalize(word) {
    let capitalizedWord = word[0].toUpperCase() + word.substring(1);
    return capitalizedWord
  }

  return ( 
    <div className={`${label}-container`}>
      <label htmlFor={label}>{capitalize(label)} </label>
      <input type={type} id={label} placeholder={placeholder} />
    </div>
   );
}

export default FormInput;