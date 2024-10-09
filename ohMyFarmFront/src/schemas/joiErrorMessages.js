export const joiErrorMessages = {
  "any.required": 'El campo "{#key}" es requerido',
  "string.base": 'El valor de "{#key}" debe ser una cadena',
  "string.empty": 'El campo "{#key}" no debe estar vacío',
  "number.base": 'El valor de "{#key}" debe ser un número',
  "number.max": "El archivo no debe exceder los 5 MB",
  "object.base": 'El valor de "{#key}" debe ser un objeto',

  "string.email":
    'Debe proporcionar un correo electrónico válido para "{#key}"',
  "string.pattern.base":
    "La contraseña debe contener al menos una mayúscula, una minúscula y un número para {#key}",
  "movil.pattern.base":
    'El número de móvil debe contener entre 9 y 15 dígitos numéricos en el campo "{#key}"',
  "string.min": 'El campo "{#key}" debe tener al menos {#limit} caracteres',
  "string.max": 'El campo "{#key}" no debe exceder los {#limit} caracteres',
  "object.unknown": "No se permiten campos adicionales en este objeto",
};
