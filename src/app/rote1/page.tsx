'use client'

import {Button} from "@/components/Button/Button";
import {ChangeEvent, useState} from "react";

export default function Page() {

    const [inputValue, setInputValue] = useState('');

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(inputValue)
    };

    const handleOnclick = () => {
        alert('1111111111111')
    }
    return (
        <div>

            <h2 className="text-4xl font-bold"> эта роут один(1)</h2>
            <div className={'flex gap-3'}>

                <Button onClick={handleOnclick}
                        className={'h-[40px] w-[80px] bg-blue-200 border border-black cursor-pointer'}>Default11</Button>
                <Button onClick={handleOnclick}>Default22</Button>
                <Button onClick={handleOnclick} disabled={true}>DefDSBL</Button>
                <Button onClick={handleOnclick} variant='save'>Save</Button>
                <Button onClick={handleOnclick} variant='cancel'>Cancel</Button>
                <Button onClick={handleOnclick} disabled={true} variant='save'>SaveDSBL</Button>
                <Button onClick={handleOnclick} disabled={true} variant='cancel'>CancelDSBL</Button>

            </div>
            <br/>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    value={inputValue}
                    onChange={handleOnChange}
                    placeholder="Напишите что-нибудь..."
                    className="border border-gray-300"
                />


                <Button
                    type="submit"
                    variant="save"
                    disabled={!inputValue.trim()}// если форма пустая то не получится нажать
                >
                    Отправить
                </Button>


            </form>

        </div>
    );
}