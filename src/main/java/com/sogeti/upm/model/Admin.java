package com.sogeti.upm.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="ADMIN")
public class Admin {
	
	@Id
    @Column(name="id")
    @GeneratedValue(strategy=GenerationType.IDENTITY)
	private String id;
	
	@Column(name="login_id")
	private String loginId;
	@Column(name="password")
	private String password;
	
	
	public String getId() {
		return id;
	}


	public void setId(String id) {
		this.id = id;
	}


	public String getLoginId() {
		return loginId;
	}


	public void setLoginId(String loginId) {
		this.loginId = loginId;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	@Override
	public String toString() {
		return "Admin [id=" + id + ", loginId=" + loginId + ", password="
				+ password + "]";
	}
	
	

}
