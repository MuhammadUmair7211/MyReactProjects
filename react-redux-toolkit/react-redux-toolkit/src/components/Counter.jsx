import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, add, subtract } from "../store";

function Counter() {
	const inputElement = useRef();
	const count = useSelector((state) => state.counter.countValue);
	const dispatch = useDispatch();

	const handleIncrement = () => {
		dispatch(increment());
	};

	const handleDecrement = () => {
		dispatch(decrement());
	};

	const handleAdd = () => {
		dispatch(add(inputElement.current.value));
		inputElement.current.value = "";
	};
	const handleSubtract = () => {
		dispatch(subtract(inputElement.current.value));
		inputElement.current.value = "";
	};
	return (
		<div className="counter-container">
			<h1 className="counter-heading">Counter</h1>
			<h1>The value of Count : {count}</h1>
			<div className="btn-container">
				<input type="text" placeholder="Enter a number" ref={inputElement} />
				<div>
					<button className="add-btn" onClick={handleAdd}>
						Add
					</button>
					<button className="subtract-btn" onClick={handleSubtract}>
						Subtract
					</button>
				</div>
			</div>
			<div className="increment-btn">
				<button className="increment-btn" onClick={handleIncrement}>
					+1
				</button>
				<button className="increment-btn" onClick={handleDecrement}>
					-1
				</button>
			</div>
		</div>
	);
}

export default Counter;
