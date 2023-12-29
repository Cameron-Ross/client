import { useState, useRef, useEffect } from 'react';
import '../App.css';
import toast, { Toaster } from 'react-hot-toast';
import Button from '../components/Button';

export function Countdown() {

  const [timer, setTimer] = useState<number>(0);
  const [code, setCode] = useState<string>();
  const inputRef: any = useRef(null);

  useEffect(() => {
    if (timer == 0) inputRef.current.value = "";
    if (timer > 0) {
      const timerId = setTimeout(() => {
        setTimer(prev => prev - 1);
      }, 1000);
      return () => clearTimeout(timerId);
    }

  }, [timer]); 


  function onSubmit() {
    let verified = inputRef.current.value == code;
    if (verified) toast.success("Verified!");
    else toast.error("Wrong Code!");
    setTimer(0);
    inputRef.current.value = "";
  }

  function onGetCode() {
    setTimer(15);
    let newCode = generateCode();
    setCode(newCode);
    toast(newCode);
  }

  function generateCode() {
    let max: number = 999;
    let min: number = 100;
    let code: number = Math.floor(Math.random() * (max - min + 1)) + min;
    return code.toString();
  }

  return (
    <div className={'page'}>
      <h1>Enter confirmation code:</h1>
      <div className={'timerContainer'}>
        {timer != 0 && <p>Expires in {timer}s</p>}
        {timer == 0 && <Button name={"Get Code"} onClick={onGetCode}/>}
      </div>
      <div className={'formContainer'}>
        <input ref={inputRef} className={'input'} placeholder='Code' disabled={timer == 0} onKeyDown={(e) => {if(e.key == 'Enter') onSubmit()}}/>
        <Button name={"Submit"} onClick={onSubmit} disabled={timer == 0}/>
      </div>
      <Toaster/>
    </div>
  );
}