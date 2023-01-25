import React, { useState } from 'react';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const Checkbox: React.FC<{
  id?: string;
  name?: string;
  value?: string;
  label?: string;
}> = ({ id = '', name = '', value = '', label = '' }) => {
  const [checked, setChecked] = useState(false);

  return (
    <label htmlFor={id} className="flex items-center gap-2">
      <input
        type="checkbox"
        id={id}
        name={name}
        value={value}
        onChange={(event) => setChecked(event.target.checked)}
        className="hidden"
      />
      {checked ? (
        <CheckBoxIcon className="text-green-700" fontSize="small" />
      ) : (
        <div className={`w-5 h-5 rounded border border-2`} />
      )}
      <span className="text-sm text-gray-500">{label}</span>
    </label>
  );
};

export default Checkbox;
