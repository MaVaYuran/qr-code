import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { GENERATE_DATA } from '../../constants';
import styles from './QRCodeGenerator.module.css';

const QRCodeGenerator = () => {
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');

  const onChangeHandler = (e) => {
    setResult('');
    setValue(e.target.value);
  };

  const onClickHandler = () => {
    const storeData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');
    localStorage.setItem(GENERATE_DATA, JSON.stringify([...storeData, value]));

    setResult(value);
    setValue('');
    console.log('storeData', storeData);
  };

  console.log('value', value);

  return (
    <div className={styles.generate}>
      <input
        type="text"
        value={value}
        onChange={onChangeHandler}
        placeholder="Введите текст..."
      />
      <button type="button" onClick={onClickHandler} className={styles.btnGNRT}>
        Generate QR
      </button>
      {result !== '' && <QRCodeSVG value={result} size={180} />}
    </div>
  );
};

export default QRCodeGenerator;
