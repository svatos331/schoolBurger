import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { store } from "./business.InterfaceLayer/store";
import mainRouter from "./user.InterfaceLayer/router";
import ToasterModalWindow from "./user.InterfaceLayer/Components/generalComponents/ModalWindows/Toaster.modalWindow";
//@ts-ignore
// import {MyWidget} from 'your-library-name-test-aserbekov's

import "user.InterfaceLayer/styles/default.style.css";
import "user.InterfaceLayer/styles/global.style.css";
import "user.InterfaceLayer/styles/scrollbar.style.css";

const element = document.getElementById("app") as HTMLElement;
const root = ReactDOM.createRoot(element);
const routers = createBrowserRouter(mainRouter);

root.render(
	<React.StrictMode>
		{/* <MyWidget text={'fdfdfd'}/> */}
		<Provider store={store}>
			<RouterProvider router={routers} />
		</Provider>
		<ToasterModalWindow>
			<Toaster
				position="bottom-left"
				reverseOrder={false}
			/>
		</ToasterModalWindow>
	</React.StrictMode>
);
