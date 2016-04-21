package com.sogeti.upm.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sogeti.upm.service.AdminService;

@RestController
public class LoginController {
	
	@Autowired
	AdminService adminService;	

	@RequestMapping(value = "/performLogin", method = RequestMethod.GET)
    public boolean dologin(@RequestParam String loginId, String password) {
	  return adminService.doLogin(loginId, password);
    }

}
