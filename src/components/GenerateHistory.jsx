import { GENERATE_DATA } from '../constants';
import { QRCodeSVG } from 'qrcode.react';

const GenerateHistory = () => {
  const generatedDataFromStorage = JSON.parse(
    localStorage.getItem(GENERATE_DATA)
  );
  return (
    <div>
      {generatedDataFromStorage &&
        generatedDataFromStorage.map((data) => (
          <div key={data}>
            <QRCodeSVG value={data} size={100} />
            {data}
          </div>
        ))}
    </div>
  );
};

export default GenerateHistory;
