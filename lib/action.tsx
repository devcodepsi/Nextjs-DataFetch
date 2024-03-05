export const submitForm = async (formData: any) => {
  'use server';
  const {name, email, nickname} = Object.fromEntries(formData);
  console.log(name, email, nickname);
};
