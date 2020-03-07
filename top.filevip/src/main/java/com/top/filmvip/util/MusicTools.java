package com.top.filmvip.util;

import java.util.Map;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;



public class MusicTools {
	public static final String  MUSIC_URL="http://music.onlychen.cn/";
	
	// API  接口  "http://music.onlychen.cn/"  post 请求 参数 input filter page type
 
	public  static String   searchMusicDetail(Map<String, Object> map, HttpHeaders headers) { // 查询音乐相关的信息
	
		      LinkedMultiValueMap<String,Object> body = new LinkedMultiValueMap<String,Object>();
		   
		     
		      for(Map.Entry<String, Object> entry:map.entrySet()) {
		    	  
		      	  body.add(entry.getKey(), entry.getValue()); 
		      }
		     
		      String  html= HttpPost(body,headers,MUSIC_URL);
		      return html;
		
	}
	

	public static String HttpPost( LinkedMultiValueMap<String,Object> body ,   HttpHeaders headers,String url) {
		
		  RestTemplate restTemplate = new RestTemplate();     // 调用 springboot rest模版
		  HttpEntity httpEntity = new HttpEntity(body, (MultiValueMap)headers);
	      ResponseEntity<String> strbody = restTemplate.exchange(url, HttpMethod.POST, httpEntity, String.class, new Object[0]);
		  return strbody.getBody();
	}
	
	
	public String searchQQmusic( LinkedMultiValueMap<String,Object> body ,   HttpHeaders headers,String url) {
		
		return HttpGet(body, headers, url);
	}
	
	public static String HttpGet( LinkedMultiValueMap<String,Object> body ,   HttpHeaders headers,String url) {
		
		  RestTemplate restTemplate = new RestTemplate();     // 调用 springboot rest模版
		  HttpEntity httpEntity = new HttpEntity(body, (MultiValueMap)headers);
	      ResponseEntity<String> strbody = restTemplate.exchange(url, HttpMethod.GET, httpEntity, String.class, new Object[0]);
		  return strbody.getBody();
	}
	
	
		     
		 
		   
	
	
}
