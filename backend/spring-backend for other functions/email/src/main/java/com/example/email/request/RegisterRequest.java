package com.example.email.request;

import lombok.Data;

import javax.validation.constraints.NotEmpty;

@Data
public class RegisterRequest {
    @NotEmpty(message = "email can not be empty")
    private String email;
    private String phoneNumber;
    private String firstName;
    private String middleName;
    private String lastName;
    private String mailAddress;
    private String occupation;
    @NotEmpty(message = "user name can not be empty")
    private String userName;
    @NotEmpty(message = "password can not be empty")
    private String password;
}
