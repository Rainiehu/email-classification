package com.example.email.service;

import com.example.email.dao.UserDao;
import com.example.email.model.User;
import com.example.email.request.LoginRequest;
import com.example.email.request.RegisterRequest;
import com.example.email.response.LoginResponse;
import com.example.email.response.RegisterResponse;
import lombok.extern.slf4j.Slf4j;
import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.io.IOException;
import java.io.InputStream;


@Slf4j
@Service
public class UserService {
    String resource = "mybatis-config.xml";
    InputStream inputStream = Resources.getResourceAsStream(resource);
    SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(inputStream);

    @Autowired
    private UserDao userDao;

    public UserService() throws IOException {
    }

    public LoginResponse login(LoginRequest request) {
        User user = userDao.login(request.getEmail(), request.getPassword());
        if (user == null) {
            return null;
        }
        LoginResponse response = new LoginResponse();
        response.setUserId(user.getId());
        response.setUserName(user.getUserName());
        return response;
    }

    public RegisterResponse register(RegisterRequest request) throws Exception {
        User user = User.builder().
                email(request.getEmail()).
                phoneNumber(request.getPhoneNumber()).
                firstName(request.getFirstName()).
                middleName(request.getMiddleName()).
                lastName(request.getLastName()).
                mailAddress(request.getMailAddress()).
                occupation(request.getOccupation()).
                userName(request.getUserName()).
                password(request.getPassword()).
                build();

        // create operation should be atomic
        // mybatis helps you auto rollback so do not need to write again
        try (SqlSession sqlSession = sqlSessionFactory.openSession()) {
            userDao.register(user);
            sqlSession.commit();
        }

        RegisterResponse response = new RegisterResponse();
        response.setUserId(user.getId());
        return response;
    }
}