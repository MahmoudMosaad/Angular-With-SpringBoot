package com.example.basicAuthentication;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class Add_New_User_BCryptPasswordEncoder {

	public static void main(String[] args) {
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		
		for(int i = 0 ;i<10;i++)
		{
			
			String encodeString = encoder.encode("pass");
			System.out.println(encodeString);
		}
	}

}
