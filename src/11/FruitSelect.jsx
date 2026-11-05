import React, {useState} from "react";
import './FruitSelect.css';

function FruitSelect(props) {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
      setValue(event.target.value);
    }
    const handleSubmit = (event) => {
      alert('입력한 이름: ' + value);
      event.preventDefault();
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>
                과일을 선택하세요
                <select value={value} onChange={handleChange}>
                    <option value={"apple"}>사과</option>
                    <option value={"banana"}>바나나</option>
                    <option value={"grapes"}>포도</option>
                    <option value={"melon"}>참외</option>
                </select>
            </label>
            <br/><br/>
            <button type="submit" onClick={handleSubmit}>제출</button>
        </form>

    );
}

export default FruitSelect;