package com.example.email.controller;

import com.example.email.code.ActionCode;
import com.example.email.response.Response;
import org.springframework.http.HttpStatus;
import org.springframework.validation.BindingResult;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.io.IOException;
import java.util.List;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ResponseBody
    @ExceptionHandler(Exception.class)
    @ResponseStatus(HttpStatus.OK)
    public Response exceptionHandler(Exception ex) throws IOException {
        if (ex instanceof MethodArgumentNotValidException) {
            BindingResult result = ((MethodArgumentNotValidException) ex).getBindingResult();
            if (result.hasErrors()) {
                StringBuffer sb = new StringBuffer();
                printBindException(sb, result);
                return new Response<>(ActionCode.VALID,sb.toString(),null);
            }
        }
        return new Response<>(ActionCode.EXCEPTION);
    }
    private void printBindException(StringBuffer message, BindingResult result) {
        List<ObjectError> allErrors = result.getAllErrors();
        for (int i = 0; i < allErrors.size(); i++) {
            message.append(allErrors.get(i).getDefaultMessage());
            if (allErrors.size() > 1 && i < allErrors.size() - 1) {
                message.append(",");
            }
        }
    }
}