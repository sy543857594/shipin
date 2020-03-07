package com.top.filmvip.util;

import org.springframework.boot.web.server.ErrorPage;
import org.springframework.boot.web.server.ErrorPageRegistrar;
import org.springframework.boot.web.server.ErrorPageRegistry;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;

@Configuration
public class DealErro implements ErrorPageRegistrar { //处理错误页面

	public void registerErrorPages(ErrorPageRegistry registry) {
		
		 ErrorPage error404Page = new ErrorPage(HttpStatus.METHOD_NOT_ALLOWED, "/");
          
		 registry.addErrorPages(error404Page);
		 
	}

}
