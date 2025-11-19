import { QRCodeSVG } from 'qrcode.react';
import { SCAN_DATA } from '../constants';

const ScanHistory = () => {
  const scannedDataFromStorage = JSON.parse(localStorage.getItem(SCAN_DATA));
  return (
    <div>
      console.log("Hello world");
      {scannedDataFromStorage &&
        scannedDataFromStorage.map((data) => (
          <div>
            <QRCodeSVG value={data} size={100} />
            {data}
          </div>
        ))}
    </div>
  );
};

export default ScanHistory;
