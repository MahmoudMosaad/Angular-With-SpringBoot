package com.example.basicAuthentication;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
// import com.example.demo.model.Massage;

@CrossOrigin(origins ="http://localhost:4200")
@RestController
public class BasicAuthenticationController{

	@GetMapping("/basicauth")
	public AuthenticationBean getMessage() {
		
		return new AuthenticationBean("welcome in spring boot");
		
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
