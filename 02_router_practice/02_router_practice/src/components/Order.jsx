import React from "react";
import { useNavigate } from "react-router-dom";

function Order() {
	const navigate = useNavigate();
	return (
		<div>
			<h1>Order Confirmed!</h1>
			<button onClick={() => navigate(-1)}>Back to Shop</button>
		</div>
	);
}

export default Order;
