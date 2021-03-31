import React from "react";
import {AlertContext} from "./AlertContext";

export const AlertState = () =>{
    return (
        <AlertContext.Provider>
            {children}
        </AlertContext.Provider>
    );
}