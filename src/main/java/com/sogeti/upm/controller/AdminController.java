package com.sogeti.upm.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class AdminController {
	
	
	
	@RequestMapping(value = "/",method = RequestMethod.GET)
	public String  load() {
		return "index";
	}

}
