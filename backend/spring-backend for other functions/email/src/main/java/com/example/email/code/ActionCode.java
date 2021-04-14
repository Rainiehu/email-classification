package com.example.email.code;

public enum ActionCode {
    ERROR(0, "Request Failed"),
    SUCCESS(1, "Request Success"),
    EXCEPTION(10, "Server Internal Error"),
    VALID(100, "Parameter Not Valid");

    public int code;
    public String message;


    ActionCode(int code, String message) {
        this.code = code;
        this.message = message;
    }
}