package com.example.email.model;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class User {
    private int id;
    private String email;
    private String phoneNumber;
    private String firstName;
    private String middleName;
    private String lastName;
    private String mailAddress;
    private String occupation;
    private String userName;
    private String password;
}