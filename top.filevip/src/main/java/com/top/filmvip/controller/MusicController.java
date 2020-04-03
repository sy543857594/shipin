package com.top.filmvip.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.top.filmvip.util.MusicTools;

@Controller
public class MusicController {
	
	@RequestMapping("/")
	public  String  index() {
		
		return "index";
	}
	
	@RequestMapping(value = {"/searchmusic"}, method = {RequestMethod.POST})
	@ResponseBody
	public  String  queryMusicList(@RequestParam Map<String, String> mapParam) {
          Map<String,Object> map = new HashMap<String, Object>();
          HttpHeaders headers=new  HttpHeaders();
          //System.out.println(mapParam);
		  map.put("input", mapParam.get("input"));  
	      map.put("filter", mapParam.get("filter"));
	      map.put("page", mapParam.get("page"));
	      map.put("type", mapParam.get("type"));
		  headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
	      headers.set("X-Requested-With", " XMLHttpRequest");
	      String result= MusicTools.searchMusicDetail(map, headers);
		 return result;
		  
	}
	
	
	
	
	

}
