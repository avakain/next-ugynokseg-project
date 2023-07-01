"use client"
import Login from './Login';
export default function Page() {

  return (
    <div className='sm:m-auto md:max-w-xl'>
      <div className="wrapper grid items-center rounded md:my-60">
        <div className="form-wrapper mt-40 p-8 flex flex-col bg-white rounded-xl shadow-lg">
          <Login />
        </div>
      </div>
    </div>
  );
}
