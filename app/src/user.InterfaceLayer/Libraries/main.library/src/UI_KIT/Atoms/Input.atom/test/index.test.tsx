import { render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import Input from "..";
import { inputTypeEnum } from "../type";

describe("Input test", () => {
	test("render input", () => {
		render(
			<Input
				type={inputTypeEnum.TEXT}
				value=""
				onChange={(value: string) => {}}
			/>
		);
		expect(screen.getByTestId("input")).toBeInTheDocument();
	});
});
