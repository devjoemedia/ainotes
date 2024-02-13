import Logo from "./components/Logo";

export default function Page() {
  return (
    <div className='flex items-center justify-center h-[70%]'>
      <div className='flex flex-col items-center justify-center space-y-3'>
        <Logo size='lg' />
        <h2 className='text-2xl font-semibold'>Welcome to AI-Notes!</h2>
      </div>
    </div>
  );
}
