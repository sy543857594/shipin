package com.top.filmvip.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(value="/videosearch")
public class VideoController {
	
	@RequestMapping(value="/vip")
	public  String  index() {
		
		return "video";
		
	}

}
