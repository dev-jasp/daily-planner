import { Switch } from 'antd';


function Header() {
  const onChange = (checked: boolean) => {
    console.log(`Switch to ${checked}`);
  };

  return (
    <header className='mb-20 flex items-center justify-between py-8 px-14'>
      <div className='flex flex-shrink-0 items-center'>
        <h1 className='font-roboto text-2xl font-bold text-plain'>PeakWeek</h1>
      </div>
      <div><Switch defaultChecked onChange={onChange} className='flex items-end'/></div>
    </header>
  );
}

export default Header;
