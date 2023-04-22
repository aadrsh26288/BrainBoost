import React from "react";
import Home from "./Home";
import Courses from "./Courses";
import { CardsCarousel } from "./Features";
interface Props {
	active: string;
}

const Main = ({ active }: Props) => {
	console.log("active", active);
	switch (active) {
		case "Home":
			return <Home />;
		case "Courses":
			return <Courses />;
		case "Features":
			return <CardsCarousel />;
		default:
			return null;
	}
};

export default Main;
