package com.example.demo.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
// import com.example.demo.model.Massage;

import com.example.demo.jwtAuthentication.jwt.resource.JwtAuthenticationRestController;

@CrossOrigin(origins ="http://localhost:4200")
@RestController
public class BasicAuthenticationController{
	
	@GetMapping("/basicauth")
	public String getMessage() {
		
		return JwtAuthenticationRestController.ttoken;
		
	}
	
//	@GetMapping("/error")
//	public Massage getError() {
//		
//		throw new RuntimeException("Error Happend ");		
//	}
//	
//	@GetMapping("/welcome-pathvariable/{name}")
//	public Massage getMessageWithPathVariable(@PathVariable String name) {
//		
//		return new Massage("welcome "+ name);
//		
//	}
}
