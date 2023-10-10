import React, { useState } from 'react';
import './ClockWidget.css';

export default function clockWidget({ addClock }: { addClock: CallableFunction }) {
    const initStateForm = {
        name: '',
        timezone: undefined
    };

    const [stateForm, setStateForm] = useState(initStateForm);

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setStateForm({
            ...stateForm,
            [name]: value
        });
    }

    const addData = (e: React.FormEvent) => {
        e.preventDefault();
        addClock(stateForm);
        setStateForm(initStateForm);
    }

    return (
        <form className="form add-clock-form" onSubmit={addData}>
          <div className="form-column">
            <label htmlFor="name">Название</label>
            <input 
              type="text"
              name="name"
              id="name"
              className='form-input form-control'
              onChange={onChangeInput}
              value={stateForm.name}
              required
              placeholder='Moscow'
              />
          </div>
          <div className="form-column">
            <label htmlFor="timezone">Временная зона</label>
            <input
              type="text"
              name="timezone"
              id="timezone"
              className='form-input form-control'
              onChange={onChangeInput}
              value={stateForm.timezone || ''}
              required
              pattern='[\-\+]\d{1,2}'
              placeholder='+03 или -7'
              />
          </div>
          <div className="form-column">
            <button type="submit" className='form-btn form-control'>Добавить</button>
          </div>
        </form>
      );
}