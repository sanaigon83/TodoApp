import { MdAdd, MdOutlineSettingsSystemDaydream } from 'react-icons/md';
import './TodoInsert.scss';
import { useState, useCallback } from 'react';

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  // onClick으로 작성해도되나, onSubmit의 경우 입력창에서 Enter를 입력시에도 호출되므로
  // onClick으로 작성 후 별도의 Enter키 입력 처리를 해줄 필요가 없다.
  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue('');
      //submit event는 브라우저에서 새로고침을 유발하기 때문에 이를 방지하고자 preventDefault()를 호출한다.
      e.preventDefault();
    },
    [onInsert, value],
  );

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input placeholder="Enter to do" value={value} onChange={onChange} />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
