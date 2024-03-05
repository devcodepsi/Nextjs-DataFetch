/** work flow
 * 1. react hook form 을 이용한 등록
 **/
'use client';
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

export default function Form() {
  type Inputs = {
    name: string;
    email: string;
    nickname: string;
  };

  const { register, handleSubmit, formState } = useForm<Inputs>({
    defaultValues: {},
    mode: 'onBlur',
  });

  const [inputDatas, setInputDatas] = useState(null);
  const onSubmit: SubmitHandler<Inputs> = async (data: any) => {
    try {
      setInputDatas(data);
      console.log(data);
    } catch (e) {
      alert(e);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <legend>---- Regist ----</legend>
      <div className="flex mt-3">
        <label className="w-[100px]">name</label>
        <input
          type="text"
          className="border"
          {...register('name', {
            required: true,
            minLength: 3,
            maxLength: 10,
          })}
        />
      </div>
      {formState.errors.name && (
        <span style={{ color: 'red' }}>3~10글자를 입력하세요.</span>
      )}
      <div className="flex mt-3">
        <label className="w-[100px]">email</label>
        <input
          type="text"
          className="border"
          {...register('email', {
            required: true,
            pattern: /^\S+@\S+$/i,
          })}
        />
      </div>
      {formState.errors.email && (
        <span style={{ color: 'red' }}>이메일을 입력하세요.</span>
      )}
      <div className="flex mt-3">
        <label className="w-[100px]">nickname</label>
        <input
          type="text"
          className="border"
          {...register('nickname', {
            required: true,
            minLength: 3,
            maxLength: 10,
          })}
        />
      </div>
      {formState.errors.nickname && (
        <span style={{ color: 'red' }}>3~10글자를 입력하세요.</span>
      )}
      <input
        type="submit"
        value="submit"
        className="bg-blue-500 w-full text-white p-2 mt-3"
      />
    </form>
  );
}
