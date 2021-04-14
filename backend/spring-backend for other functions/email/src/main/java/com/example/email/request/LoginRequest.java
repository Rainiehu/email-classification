package com.example.email.request;

import lombok.Data;
import javax.validation.constraints.NotEmpty;

@Data
public class LoginRequest {
    @NotEmpty(message = "email can not be empty")
    private String email;

    @NotEmpty(message = "password can not be empty")
    private String password;

}