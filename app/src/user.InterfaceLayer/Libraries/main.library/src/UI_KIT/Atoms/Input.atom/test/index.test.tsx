import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Input from "..";
import { InputTypeEnum } from "../enum";

describe("Input test", () => {
	test("render input", () => {
		render(
			<Input
				type={InputTypeEnum.TEXT}
				value=""
				onChange={(value: string) => {}}
			/>
		);
		expect(screen.getByTestId("input")).toBeInTheDocument();
	});
	test("input value changes", () => {
		render(
			<Input
				type={InputTypeEnum.TEXT}
				value="New Value"
				onChange={(value: string) => {}}
			/>
		);
		const inputElement = screen.getByTestId("input");
		expect(inputElement).toHaveValue("New Value");
	});
	test("displays error message when isError is true", () => {
		render(
			<Input
				type={InputTypeEnum.TEXT}
				value=""
				onChange={(value: string) => {}}
				isError={true}
			/>
		);

		expect(screen.getByText("Произошла ошибка")).toBeInTheDocument();
	});
});
