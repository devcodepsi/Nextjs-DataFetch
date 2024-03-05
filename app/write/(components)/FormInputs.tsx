export default function FormInputs() {
  return (
    <>
      <legend>---- Regist ----</legend>
      <div className="flex mt-3">
        <label className="w-[100px]">name</label>
        <input type="text" className="border" name="name" />
      </div>
      <div className="flex mt-3">
        <label className="w-[100px]">email</label>
        <input type="text" className="border" name="email" />
      </div>
      <div className="flex mt-3">
        <label className="w-[100px]">nickname</label>
        <input type="text" className="border" name="nickname" />
      </div>
      <input
        type="submit"
        value="submit"
        className="bg-blue-500 w-full text-white p-2 mt-3"
      />
    </>
  );
}
