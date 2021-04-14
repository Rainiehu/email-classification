package com.example.email.response;

import com.example.email.code.ActionCode;
import lombok.Data;

@Data
public class Response<T> {
    private int code;
    private String message;
    private T data;

    public Response(String message){
        this(ActionCode.ERROR,message,null);
    }
    public Response(ActionCode action){
        this(action,null);
    }
    public Response(ActionCode action, T data){
        this(action.code,action.message,data);
    }
    public Response(ActionCode action, String message, T data){
        this(action.code,message,data);
    }
    public Response(int code, String message) {
        this(code,message,null);
    }
    public Response(int code, String message, T data) {
        this.code = code;
        this.message = message;
        this.data = data;
    }
}