import { Scanner } from '@yudiel/react-qr-scanner';
import { SCAN_DATA } from '../../constants';
import { useState } from 'react';

const QRCodeScanner = () => {
  const [scans, setScans] = useState(null);

  const settings = {
    audio: false,
    finder: false,
  };

  const onScanHandler = (result) => {
    const resultData = result[0].rawValue;
    setScans(resultData);
    const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');
    if (!prevData.includes(resultData)) {
      localStorage.setItem(
        SCAN_DATA,
        JSON.stringify([...prevData, resultData])
      );
    }
  };

  return (
    <div>
      <Scanner
        onScan={onScanHandler}
        components={settings}
        styles={{ container: { width: 200 } }}
      />
      <div>
        <p>{scans}</p>
      </div>
    </div>
  );
};

export default QRCodeScanner;
