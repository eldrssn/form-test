export const checkValidInput = (input) => {
  const onInputChange = () => {
    if (!input.value.trim()) {
      input.setCustomValidity('Поле не должно содержать только пробелы');
    } else {
      input.setCustomValidity('');
    }
    input.reportValidity();

    input.removeEventListener('input', onInputChange);
  };

  if (input) {
    input.addEventListener('input', onInputChange);
  }
};
