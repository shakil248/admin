package com.sogeti.upm.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.sogeti.upm.dao.AdminDAO;
import com.sogeti.upm.model.Admin;

@Service
@Transactional
public class AdminServiceImpl implements AdminService {
	
@Autowired
AdminDAO adminDAO;

	public boolean doLogin(String loginId, String password) {
		
		if(null!=loginId && null!= password){
			Admin admin = adminDAO.getAdmin(loginId, password);
			if(null!= admin){
				return true;
			}
		}
		return false;
	}

}
