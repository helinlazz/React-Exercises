<!-- Props - Default value
What happens if no name prop is passed to the Welcome component? Can you set a default value for the name prop? -->

Se non inseriamo il nome all'interno del Welcome ci uscirà "undefined", ma si può aggiungere un valore di default:

Welcome.default = {
name: "Anonimo"
};
