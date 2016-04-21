package com.sogeti.upm.dao;

import com.sogeti.upm.model.Admin;

public interface AdminDAO {
	
	public Admin getAdmin(String loginId, String password);

}
