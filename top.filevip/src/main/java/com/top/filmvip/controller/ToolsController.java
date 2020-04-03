package com.top.filmvip.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
@RequestMapping("/tool")
public class ToolsController {
	
	@RequestMapping("/test")
	public String index() {

		System.out.println("xxx");
		return "sextest";
		
	}

	
	
}
