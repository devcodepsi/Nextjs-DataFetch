/** work flow
 * 1. action과 use server 이용한 등록
 **/

import { submitForm } from '@/lib/action';
import FormInputs from './(components)/FormInputs';

export default function Form() {
  type Inputs = {
    name: string;
    email: string;
    nickname: string;
  };

  return (
    <form action={submitForm}>
      <FormInputs />
    </form>
  );
}
