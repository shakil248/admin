package com.sogeti.upm.dao;

import org.hibernate.Criteria;
import org.hibernate.criterion.Restrictions;
import org.springframework.stereotype.Repository;

import com.sogeti.upm.model.Admin;

@Repository
public class AdminDAOImpl extends BaseDAO implements AdminDAO  {

	@Override
	public Admin getAdmin(String loginId, String password) {
		Criteria cr = getSession().createCriteria(Admin.class);
		cr.add(Restrictions.eq("loginId", loginId));
		cr.add(Restrictions.eq("password", password));
		if(cr.list().size()>0){
			return (Admin) cr.list().get(0);
		}
		return null;
	}
	
	

}
