package com.example.email.dao;

import com.example.email.model.User;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface UserDao {
    User login(@Param("email") String email,
               @Param("password") String password);
    void register(User user) throws Exception;
}