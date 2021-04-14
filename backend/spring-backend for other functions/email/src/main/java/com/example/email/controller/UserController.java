package com.example.email.controller;

import com.example.email.code.ActionCode;
import com.example.email.request.LoginRequest;
import com.example.email.request.RegisterRequest;
import com.example.email.response.LoginResponse;
import com.example.email.response.RegisterResponse;
import com.example.email.response.Response;
import com.example.email.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;


@RestController
public class UserController {
    @Autowired
    private UserService userService;

    @ResponseBody
    @RequestMapping(value = "/user/login", method = RequestMethod.POST)
    public ResponseEntity<Response> login(@RequestBody @Valid LoginRequest request) {
        LoginResponse response = userService.login(request);
        if (response == null) {
            return new ResponseEntity<>(new Response<>("Email/password incorrect"), HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(new Response<>(ActionCode.SUCCESS, response), HttpStatus.OK);
    }

    @ResponseBody
    @RequestMapping(value = "/user/register", method = RequestMethod.POST)
    public ResponseEntity<Response> register(@RequestBody @Valid RegisterRequest request) {
        RegisterResponse response;
        try {
            response = userService.register(request);
        } catch (Exception e) {
            System.out.println(e);
            return new ResponseEntity<>(new Response<>("This username/email has been registered"), HttpStatus.ALREADY_REPORTED);
        }
        return new ResponseEntity<>(new Response<>(ActionCode.SUCCESS, response), HttpStatus.OK);
    }


}

